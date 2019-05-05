<template>
    <div class="row">
        <div class="col-md-12">
            <fieldset :content="item"
                      :key="item.id"
                      class="et-adminField"
                      v-for="item in Contents"
            >
                <legend class="et-Legend">
                    <h1>{{ item.id}}| {{ item.title }}</h1>
                </legend>
                <p class="et-Text">{{ item.body }}</p>

                <div class="et-Controls">
                    <v-btn class="et-Button" small v-on:click="showModal = !showModal">Edit</v-btn>
                    <v-btn class="et-Button" small>Delete</v-btn>
                </div>
            </fieldset>
        </div>

        <modal @close="showModal = !showModal"
               v-if="showModal"
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
                    <v-btn @click="showModal = !showModal" class="modal-default-button" small>
                        Cancel
                    </v-btn>
                    <v-btn @click="" class="modal-default-button" small>
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
                data: null
            }
        },

        created() {
            this.$store.dispatch('posts/retrieveData');

        },



        computed: {


            Contents() {

                return this.$store.state.posts.contents;
            },
        }
    }
</script>

<style>
</style>
