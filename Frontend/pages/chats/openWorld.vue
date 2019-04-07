<template>
    <v-container fluid>
        <v-layout>
            <v-flex>
                <v-card>

                <v-list>
                    <v-list-title>
                        Online Users:
                    </v-list-title>

                    <v-list-tile>
                        <v-list-tile-content>
                            James
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-content>
                            Dave
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-content>
                            Alex
                        </v-list-tile-content>
                    </v-list-tile>


                </v-list>

                </v-card>
            </v-flex>
            <v-flex>
                <v-card>
                    <v-card-text>
                        MESSAGES
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card>
                    <v-card-text>
                        HISTORY
                    </v-card-text>
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