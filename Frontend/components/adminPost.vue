<template>
    <div class="row">
        <div class="col-md-12">
            <fieldset class="et-adminField">
                <legend class="et-Legend">
                    <h1>{{ content.id}}| {{ content.title }}</h1>
                </legend>
                <p class="et-Text">{{ content.body }}</p>

                <div class="et-Controls">
                    <v-btn small class="et-Button" v-on:click="showModal = !showModal">Edit</v-btn>
                    <v-btn small class="et-Button">Delete</v-btn>
                </div>
            </fieldset>
        </div>

        <modal v-if="showModal"
               :content="content"
               @close="showModal = !showModal"
        >


            <div class="modal-header">
                <slot name="header">

                    <input
                            value="content.title"
                            class="input"
                            type="text"
                            placeholder="title">
                </slot>
            </div>

            <div class="modal-body">
                <slot name="body">
                    <textarea
                            class="textarea is-primary"
                            placeholder="Content"
                            v-model="content"
                    ></textarea>
                </slot>
            </div>

            <div class="modal-footer">
                <slot name="footer">
                    <v-btn small class="modal-default-button" @click="showModal=!showModal">
                        Cancel
                    </v-btn>
                    <v-btn small class="modal-default-button" @click="showModal=!showModal">
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
        props: ['content'],
        components: {modal},

        data() {
            return {
                value: '{{ content.title }}',
                showModal: false
            }
        },


    }
</script>

<style>
</style>
