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
        mounted(){
        },
        methods: {
            login(){
                this.$store.dispatch('auth/login');
            }
        },
        computed:{
            email: {
                get() {
                    return this.$store.state.auth.forms.login.email;
                },
                set(value){
                    this.$store.dispatch('auth/setFormData', {form: 'login', key:'email', value: value})
                }
            },
            password: {
                get() {
                    return this.$store.state.auth.forms.login.password;
                },
                set(value){
                    this.$store.dispatch('auth/setFormData', {form: 'login', key:'password', value: value})
                }
            }
        }
    }
</script>

<style scoped>

</style>