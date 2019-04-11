<template>
    <v-input
            :messages="['Messages']"
            append-icon="close"
            prepend-icon="phone"
            v-on:click="test"
    >
        Default Slot
    </v-input>
</template>

<script>
    export default {
        name: "et-input"
    }
</script>

<style>
    .v-input__prepend-outer,
    .v-input__append-outer,
    .v-input__slot,
    .v-messages {
        border: 1px dashed rgba(0,0,0, .4);
    }
</style>