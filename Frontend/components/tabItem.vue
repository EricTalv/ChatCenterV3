<template>

    <div>
        <v-tab-item>
            <v-card flat>
                <v-card-text>
                    <slot></slot>
                </v-card-text>
            </v-card>
        </v-tab-item>
    </div>

</template>

<script>
    export default {
        name: "tabInterface"
    }
</script>

<style scoped>

</style>