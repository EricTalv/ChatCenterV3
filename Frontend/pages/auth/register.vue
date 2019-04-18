<template>
    <v-app>
        <v-container fluid>
            <v-layout align-center justify-center>
                <v-flex style="margin-top: 10vh" md4 sm8 xs12>
                    <v-card class="elevation-12">
                        <v-toolbar dark>
                            <v-toolbar-title>Register</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                                <v-btn flat href="login">login</v-btn>
                            </v-toolbar-items>
                        </v-toolbar>
                        <v-card-text>
                            <v-form @submit.prevent="register">
                                <v-text-field v-model="form.name"
                                              label="Name"
                                              name="name"
                                              prepend-icon="person"
                                              type="text"
                                              :rules="nameRules"
                                ></v-text-field>
                                <v-text-field v-model="form.email"
                                              label="Email"
                                              name="email"
                                              prepend-icon="email"
                                              type="text"
                                              :rules="emailRules"
                                ></v-text-field>
                                <v-divider></v-divider>
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
                                              :counter="6"
                                ></v-text-field>


                                <v-text-field v-model="form.password_confirmation"
                                              id="passwordConfirm"
                                              label="Confirm Password"
                                              name="passwordConfirm"
                                              prepend-icon="lock"
                                              type="password"
                                              :rules="pwConfirmRules"
                                              :type="pwVisible ? 'text' : 'password'"
                                ></v-text-field>


                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn v-on:click="register" dark>Register</v-btn>
                        </v-card-actions>
                        <v-slide-y-transition
                                v-if="responseList"
                                v-for="response in responseList"
                                :key="response.id"
                                :item="response">
                            <v-alert
                                    :value="true"
                                    type="error"
                            >
                                <p  v-for="message in response">{{ message }} </p>
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
        name: "register",
        data() {
            return {

                pwVisible: false,

                form: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                },
                responseList: null,
                nameRules: [
                    v => !!v || 'Name is required',
                    v => v.length > 4 || 'Name must be more than 4 characters'
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => v.length > 6 || 'Password must be at least 6 characters'
                ],
                pwConfirmRules: [
                    v => !!v || 'Password Confirmation is required',
                    v => this.form.password === v || 'Password does not match'
                ]
            }
        },

        methods: {
            async register() {

                var responseStatus;

                this.$axios.post('/register', this.form)

                .then((resp) => {
                    responseStatus = true;
                    console.log(`[REG]Request Status: `, resp.response.status);

                }).catch((err) =>    {
                    responseStatus = false;

                    this.responseList = err.response.data.errors;
                    console.log(`[REG]Request Status: `, err.response.status);
                    console.log(err.response.data.errors);
                });
            },

        },
    }
</script>

<style scoped>

</style>