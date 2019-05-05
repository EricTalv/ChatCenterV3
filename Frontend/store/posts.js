// noinspection SpellCheckingInspection
export const state = () => ({
    // Here will be our data holders
    contents: [],
    currentPage: {},
    isLoading: true,
    retrieving: false,
});


export const mutations = {
    // Set where the content should be stored at
    CONTENT_RETRIEVAL(state, value) {
        state.contents = value;
    },
    // Set loading state
    SET_LOADING(state, value) {
        state.isLoading = value;
    },
    // Set our current page value
    SET_CURRENT_PAGE(state, value) {
        state.currentPage = value;
    },
    // Append retrieved data
    APPEND_NEW_DATA(state, value) {
        // Use map to push each value-item to the contents
        value.map(v => {
            state.contents.push(v);
        });
        // After pushing is done set retrieving to false
        state.retrieving = false;
        state.isLoading = false;
    },
    // Set our retrieval status
    SET_STATUS(state, value) {
        state.retrieving = value;
    },

};

export const actions = {
    // Get our first batch of data
    retrieveData(context) {
        // Send call to /content-data api and retrieve response
        this.$axios.get('/content-data').then(response => {
            // Store our retrieve data(Response) to the content state
            context.commit('CONTENT_RETRIEVAL', response.data.data);
            // Load the current page object
            context.commit('SET_CURRENT_PAGE', response.data);
            // Set loading state
            context.commit('SET_LOADING', false);
        })

    },

    // Get Another Page batch of data
    getNextPage(context) {
        // Check if we aren't on the last page
        // Check if data is being received
        if (context.state.currentPage.last_page !== context.state.currentPage.current_page && !context.state.retrieving) {
            context.commit('SET_STATUS', true);
            context.commit('SET_LOADING', true);
            // Add current Page variable to api
            this.$axios.get('/content-data?page=' + (context.state.currentPage.current_page + 1)).then(response => {
                // Retrieve first Data Object
                context.commit('SET_CURRENT_PAGE', response.data);
                // Get data array from that object
                context.commit('APPEND_NEW_DATA', response.data.data);
            })
        }
    },

};

export const getters = {};
