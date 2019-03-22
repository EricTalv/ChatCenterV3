<template>
    <div>
        <medium-editor
                :content='content'
                :options='options'>
        </medium-editor>
    </div>
</template>

<script>


    export default {
        name: "modalInterface",

        data() {
            return {
                content: "",
                options: {

                }
            }
        }
    }
</script>

<style scoped>

</style>