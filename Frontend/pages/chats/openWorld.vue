<!--suppress ALL -->
<template>
    <v-container grid-list-xl fluid>
        <v-layout v-bind="binding">
            <v-flex>
                <v-card>
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
            <v-flex>
                <v-card elevation="8">
                    <v-subheader>
                        <h3>Messages</h3>
                    </v-subheader>
                    <v-divider></v-divider>
                    <v-card-title primary-title>
                        <div>
                            <div><b>James</b></div>
                            <span>Hello Dave!</span>
                        </div>
                    </v-card-title>
                    <v-card-title primary-title>
                        <div>
                            <div>
                                <b>Dave</b>
                            </div>
                            <span>Hello James.</span>
                        </div>
                    </v-card-title>
                    <v-card-title primary-title>
                        <div>
                            <div><b>Alex</b></div>
                            <span>Hello! This is a long big text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, mollitia? I Quit</span>
                        </div>
                    </v-card-title>
                </v-card>
                <v-flex>
                    <v-text-field
                            label="Message"
                            single-line
                            outline
                    ></v-text-field>
                </v-flex>
            </v-flex>
            <v-flex>
                <v-card>
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
        name: "openWorld",

        computed: {
            binding () {
                const binding = {}

                if (this.$vuetify.breakpoint.smAndDown) {
                    binding.column = true;
                }

                return binding;
            }
        }
    }
</script>

<style scoped>

</style>