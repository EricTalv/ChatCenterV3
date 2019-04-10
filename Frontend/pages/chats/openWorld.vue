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
                        <!---->
                        <div>
                            <chat-log></chat-log>
                            <chat-message></chat-message>
                            <chat-composer></chat-composer>
                        </div>
                        <!---->
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