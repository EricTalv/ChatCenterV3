<template>
    <section class="container">
        <div class="row">
            <div class="col-md">
                <fieldset class="et-Field">
                    <legend class="et-Legend"><h1>Admin Page</h1></legend>
                    <p class="lead">This is the description for the Admin page.</p>
                </fieldset>
            </div>
            <div class="col-md">
                <fieldset class="et-Field">
                    <legend class="et-Legend"><h1>Control</h1></legend>
                    <a href="#" class="w-100 btn disabled">Yikes</a>
                </fieldset>
            </div>
            <div class="col-md">
                <fieldset class="et-Field">
                    <legend class="et-Legend"><h1>Data</h1></legend>
                    <p>Retrieved data:</p>
                    <ul>

                    </ul>
                </fieldset>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "admin"
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