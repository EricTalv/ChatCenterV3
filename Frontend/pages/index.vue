<template>
  <section class="container">

  </section>
</template>

<script>


export default {
    mounted() {
      this.$api.get('/test').then((response)=>{
        console.log(response.data);
      })
    }
}
</script>

<style>

</style>
