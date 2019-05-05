export const state = () => ({
    modal: {
        edit: {
            active: false,
            title: 'Create Post',
            closeAction: 'postsEditor/toggleModal',
            saveAction: 'postsEditor/createPost',
            name: 'edit',
            id: 0,
            data: {
                title: '',
                content: ''
            }
        }
    }
});


export const mutations = {
    // Set Post data into the Modal
    SET_MODAL_DATA(state, data){
        state.modal[data.modal].data[data.key] = data.value;
    },

    // Update modal
    UPDATE_MODAL(state, data){
        state.modal[data.modal] = {...state.modal[data.modal], ...data }
    },

    // Add a new Post

    // Update a post

    // Delete a Post
};

export const actions = {

    // Update modal data
    setModalData(context, data) {
        if(data.id){
            context.commit('UPDATE_MODAL', {
                modal: data.modal,
                id: data.id,
                title: 'Edit Post',
                data: Object.assign({}, context.state.list.filter((el)=> el.id == data.id)[0]),
                saveAction: 'posts/savePost'
            });
        } else {
            context.commit('UPDATE_MODAL', {
                modal: 'edit',
                id: 0,
                title: 'Create Post',
                data: {},
                saveAction: 'posts/createPost'
            });
        }
    },

    // Set post modal Data
    setFormData(context, data){
        context.commit('SET_MODAL_DATA', data)
    },


};

export const getters = {};
