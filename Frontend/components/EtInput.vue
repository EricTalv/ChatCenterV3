<template>
    <div id="et-input-container">
        <v-input
                :messages="['Messages']"
                :append-icon="append-icon"
                :prepend-icon="prepend-icon"
        >
            {{ message }}
        </v-input>
    </div>
</template>

<script>
    export default {
        name: "etinput",
        props: [ 'message', 'prepend-icon', 'append-icon' ]
    }
</script>

<style>
    #et-input-container .v-input__prepend-outer,
    #et-input-container .v-input__append-outer,
    #et-input-container .v-input__slot,
    #et-input-container .v-messages {
        border: 1px dashed rgba(0,0,0, .4);
    }
</style>