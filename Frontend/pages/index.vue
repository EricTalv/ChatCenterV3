<template>
    <div class="container">
        <div class="row">
            <div class="col-md">
                <fieldset class="et-Field">
                    <legend class="et-Legend"><h1>Index Page</h1></legend>
                    <p class="lead">This is the description for the index page.</p>
                </fieldset>
            </div>
            <div class="col-md">
                <fieldset class="et-Field">
                    <legend class="et-Legend"><h1>Control</h1></legend>
                    <a :href="'/admin'" class="w-100 btn btn-outline-success">To the Admin Page!</a>
                </fieldset>
            </div>
            <div class="col-md">
                <fieldset class="et-Field">
                    <legend class="et-Legend"><h1>Data</h1></legend>
                    <p>Retrieved data:</p>
                    <ul>
                        <li></li>
                    </ul>
                </fieldset>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <fieldset class="et-Field" v-for="content in Contents">
                    <legend class="et-Legend"><h1>{{ content.title }}</h1></legend>
                    <p class="lead">{{ content.body }}</p>
                </fieldset>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        mounted() {
        },
        created() {
            this.dispatchAction('retrieveData');
        },
        methods: {
            getDataBack() {
                this.dispatchAction('testOne');
            },

            getContentData() {
                this.dispatchAction('retrieveData');
            }
        },
        computed: {
            getData() {
                return this.$store.state.text;
            },

            dispatchAction() {
                return this.$store.dispatch;
            },

            Contents() {
                return this.$store.state.contents;
            }
        }
    }
</script>

<style scoped>

    .et-Field {
        border: 1px solid black;
        padding: 10px;
        margin: 0;
        min-height: 250px;
    }

    .et-Field > legend {
        width: auto;
        margin-top: 30px;
        padding: 5px;
    }

</style>
