import PublicFooter from '../PublicFooter/index.vue';
import PublicHeader from '../PublicHeader/index.vue';
import image404 from '../../assets/images/404.png';

export default {
    name: 'NotFoundComponent',
    data() {
        return {
            msg: '抱歉，你访问的页面不存在。',
            image404
        };
    },
    methods: {
        handleReturnHome() {
            this.$router.push('/');
        }
    },
    components: {
        PublicFooter,
        PublicHeader
    }
};
