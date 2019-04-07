<template>
    <v-container fluid>
        <v-layout>
            <v-flex xs3>
                <v-card min-width="250px">
                    <v-list>
                        <v-subheader>
                            <h3>Online</h3>
                        </v-subheader>
                        <v-divider></v-divider>
                        <v-list-tile>
                            <v-icon>keyboard_arrow_right</v-icon>
                            <v-list-tile-content>
                                James
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-icon>keyboard_arrow_right</v-icon>
                            <v-list-tile-content>
                                Dave
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex xs6>
                <v-card>
                    <v-subheader>
                        <h3>Messages</h3>
                    </v-subheader>
                    <v-divider></v-divider>
                    <v-card-title>
                        <h4 headline>James</h4>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti enim laborum magnam minus molestias natus necessitatibus nihil quod sit tempore? Aut, fugiat, sapiente. Aliquid atque excepturi laboriosam maiores quos similique!
                        </div>
                    </v-card-title>

                </v-card>
            </v-flex>
            <v-flex xs3>
                <v-card min-width="250px">
                    <v-list>
                        <v-subheader>
                            <h3>History</h3>
                        </v-subheader>
                        <v-divider></v-divider>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    James
                                </v-list-tile-title>
                                <v-list-tile-sub-title>
                                    Connected
                                </v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                14:45
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    Dave
                                </v-list-tile-title>
                                <v-list-tile-sub-title>
                                    Connected
                                </v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                12:20
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    Alex
                                </v-list-tile-title>
                                <v-list-tile-sub-title>
                                    Disconnected
                                </v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                11:50
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "openWorld"
    }
</script>

<style scoped>

</style>