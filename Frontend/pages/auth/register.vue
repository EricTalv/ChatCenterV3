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
                            <v-form>
                                <v-text-field label="Name" name="name" prepend-icon="person"
                                              type="text"></v-text-field>
                                <v-text-field label="Email" name="email" prepend-icon="email"
                                              type="text"></v-text-field>
                                <v-text-field id="password" label="Password" name="password" prepend-icon="lock"
                                              type="password"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn v-on:click="register" dark>Register</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: "register",
        methods: {
            login(){
                this.$store.dispatch('auth/register');
            }
        },
        computed:{
            email: {
                get() {
                    return this.$store.state.auth.forms.register.email;
                },
                set(value){
                    this.$store.dispatch('auth/setFormData', {form: 'register', key:'email', value: value})
                }
            },
            password: {
                get() {
                    return this.$store.state.auth.forms.register.password;
                },
                set(value){
                    this.$store.dispatch('auth/setFormData', {form: 'register', key:'password', value: value})
                }
            },
            passwordConfirm: {
                get() {
                    return this.$store.state.auth.forms.register.password_confirmation;
                },
                set(value){
                    this.$store.dispatch('auth/setFormData', {form: 'register', key:'password_confirmation', value: value})
                }
            },
            name: {
                get() {
                    return this.$store.state.auth.forms.register.name;
                },
                set(value){
                    this.$store.dispatch('auth/setFormData', {form: 'register', key:'name', value: value})
                }
            }
        }
    }
</script>

<style scoped>

</style>