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
                                <v-text-field v-model="form.name" label="Name" name="name" prepend-icon="person"
                                              type="text"></v-text-field>
                                <v-text-field v-model="form.email" label="Email" name="email" prepend-icon="email"
                                              type="text"></v-text-field>
                                <v-divider></v-divider>
                                <v-text-field v-model="form.password" id="password" label="Password" name="password"
                                              prepend-icon="lock"
                                              type="password"></v-text-field>
                                <v-text-field v-model="form.passwordConfirm" id="passwordConfirm"
                                              label="Confirm Password" name="passwordConfirm" prepend-icon="lock"
                                              type="password"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn v-on:click="register" dark>Register</v-btn>
                        </v-card-actions>
                        <v-slide-y-transition v-if="errorsList">
                            <v-alert
                                    v-for="error in errorsList"
                                    :item="error"
                                    :value="true"
                                    type="error"
                            >
                                Error: {{ error }}
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
                form: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                },
                errorsList: null,

            }
        },
        methods: {
            async register() {
                this.$axios.post('/register', this.form).then((resp) => {
                    console.log(resp);
                }).catch((err) => {
                    console.log(err.response.data.errors);
                    this.errorsList = err.response.data.errors;


                });
                /*
                                this.$auth.login({data: this.form});

                                this.$router.push('/');*/
            }
        },
        computed: {}
    }
</script>

<style scoped>

</style>