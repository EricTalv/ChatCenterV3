<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                fixed
                app
        >
            <v-list dense>
                <v-list-tile to="/">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/">
                    <v-list-tile-action>
                        <v-icon>logout</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Logout</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <v-layout
                        justify-center
                        align-center
                >
                    <v-flex max-width="20px">
                        <v-card>
                            <v-list dense>
                                <v-list-tile>
                                    <v-list-tile-title>
                                        Name
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        {{ userData.name }}
                                    </v-list-tile-sub-title>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-title>
                                        Email
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        {{ userData.email }}
                                    </v-list-tile-sub-title>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-title>
                                        Id
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        {{ userData.id }}
                                    </v-list-tile-sub-title>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-title>
                                        Created At
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        {{ userData.created_at }}
                                    </v-list-tile-sub-title>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-title>
                                        Updated At
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        {{ userData.updated_at }}
                                    </v-list-tile-sub-title>
                                </v-list-tile>

                            </v-list>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer dark app>
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: "user",
        data: () => ({
            drawer: null,
            userData: [],
        }),
        props: {
            source: String
        },

        created() {
            this.$axios.get('/user')
                .then((resp) => {
                    console.log(resp.data.data)
                    this.userData = resp.data.data;
                    console.log(this.userData.email)
                })
                .catch((err) => {
                    console.log({err})

                })
        }
    }
</script>