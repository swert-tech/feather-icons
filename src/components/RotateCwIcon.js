export default {
    name: 'RotateCwIcon',

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

        return () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rotate-cw" {...attrs}><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
    }
}