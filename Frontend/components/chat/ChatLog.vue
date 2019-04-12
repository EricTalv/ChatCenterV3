<template>
    <div>
        <chat_message
              v-for="message in messages"
              :message="message"
        ></chat_message>
    </div>
</template>

<script>

    import chat_message from '@/components/chat/ChatMessage';

    export default {
        name: "chatlog",
        components: { chat_message },

        data() {
            return {
                messages: [
                    {
                        message: 'Hello!',
                        user: 'James',
                    },

                    {
                        message: 'Hello!',
                        user: 'Dave',
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>