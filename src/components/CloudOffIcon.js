export default {
    name: 'CloudOffIcon',

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

        return () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-off" {...attrs}><path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
    }
}