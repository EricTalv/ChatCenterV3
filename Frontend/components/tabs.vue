<template>
    <div>
        <v-tabs class="et-Tabs-container"
                v-model="active"
                color="dark"
                slider-color="black"
                centered
                grow
        >
            <v-tab class="et-Tab">
                Cool item 1
            </v-tab>
            <v-tab class="et-Tab">
                Cool item 2
            </v-tab>

            <v-tab-item>
                <v-card flat>
                    <v-card-text>For item 1</v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>For item 2</v-card-text>
                </v-card>
            </v-tab-item>

        </v-tabs>

    </div>
</template>

<script>
    export default {
        name: "tab",
    }
</script>

<style scoped>
    .et-Tab {
        font-family: "Lucida Sans Typewriter", sans-serif;
    }
</style>