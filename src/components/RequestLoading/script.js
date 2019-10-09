import { mapGetters } from 'vuex';

export default {
    name: 'RequestLoading',
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['requestLoading'])
    }
};
