<template>
    <div>
        <v-tabs class="et-Tabs-container"
                v-model="isActive"
                color="dark"
                slider-color="black"
                centered
                grow
        >
            <v-tab>Posts</v-tab>
            <v-tab>Chats</v-tab>



            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                       yikes
                    </v-card-text>
                </v-card>
            </v-tab-item>

            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        items for a
                    </v-card-text>
                </v-card>
            </v-tab-item>

        </v-tabs>

    </div>
</template>

<script>



    export default {
        name: "tabs",
        data(){
            return{
                isActive:this.active,
            }
        }

    }
</script>

<style scoped>
    .et-Tab {
        font-family: "Lucida Sans Typewriter", sans-serif;
    }
</style>