import Tick from '../tick'
import s from '../../utils/s'
import linkState from 'linkstate';
import { Component } from 'preact';


const Label = s('label')`db fw6 lh-copy f6`
const Input = s('input')`pa3 w-100 ba b--black-40 bg-transparent br2-ns lh-copy
 input-reset`
const TextArea = s('textarea')`db h8 pa3 w-100 ba b--black-40 bg-transparent
 lh-copy br2-ns input-reset`
const Btn = s('input')`f4 button-reset pv3 mb3 tc bn grow bg-black-80 
hover-bg-black-60 white pointer br3-ns w-100`

const Field = props => {
    const types = {
        input: Input,
        textarea: TextArea
    }
    const Element = types[props.element]
    return Element ? (<Element {...props}></Element>)
        : (<div>Wrong element type!</div>)
}

const SendBtn = ({ onClick, sent, ready }) => (
    <div class="fr w-100 w-25-m w-20-l">
        <div class="w-100 relative"><Tick visible={sent} /></div>
        <div class={'send-button ' + (ready ? 'o-100' : 'o-0')}>
            <Btn type="submit" onClick={onClick} value="Send" />
        </div>
    </div>
)

const Error = ({ msg }) => msg ? (<div class="f6 red mv1">{msg}</div>) : null

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: {},
            errors: {},
            error: '',
            sent: false,
            ready: true
        }
    }
    validateField = x => {
        const { values } = this.state
        const value = values[x.id]
        const { required, validators } = x
        if (required && !value) return 'Required';
        if (!validators) return
        if (validators.includes('email') && !emailRegex.test(value))
            return 'Invalid email'
    }
    onFieldBlur = x => e => {
        const { errors } = this.state
        const fieldError = this.validateField(x)
        if (!fieldError && errors[x.id]) delete errors[x.id]
        if (fieldError) errors[x.id] = fieldError
        this.setState({ errors })
    }
    onFieldFocus = e => {
        if (this.state.ready) return
        this.setState({ sent: false })
        setTimeout(() => this.setState({ ready: true }), 1300)
    }
    send = cb => e => {
        e.preventDefault()
        const errorCount = Object.keys(this.state.errors).length
        if (errorCount) return
        const { fields } = this.props
        const validationErrors = fields.map(this.validateField)

        if (validationErrors.some(x => x)) {
            const errors = validationErrors.reduce((a, x, i) => {
                if (x) a[fields[i].id] = x
                return a
            }, {})
            this.setState({ errors })
            return
        }
        cb(this.state).then(() => {
            this.setState({ sent: true, ready: false, values: {}, errors: {}, error: '' })
        }).catch(e => {
            this.setState({ error: "The form couldn't be submitted. Please try again!" })
        })

    }
    render(props, state) {
        const { fields, onSubmit } = props
        const { sent, ready, errors, error, values } = state
        return (
            <form class="measure center">
                <div class="ba b--transparent ph0 mh0">
                    {fields.map((x, i) => (
                        <div class='mv3'>
                            <Label for={x.id}>{x.label}</Label>
                            <Field value={values[x.id]}
                                onInput={linkState(this, `values.${x.id}`)}
                                onBlur={this.onFieldBlur(x)}
                                onFocus={this.onFieldFocus}
                                element={x.element} {...x} />
                            <Error msg={errors[x.id]} />
                        </div>
                    ))}
                </div>
                <Error msg={error} />
                <SendBtn onClick={this.send(onSubmit)} sent={sent}
                    ready={ready} />
            </form>)

    }
}

export default Form
