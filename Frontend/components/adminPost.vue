<template>
    <div class="row">
        <div class="col-md-12">
            <fieldset class="et-adminField"
                      v-for="item in Contents"
                      :content="item"
                      :key="item.id"
            >
                <legend class="et-Legend">
                    <h1>{{ item.id}}| {{ item.title }}</h1>
                </legend>
                <p class="et-Text">{{ item.body }}</p>

                <div class="et-Controls">
                    <v-btn small class="et-Button" v-on:click="showModal = !showModal">Edit</v-btn>
                    <v-btn small class="et-Button">Delete</v-btn>
                </div>
            </fieldset>
        </div>

        <modal v-if="showModal"
               @close="showModal = !showModal"
        >

            <div class="modal-header">
                <slot name="header">
                    <input
                            style="outline: 1px solid black; width: 100%; padding: 10px;"

                            type="text"
                            v-model="title"
                    >
                </slot>
            </div>

            <div class="modal-body">
                <slot name="body">
                    <textarea
                            style="outline: 1px solid black; width: 100%; padding: 10px;"
                            v-model="content"
                    ></textarea>
                </slot>
            </div>

            <div class="modal-footer">
                <slot name="footer">
                    <v-btn small class="modal-default-button" @click="showModal = !showModal">
                        Cancel
                    </v-btn>
                    <v-btn small class="modal-default-button" @click="">
                        Save
                    </v-btn>
                </slot>
            </div>
        </modal>
    </div>
</template>

<script>

    import modal from "../components/modal";

    export default {
        name: "admin_post",
        components: {modal},

        data() {
            return {
                showModal: this.$store.state.postEditor.modal.visible,
                title: '',
                content: '',
            }
        },

        created() {
            this.$store.dispatch('posts/retrieveData')
        },

        computed: {

            Contents() {
                // Return any new data from the Content State
                console.log(this.showModal);

                return this.$store.state.posts.contents;


            },
        }
    }
</script>

<style>
</style>
