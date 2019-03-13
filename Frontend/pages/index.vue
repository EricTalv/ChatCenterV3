<template>
  <section class="container">

  </section>
</template>

<script>


export default {
    mounted() {
      this.$api.get('/test2').then((response)=>{
        console.log(response.data);
      }),

      this.$api.get('/test').then((response)=>{
        console.log(response.data);
      })

    }
}
</script>

<style>

</style>
