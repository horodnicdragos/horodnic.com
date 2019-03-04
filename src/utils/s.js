import { h } from 'preact'

const s = el => cls => props => h(el, {
    class: cls, ...props
}, props.children)

export default s