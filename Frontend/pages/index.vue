<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="container">
        <v-tabs class="et-Tabs-container"
                v-model="isActive"
                color="dark"
                slider-color="black"
                centered
                grow
        >
            <!--<v-tab class="et-Tab">POSTS</v-tab>-->
            <!--<v-tab class="et-Tab">CHATS</v-tab>-->

            <v-toolbar extended>

                <v-toolbar-side-icon>logan</v-toolbar-side-icon>

                <template v-slot:extension>
                    <v-toolbar-title class="white--text">Title</v-toolbar-title>
                </template>

                <v-toolbar-items>
                    <v-btn flat>item</v-btn>
                </v-toolbar-items>
            </v-toolbar>

            <v-tab-item>
                <inf_scroll>
                    <h1 class="text-center">Posts</h1>
                    <post
                            v-for="item in Contents"
                            :content="item"
                            :key="item.id"
                    ></post>

                    <div class="et-Footer" v-show="$store.state.isLoading">
                        <div class="loader"></div>
                    </div>
                </inf_scroll>
            </v-tab-item>

            <v-tab-item>
                <h1 class="text-center">Chats</h1>
                <div class="row">
                    <div class="col-md-12">
                        <fieldset class="et-Field">
                            <legend class="et-Legend">
                                <h1>Open World Chat</h1>
                            </legend>
                            <p class="et-Text">This will be an open world Chat, without excemptions</p>
                            <v-layout>
                                <v-flex xs12>
                                    <v-text-field
                                            label="Insert a Nickname"
                                            outline
                                    ></v-text-field>
                                </v-flex>

                                <div>
                                    <v-btn flat large outline >Join Chat</v-btn>
                                </div>
                            </v-layout>
                        </fieldset>
                    </div>
                </div>
            </v-tab-item>

        </v-tabs>
    </div>
</template>

<script>

    import post from '../components/post';
    import inf_scroll from '../components/infScroll';

    export default {

        // Retrieve components
        name: "index",
        components: {post, inf_scroll},

        data() {
            return {}
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



