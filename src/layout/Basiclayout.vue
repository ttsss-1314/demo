<script setup>
import Header from "../components/Header.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Footer from "../components/Footer.vue";
import {ref} from "vue";
import Helloworld2 from "../components/Helloworld2.vue";

const res = ref(2);
const click =() =>{
  res.value=res.value+1
}
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style scoped>

</style>