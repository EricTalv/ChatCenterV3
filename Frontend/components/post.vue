<template>
    <div class="row">
        <div class="col-md-12">
            <fieldset class="et-Field">
                <legend class="et-Legend">
                    <h1>{{ content.title }}</h1>
                </legend>
                <p class="lead">{{ content.body }}</p>
            </fieldset>
        </div>
    </div>
</template>

<script>
    export default {
        name: "post",
        props: ['title', 'body' ,'content'],
        data() {
            return {

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
