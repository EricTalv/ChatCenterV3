// noinspection SpellCheckingInspection
export const state = () => ({
    text: "",
    contents: []
});

export const mutations = {
    setTest(state, value) {
        state.text = value.test;
    },

    ContentRetrieval(state, value) {
        state.contents = value;
    }
};

export const actions = {
    testOne(context) {
        // noinspection JSUnresolvedVariable
        this.$api.get('/test').then(response => {
            context.commit('setTest', response.data);

        });
    },

    retrieveData(context) {
        // noinspection JSUnresolvedVariable
        this.$api.get('/content-data').then(response => {
            context.commit('ContentRetrieval', response.data);

        });
    }
};

export const getters = {

};
