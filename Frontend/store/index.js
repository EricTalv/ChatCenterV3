// noinspection SpellCheckingInspection
export const state = () => ({
    // Here will be our data holder
    contents: []
});


export const mutations = {

    // Set where the content should be stored at
    ContentRetrieval(state, value) {
        state.contents = value;
    }
};

export const actions = {

    // Define The Action
    retrieveData(context) {
        // Send call to /content-data api and retrieve response
        this.$api.get('/content-data').then(response => {
            context.commit('ContentRetrieval', response.data);

        });
    }
};

export const getters = {

};
