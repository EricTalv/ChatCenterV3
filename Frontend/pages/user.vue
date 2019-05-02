<template>
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
                    <v-list-tile-content >
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/">
                    <v-list-tile-action>
                        <v-icon>logout</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content >
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
            <v-container fluid >
                <v-layout
                        justify-center
                        align-center
                >
                    <v-flex>
                        <v-data-table
                            hide-actions
                            hide-headers
                            :items="users"
                        >
                            <td
                                v-for="item in users"
                            >
                                {{ item }}
                            </td>

                        </v-data-table>
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
            users: [
                {
                    name: 'John',
                    email: 'john@e.com',
                    updated: '23/10/11',
                    created: '11/01/10',
                },{
                    name: 'John',
                    email: 'john@e.com',
                    updated: '23/10/11',
                    created: '11/01/10',
                },{
                    name: 'John',
                    email: 'john@e.com',
                    updated: '23/10/11',
                    created: '11/01/10',
                },
            ],
        }),
        props: {
            source: String

        }
    }
</script>