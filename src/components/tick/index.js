import '../../style/tick';

const SVG = () => (
    <svg version="1.1" id="tick" x="0px" y="0px" viewBox="0 0 37 37" style="enable-background:new 0 0 37 37;">
    <path class="circ path" style="fill:none;stroke:rgba(0,0,0,.8);stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;" d="
        M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
        />
    <polyline class="tick path" style="fill:none;stroke:rgba(0,0,0,.8);stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;" points="
        11.6,20 15.9,24.2 26.4,13.8 "/>
    </svg>
)

const Tick = ({visible}) => (
    <div class="h3 w3 tick-wrapper">
        <div class={visible && 'drawn'}></div>
        <SVG/>
    </div>
)

export default Tick