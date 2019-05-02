<!--suppress ALL -->
<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>
        <v-layout justify-center>
            <v-flex xl10>
                <v-tabs
                        class="et-Tab"
                        slider-color="black"
                        centered
                        grow
                        v-model="model">
                    <v-tab :href="`#posts`">Posts</v-tab>
                    <v-tab :href="`#chats`">Chats</v-tab>
                </v-tabs>

                <v-tabs-items v-model="model">
                    <v-tab-item
                            lazy
                            :key="1"
                            :value="`posts`"
                    >
                        <div class="display-1 text-center ma-5">Posts</div>
                        <post_list></post_list>
                    </v-tab-item>
                    <v-tab-item
                            lazy
                            :key="2"
                            :value="`chats`"
                    >
                        <div class="display-1 text-center ma-5">Chats</div>
                        <fieldset>
                            <legend>Open World Chat</legend>
                            <p>Your journey begins here</p>
                        </fieldset>
                    </v-tab-item>
                </v-tabs-items>
                <!--
                                <v-btn
                                        small
                                        top
                                        right
                                        fab
                                        fixed
                                        outline
                                        href="auth/login"
                                >
                                    <v-icon>input</v-icon>

                                    <v-speed-dial>

                                    </v-speed-dial>
                                </v-btn>-->

                <v-speed-dial
                        v-model="fab"
                        :top="top"
                        :bottom="bottom"
                        :right="right"
                        :left="left"
                        :direction="direction"
                        :open-on-hover="hover"
                        :transition="transition"
                        :fixed="fixed"
                >
                    <v-btn
                            slot="activator"
                            color="blue darken-2"
                            dark
                            fab
                            hover
                            v-model="fab"
                    >
                        <v-icon>account_circle</v-icon>
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-btn
                            dark
                            fab
                            small
                    >
                        <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn
                            dark
                            fab
                            small
                    >
                        <v-icon>add</v-icon>
                    </v-btn>
                </v-speed-dial>


            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    import post_list from '../components/PostList';

    export default {

        // Retrieve components
        name: "index",
        components: {post_list},

        data: () => ({
            direction: 'bottom',
            fab: true,
            fling: false,
            hover: false,
            tabs: null,
            top: true,
            right: true,
            bottom: false,
            left: false,
            fixed: true,
            transition: 'slide-y-reverse-transition'
        }),

        data() {

            return {
                model: 'posts'
            }
        },
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



