<template>
    <div>
        <v-tabs
                v-model="active"
                color="dark"
                dark
                slider-color="red"
        >
            <v-tab>
                Cool item 1
            </v-tab>
            <v-tab>
                Cool item 2
            </v-tab>
            <v-tab>
                Cool item 3
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
            <v-tab-item>
                <v-card flat>
                    <v-card-text>For item 3</v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>

        <div class="text-xs-center mt-3">
            <v-btn @click="next">next tab</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tab",
        data() {
            return {
                active: null,
            }
        },
        methods: {
            next() {
                const active = parseInt(this.active)
                this.active = (active < 2 ? active + 1 : 0)
            }
        }
    }
</script>

<style scoped>

</style>