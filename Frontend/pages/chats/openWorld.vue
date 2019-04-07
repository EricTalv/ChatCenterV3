<template>
    <v-container fluid>
        <v-layout>
            <v-flex shrink>
                <v-card>
                    <v-list>
                        <v-subheader>
                            <h3>Online Users:</h3>
                        </v-subheader>
                        <v-list-tile >
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
                        <v-list-tile>
                            <v-icon>keyboard_arrow_right</v-icon>
                            <v-list-tile-content>
                                Alex
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex grow>
                <v-card>
                    <v-card-text>
                        MESSAGES
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex shrink>
                <v-card>
                    <v-list>
                        <v-subheader>
                            <h3>History:</h3>
                        </v-subheader>
                        <v-list-tile >
                            <v-icon>keyboard_arrow_right</v-icon>
                            <v-list-tile-content>
                                James Connected | 14:24 07/04
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-icon>keyboard_arrow_right</v-icon>
                            <v-list-tile-content>
                                Dave Connected | 10:10 07/04
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-icon>keyboard_arrow_right</v-icon>
                            <v-list-tile-content>
                                Alex Connected | 11:55 07/04
                            </v-list-tile-content>
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