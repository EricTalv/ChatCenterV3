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
                        <li>{{ getData }}</li>
                    </ul>
                </fieldset>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        mounted() {
            this.getDataBack();
        },
        methods: {
            getDataBack() {
                this.sendData('testOne');
            }
        },
        computed: {
            getData() {
                return this.$store.state.text;
            },

            sendData() {
                return this.$store.dispatch;
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
