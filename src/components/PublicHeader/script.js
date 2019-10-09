import photoImg from '../../assets/images/default_photo.png';

export default {
    name: 'PublicHeader',
    data() {
        return {
            msg: '这里是公共头部信息',
            photoImg
        };
    },
    methods: {
        handleGoBack() {
            this.$router.go(-1);
        }
    }
};
