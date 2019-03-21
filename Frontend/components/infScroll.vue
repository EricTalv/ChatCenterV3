<template>
    <div v-scroll="handleScroll">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "infscroll",

        methods: {
            handleScroll(event) {
                // Define variables
                let clientMaxHeight = this.$el.clientHeight; // Get full height of the site
                let clientCurrentHeight = event.pageY + window.innerHeight; // See clients current web-height

                // Calculations
                let percent = Math.round((clientCurrentHeight / clientMaxHeight) * 100); // Calculate the percentage of the height number

                // Checks
                if (percent >= 89) { // Check when we see 89% of the page
                    this.$store.dispatch('getNextPage'); // run dispatch
                }
            }
        }
    }
</script>

<style scoped>

</style>