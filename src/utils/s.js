import { h } from 'preact'

/*  This is just an utility that allows declaring classes on components in a 
    styled components fashion.

    Example:
    const MyDiv = s('div')`border-box pa3`
*/
const s = el => cls => props => h(el, {
    class: cls, ...props
}, props.children)

export default s