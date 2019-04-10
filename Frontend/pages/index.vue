<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>
        <v-layout>
            <v-flex>
                <v-tabs>
                    <v-tab>one</v-tab>
                    <v-tab>two</v-tab>
                </v-tabs>

                <v-tabs-items v-model="tabs">
                    <v-tab-item
                        :key="tab-1"
                    >
                        to one
                    </v-tab-item>
                    <v-tab-item
                        :key="tab-2"
                    >
                        to two
                    </v-tab-item>
                </v-tabs-items>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    import post from '../components/post';
    import inf_scroll from '../components/infScroll';

    export default {

        // Retrieve components
        name: "index",
        components: {post, inf_scroll},

        data() {
            return {
                tabs: 'tab-1'
            }
        },

        // After all data has been received and rendered
        created() {
            // Perform dispatch to retrieveData from Store
            this.$store.dispatch('retrieveData');
        },

        // Computes any changes
        computed: {
            // Retrieve any data stored in Contents.State
            Contents() {
                return this.$store.state.contents;
            }
        }

    }
</script>

<style scoped>

    .et-Tab {
        font-family: "Lucida Sans Typewriter", sans-serif;
    }

</style>



