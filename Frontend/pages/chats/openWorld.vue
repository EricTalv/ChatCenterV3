<template>
    <v-container >
        <v-layout row>
            <v-flex shrink pa-1>
                <v-card>
                    <v-card-text>Online Users</v-card-text>
                </v-card>
            </v-flex>
            <v-flex grow pa-1>
                <v-card>
                    <v-card-text>Messages</v-card-text>

                </v-card>
                <v-flex xs6>
                    <v-text-field outline></v-text-field>
                </v-flex>
                <v-flex xs6>
                    <v-btn outline>Send</v-btn>
                </v-flex>
            </v-flex>
            <v-flex shrink pa-1>
                <v-card>
                    <v-card-text>History</v-card-text>
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