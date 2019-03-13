export const state = () => ({
    text: 'Helloworld',
});

export const mutations = {
    setTest(state, value) {
        state.text = value.test;
    }

};

export const actions = {
    testOne(context) {
        this.$api.get('/test').then(response => {
            context.commit('setTest', response.data);

        });
    }
};

export const getters = {

};
