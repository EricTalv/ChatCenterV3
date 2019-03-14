<template>
    <div class="row">
        <div class="col-md-12">
            <fieldset class="et-Field">
                <legend class="et-Legend">
                    <h1>{{ content.title }} #{{content.id}}</h1>
                </legend>
                <p class="et-text">{{ content.body }}</p>
            </fieldset>
        </div>
    </div>
</template>

<script>
    export default {
        name: "post",
        props: ['title', 'body' ,'content']

    }
</script>

<style scoped>

    .et-Field {
        border: 1px solid black;
        padding: 10px;
        margin: 0;
    }

    .et-Field > legend {
        width: auto;
        margin-top: 1em;
        padding: 5px;
        border: 1px solid #000;
        font-family: "Trebuchet MS", sans-serif;
        font-weight: 900;
        font-variant: small-caps;
    }

    .et-text {
        font-family: "Consolas", sans-serif;
    }

    @media screen and (-webkit-min-device-pixel-ratio:0) {
        .et-Legend {
            margin-top: 20px;
        }
    }

</style>
