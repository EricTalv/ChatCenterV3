<!--suppress ALL -->
<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>
        <v-layout justify-center>
            <v-flex xl10>
                <v-tabs
                        centered
                        class="et-Tab"
                        grow
                        slider-color="black"
                        v-model="model">
                    <v-tab :href="`#posts`">Posts</v-tab>
                    <v-tab :href="`#chats`">Chats</v-tab>
                </v-tabs>

                <v-tabs-items v-model="model">
                    <v-tab-item
                            :key="1"
                            :value="`posts`"
                            lazy
                    >
                        <div class="display-1 text-center ma-5">Posts</div>
                        <post_list></post_list>
                    </v-tab-item>
                    <v-tab-item
                            :key="2"
                            :value="`chats`"
                            lazy
                    >
                        <div class="display-1 text-center ma-5">Chats</div>
                        <fieldset>
                            <legend>Open World Chat</legend>
                            <p>Your journey begins here</p>
                        </fieldset>
                    </v-tab-item>
                </v-tabs-items>
                <v-speed-dial
                        class="et-Levitate"
                        direction="bottom"
                        fixed
                        open-on-hover
                        right
                        top
                        transition="slide-y-reverse-transition"
                >
                    <v-btn
                            fab
                            hover
                            outline
                            slot="activator"
                    >
                        <v-icon>account_circle</v-icon>
                    </v-btn>

                    <v-btn
                            dark
                            fab
                            href="auth/login"
                            small
                            v-if="!token"

                    >
                        <v-icon>chevron_right</v-icon>
                    </v-btn>
                    <v-btn
                            dark
                            fab
                            href="auth/register"
                            small
                            v-if="!token"
                    >
                        <v-icon>assignment_ind</v-icon>
                    </v-btn>
                    <v-btn
                            dark
                            fab
                            small
                            v-if="token"
                            v-on:click="logout"
                    >
                        <v-icon>logout</v-icon>
                    </v-btn>
                    <v-btn
                            dark
                            fab
                            href="user"
                            small
                            v-if="token"
                    >
                        <v-icon>person</v-icon>
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

        data() {
            return {
                model: 'posts',
                token: null
            }
        },

        methods: {
            async logout() {

                await this.$auth.logout()
                    .then((resp) => {
                        console.log(resp)
                        console.log('good')
                    })
                    .catch((err) => {
                        console.log(err)
                        console.log('bad')

                    });

            }
        },

        mounted() {
            if ( window.localStorage.getItem('auth._token.local') ) {
                console.log("You have a token")
                this.token = true;
            } else {
                console.log("You dont have a token")
                this.token = false;
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

    .et-Levitate {
        z-index: 9000;
    }

</style>



