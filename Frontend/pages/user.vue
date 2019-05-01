<template>
    <v-app>
        <v-navigation-drawer
                app
                fixed
                v-model="drawer"
        >
            <v-list dense>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark fixed>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Your Profile</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container>
                <v-layout
                        align-center
                        justify-center
                >
                    <v-flex>
                        <v-card >
                            <v-card-title><h4>John</h4></v-card-title>
                            <v-divider></v-divider>
                            <v-list dense>
                                <v-list-tile>
                                    <v-list-tile-content>
                                        Email:
                                    </v-list-tile-content>
                                    <v-list-tile-content align-end>
                                        John@ef.com
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-content>
                                        Created at:
                                    </v-list-tile-content>
                                    <v-list-tile-content align-end>
                                        12:00
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-content>
                                        Updated at:
                                    </v-list-tile-content>
                                    <v-list-tile-content align-end>
                                        15:00
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>


                        </v-card>


                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer app dark>
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: "user",
        data: () => ({
            drawer: null
        })
    }
</script>