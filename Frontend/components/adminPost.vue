<template>
    <div class="row">
        <div class="col-md-12">
            <fieldset class="et-adminField">
                <legend class="et-Legend">
                    <h1>{{ content.id}}| {{ content.title }}</h1>
                </legend>
                <div class="yikes">
                    <button>Hello</button>
                </div>
                <a>Hover over me!</a>
                <div class="test">Stuff shown on hover</div>
                <p class="et-text">{{ content.body }}</p>
            </fieldset>
        </div>
    </div>
</template>

<script>
    export default {
        name: "admin_post",
        props: ['title', 'body', 'content']
    }
</script>

<style scoped>

</style>
