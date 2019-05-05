export const state = () => ({
    modal: {
        visible: false,
        data: {
            title: '',
            content: '',
        }
    }
});


export const mutations = {
    // Change modals visiblity to true
    MODAL_VISIBLE(state) {
        state.modal.visible = true;
    },

    // Change modal visiblity to falsse
    MODAL_HIDE(state) {
        state.modal.visible = false;
    },


    // Sets opend modal's data
    ASSIGN_MODAL_DATA(state, title, content) {
        state.modal.data.title = title;
        state.modal.data.content = content;
    }

};

export const actions = {

    // Toggle modals visiblity
    showModal(context) {
        if (state.modal.visible) {
            context.commit('MODAL_VISIBLE')
        } else  {
            context.commit('MODAL_HIDE')
        }
    },

    // Set what data needs to be shown in the Modal
    setModalData(context) {
        context.commit('ASSIGN_MODAL_DATA', 'This is title', 'This is content')
    }


};

export const getters = {};
