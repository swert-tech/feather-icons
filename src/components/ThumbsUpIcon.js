export default {
    name: 'ThumbsUpIcon',

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

        return () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up" {...attrs}><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
    }
}