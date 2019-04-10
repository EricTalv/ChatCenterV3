<template>
    <div class="row">
        <div class="col-md-12">
            <fieldset class="et-adminField">
                <legend class="et-Legend">
                    <h1>{{ content.id}}| {{ content.title }}</h1>
                </legend>
                <p class="et-Text">{{ content.body }}</p>

                <div class="et-Controls">
                    <button class="et-Button" v-on:click="showModal = !showModal">Edit</button>
                    <button class="et-Button">Delete</button>
                </div>
            </fieldset>
        </div>

        <modal v-if="showModal"
               :content="content"
               @close="showModal = !showModal"
        >
            <modal_interface></modal_interface>
            <!--<div class="modal-header">
                <slot name="header">
                    <h1>{{ content.title }}</h1>
                </slot>
            </div>

            <div class="modal-body">
                <slot name="body">
                    <div>{{ content.body }}</div>
                </slot>
            </div>

            <div class="modal-footer">
                <slot name="footer">
                    <button class="modal-default-button" @click="showModal=!showModal">
                        Cancel
                    </button>
                    <button class="modal-default-button" @click="showModal=!showModal">
                        Save
                    </button>
                </slot>
            </div>-->


            <div class="modal-footer">
                <slot name="footer">
                    <button class="modal-default-button" @click="showModal=!showModal">
                        Cancel
                    </button>
                    <button class="modal-default-button" @click="showModal=!showModal">
                        Save
                    </button>
                </slot>
            </div>

        </modal>
    </div>
</template>

<script>

    import modal from "../components/modal";
    import modal_interface from "./ModalInterface";

    export default {
        name: "admin_post",
        props: ['content'],
        components: {modal, modal_interface},

        data() {
            return {
                showModal: false
            }
        }
    }
</script>

<style>
 .medium-editor-toolbar {
     z-index: 9999 !important;
 }
</style>
