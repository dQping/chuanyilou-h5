const getters = {
    requestLoading: state => state.app.requestLoading,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name
};

export default getters;
