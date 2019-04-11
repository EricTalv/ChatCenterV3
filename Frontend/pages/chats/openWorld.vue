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
                            <chat_log></chat_log>
                            <chat-composer></chat-composer>
                        </div>
                        <!---->
                    </v-card-title>
                </v-card>
                <v-flex>
                    <v-card elevation="8">
                        <et_input></et_input>
                    </v-card>
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

    import chat_message from '@/components/chat/ChatMessage';
    import chat_composer from '@/components/chat/ChatComposer';
    import chat_log from '@/components/chat/ChatLog';
    import et_input from '@/components/EtInput';

    export default {
        name: "openWorld",

        components: {
            chat_message,
            chat_composer,
            chat_log,
            et_input


        },

        methods: {
            test() {
                alert('hll');
            }
        },

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

<style>

</style>