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
    }
};

export const actions = {

    // Define The Action
    retrieveData(context) {
        // Send call to /content-data api and retrieve response
        this.$api.get('/content-data').then(response => {
            // Put our retrieve data(Response) to the content state
            context.commit('CONTENT_RETRIEVAL', response.data.data);
            // Load the current page object
            context.commit('SET_CURRENT_PAGE', response.data);
            // Set loading state
            context.commit('SET_LOADING', false);
        })

    },

    getNextPage(context) {
        // Check if we aren't on the last page
        // Check if if data is being recieved
        if (this.state.currentPage.last_page !== this.state.currentPage.current_page && !this.state.retrieving) {
            context.commit('SET_STATUS', true);
            context.commit('SET_LOADING', true);
            // Add current Page variable to api
            this.$api.get('/content-data?page=' + (this.state.currentPage.current_page + 1)).then(response => {
                // Retrieve first Data Object
                context.commit('SET_CURRENT_PAGE', response.data);
                // Get data array from that object
                context.commit('APPEND_NEW_DATA', response.data.data);
            })
        }

    }
};

export const getters = {};
