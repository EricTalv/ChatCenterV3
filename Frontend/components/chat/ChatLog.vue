<template>
    <div>
        <chat_message></chat_message>
        <chat_message></chat_message>
    </div>
</template>

<script>

    import chat_message from '@/components/chat/ChatMessage';

    export default {
        name: "chatlog",
        components: { chat_message },
    }
</script>

<style scoped>

</style>