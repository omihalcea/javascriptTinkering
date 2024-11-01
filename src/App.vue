<template>
  <div class="flex min-h-screen flex-col">
    <Header/>
    <main class="background flex-grow">
      <RouterView/>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style>

</style>