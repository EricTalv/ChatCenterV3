<template>
    <div>
        <v-tabs class="et-Tabs-container"
                v-model="isActive"
                color="dark"
                slider-color="black"
                centered
                grow
        >

            <v-tab class="et-Tab" v-for="tab in tabs">
                {{ tab }}
            </v-tab>

            <slot></slot>

        </v-tabs>

    </div>
</template>

<script>

    export default {
        name: "tabs",
        props: ['tabs'],
        data(){
            return{
                isActive:this.active,
            }
        }

    }
</script>

<style scoped>
    .et-Tab {
        font-family: "Lucida Sans Typewriter", sans-serif;
    }
</style>