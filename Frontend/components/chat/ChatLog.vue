<template>
    <div>
        <chat_message
              v-for="message in messages"
              :message="message"
              :key="message.user"
        ></chat_message>
    </div>
</template>

<script>

    import chat_message from '@/components/chat/ChatMessage';

    export default {
        name: "chatlog",
        components: { chat_message },
        props: ['messages']

    }
</script>

<style scoped>

</style>