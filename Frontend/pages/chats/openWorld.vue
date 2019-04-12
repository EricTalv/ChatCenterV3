<!--suppress ALL -->
<template>
    <v-container fluid grid-list-xl>
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
                            <chat_log
                                    :messages="messages"
                                    v-on:messagsent="addMessage"
                            ></chat_log>
                        </div>
                    </v-card-title>
                    <v-divider></v-divider>
                    <chat_composer></chat_composer>
                    <!---->
                </v-card>
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

    import chat_composer from '@/components/chat/ChatComposer';
    import chat_log from '@/components/chat/ChatLog';
    import et_input from '@/components/EtInput';

    export default {
        name: "openWorld",

        components: {
            chat_composer,
            chat_log,
            et_input,

        },

        data() {
            return {
                messages: [
                    {
                        message: 'Hello!',
                        user: 'James',
                    },

                    {
                        message: 'Hello!',
                        user: 'Dave',
                    }
                ]
            }
        },

        methods: {
            addMessage(message) {
                //add to existing messages
                this.messages.push(message);
                // persist to db
            }
        },

        computed: {
            binding() {
                const binding = {}

                if (this.$vuetify.breakpoint.smAndDown) {
                    binding.column = true;
                }

                return binding;
            }
        }
    }
</script>

<style>

</style>