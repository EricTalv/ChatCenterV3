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
    ASSIGN_MODAL_DATA(state, data) {
        state.modal.data.title = data.title;
        state.modal.data.content = data.content;
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
    setModalData(context, data) {
        context.commit('ASSIGN_MODAL_DATA', {
            title: data.title,
            content: data.content,
        })
    }


};

export const getters = {};
