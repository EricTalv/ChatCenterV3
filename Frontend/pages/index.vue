<template>
    <section class="container">
        {{ getData }}
    </section>
</template>

<script>


    export default {
        data() {
            return {

            }
        },

        computed: {
            getData() {
                return this.$store.state.text;
            }
        }
    }
</script>

<style>

</style>
