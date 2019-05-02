<<<<<<< HEAD
<template>
    <v-app>
        <v-navigation-drawer
                app
                fixed
                v-model="drawer"
        >
            <v-list dense>
                <v-list-tile @click="">
=======
<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                fixed
                app
        >
            <v-list dense>
                <v-list-tile to="/">
>>>>>>> a74d0c8de6ed47886da3ae765b21ca9990895a70
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
<<<<<<< HEAD
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


=======
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
                                        {{ user.name }}
                                    </v-list-tile-sub-title>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-title>
                                        Email
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        {{ user.email }}
                                    </v-list-tile-sub-title>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-title>
                                        Updated
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        {{ user.updated }}
                                    </v-list-tile-sub-title>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-title>
                                        Created
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        {{ user.created }}
                                    </v-list-tile-sub-title>
                                </v-list-tile>
                            </v-list>
                        </v-card>
>>>>>>> a74d0c8de6ed47886da3ae765b21ca9990895a70
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
<<<<<<< HEAD
        <v-footer app dark>
=======
        <v-footer dark app>
>>>>>>> a74d0c8de6ed47886da3ae765b21ca9990895a70
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: "user",
        data: () => ({
<<<<<<< HEAD
            drawer: null
        })
=======
            drawer: null,
            user: {
                name: 'John',
                email: 'John@e.com',
                updated: '12/05/19',
                created: '11/02/12',
            },

        }),
        props: {
            source: String

        }
>>>>>>> a74d0c8de6ed47886da3ae765b21ca9990895a70
    }
</script>