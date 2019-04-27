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
                            <v-form @submit.prevent="login">
                                <v-text-field
                                        label="Login"
                                        v-model="form.name"
                                        id="login"
                                        name="login"
                                        prepend-icon="person"
                                        type="text"
                                        :rules="nameRules"
                                ></v-text-field>
                                <v-text-field v-model="form.password"
                                              id="password"
                                              label="Password"
                                              name="password"
                                              prepend-icon="lock"
                                              type="password"
                                              :rules="passwordRules"
                                              :append-icon="pwVisible ? 'visibility_off' : 'visibility'"
                                              @click:append="() => (pwVisible = !pwVisible)"
                                              :type="pwVisible ? 'text' : 'password'"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn v-on:click="login" dark>Login</v-btn>
                        </v-card-actions>

                        <v-slide-y-transition
                                v-if="responseList"
                                v-for="response in responseList"
                                :key="response.id"
                                :item="response">
                            <v-alert
                                    :value="true"
                                    type="error"
                                    v-if="!responseStatus"
                            >
                                <p v-for="message in response">{{ message }}</p>
                            </v-alert>
                            <v-alert
                                    :value="true"
                                    type="success"
                                    v-else="responseStatus"
                            >
                                <p v-for="message in response">{{ message }}</p>
                            </v-alert>
                        </v-slide-y-transition>

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

                responseList: null,

                form: {
                    name: '',
                    password: ''
                },
                nameRules: [
                    v => !!v || 'Name is required'
                ],

                passwordRules: [
                    v => !!v || 'Password is required'
                ],

            }
        },

        methods: {
            async login() {


                await this.$auth.login({ data: this.form });


            },

        },
    }
</script>

<style scoped>

</style>