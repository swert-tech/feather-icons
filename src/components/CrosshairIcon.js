export default {
    name: 'CrosshairIcon',

    props: {
        size: {
            type: String,
            default: '16',
            validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
        }
    },

    setup(props, ctx) {
        const size = props.size.slice(-1) === 'x'
            ? props.size.slice(0, props.size.length -1) + 'em'
            : parseInt(props.size) + 'px'

        const attrs = { ...ctx.attrs }
        attrs.width = attrs.width || size
        attrs.height = attrs.height || size

        return () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-crosshair" {...attrs}><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
    }
}