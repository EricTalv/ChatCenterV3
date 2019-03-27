<template>
    <div class="row">
        <div class="col-md-12">
            <fieldset class="et-Field">
                <legend class="et-Legend">
                    <h1>{{ content.title }}</h1>
                </legend>
                <p class="et-Text">{{ content.body }}</p>
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

</style>
