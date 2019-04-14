<template>
    <v-app>
        <v-container fluid>
            <v-layout align-center justify-center>
                <v-flex style="margin-top: 10vh" md4 sm8 xs12>
                    <v-card class="elevation-12">
                        <v-toolbar dark>
                            <v-toolbar-title>Login</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                                <v-btn flat href="register">Register</v-btn>
                            </v-toolbar-items>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field label="Login" name="login" prepend-icon="person"
                                              type="text"></v-text-field>
                                <v-text-field id="password" label="Password" name="password" prepend-icon="lock"
                                              type="password"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn dark>Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>