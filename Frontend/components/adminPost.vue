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

        <modal v-if="showModal" :content="content"
               @close="showModal = !showModal"
        >
            <div class="modal-header">
                {{content.title}}
                <slot name="header">
                </slot>
            </div>

            <div class="modal-body">
                <textarea class="text-body">{{content.body}}</textarea>
                <slot name="body">
                </slot>
            </div>

            <div class="modal-footer">
                <slot name="footer">

                    <button class="modal-default-button" @click="showModal=!showModal">
                        OK
                    </button>
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

        data () {
            return {
                showModal: false
            }
        }
    }
</script>

<style scoped>

</style>
