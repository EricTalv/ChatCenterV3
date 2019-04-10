<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container >
        <v-layout>
            <v-flex>
                <v-tabs
                        class="et-Tab"
                        slider-color="black"
                        centered
                        grow
                        v-model="model">
                        <v-tab :href="`#posts`" >Posts</v-tab>
                        <v-tab :href="`#chats`" >Chats</v-tab>
                </v-tabs>

                <v-tabs-items v-model="model">
                    <v-tab-item
                        :key="1"
                        :value="`posts`"
                    >
                        <div class="display-1 text-center ma-5">Posts</div>
                        <inf_scroll>
                            <post v-for="item in Contents"
                                  :content="item"
                                  :key="item.id"
                            ></post>
                            <div class="et-Footer" v-show="$store.state.isLoading">
                                <div class="loader"></div>
                            </div>
                        </inf_scroll>
                    </v-tab-item>
                    <v-tab-item
                        :key="2"
                        :value="`chats`"
                    >
                        <div class="display-1 text-center ma-5">Chats</div>
                    </v-tab-item>
                </v-tabs-items>

                <v-btn
                        small
                        top
                        right
                        fab
                        fixed
                        outline
                >
                    <v-icon>input</v-icon>
                </v-btn>

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
                model: 'posts'
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

<style>

    .et-Tab {
        font-family: "Lucida Sans Typewriter", sans-serif;
    }

    a:hover {
        text-decoration: none;
        color: #0E9FDE;
    }

</style>



