// noinspection SpellCheckingInspection
export const state = () => ({
    text: 'fasdfd',
});

export const mutations = {
    setTest(state, value) {
        state.text = value.test;
    }
};

export const actions = {
    testOne(context) {
        // noinspection JSUnresolvedVariable
        this.$api.get('/test').then(response => {
            context.commit('setTest', response.data);

        });
    }
};

export const getters = {

};
