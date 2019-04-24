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
                                <v-text-field label="Login"
                                              v-model="form.name"
                                              name="login"
                                              prepend-icon="person"
                                              type="text"
                                              :rules="nameRules"
                                ></v-text-field>
                                <v-text-field id="password"
                                              label="Password"
                                              v-model="form.password"
                                              name="password"
                                              prepend-icon="lock"
                                              type="password"
                                              :rules="passwordRules"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn v-on:click="login" dark>Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {

                pwVisible: false,

                responseStatus: null,

                form: {
                    name: '',
                    password: '',
                },
                responseList: null,
                nameRules: [
                    v => !!v || 'Name is required',
                    v => v.length > 4 || 'Name must be more than 4 characters'
                ],

                passwordRules: [
                    v => !!v || 'Password is required',
                    v => v.length > 6 || 'Password must be at least 6 characters'
                ],

            }
        },

        methods: {
            async login() {

                this.$axios.post('/login', this.form)

                    .then((resp) => {

                    })
                    .catch((err) => {

                    })
            },

        },
    }
</script>

<style scoped>

</style>