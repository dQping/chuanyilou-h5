const app = {
    state: {
        requestLoading: 0
    },
    mutations: {
        SET_LOADING: (state, status) => {
            // error 的时候直接重置
            if (status === 0) {
                state.requestLoading = 0;
                return;
            }
            if (status) {
                ++state.requestLoading;
            } else {
                --state.requestLoading;
            }
        }
    },
    actions: {
        SetLoading({ commit }, status) {
            commit('SET_LOADING', status);
        }
    }
};

export default app;
