<template>
    <div>
        <v-text-field
            full-width
            box
            label="Message"
            v-model="messageText"
            v-on:keyup.enter="sendMessage"
    >
    </v-text-field>
    </div>

</template>

<script>
    // noinspection SpellCheckingInspection
    export default {
        name: "chatcomposer",

        data() {
            return {
                messageText: ''
            }
        },

        methods: {
            sendMessage() {
                this.$emit('messagesent', {
                    message: this.messageText,
                    user: "James"
                });
                this.messageText = "";
            }
        }
    }
</script>

<style scoped>

</style>