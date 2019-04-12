<template>
    <div>
        <div class="headline">{{ message.user }}</div>
        <div>{{ message.message }}</div>
    </div>
</template>

<script>
    export default {
        name: "chatmessage",
        props: ['message'],
    }
</script>

<style scoped>

</style>