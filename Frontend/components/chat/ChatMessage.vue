<template>
    <div>
        <div class="headline">{{ user }}</div>
        <div>{{ message }}</div>
    </div>
</template>

<script>
    export default {
        name: "chatmessage",

        data() {
            return {
                user: "James",
                message: "Yikes!",
            }
        }
    }
</script>

<style scoped>

</style>