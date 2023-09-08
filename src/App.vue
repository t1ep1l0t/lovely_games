<template>
  <HeaderComponent />
  <main class="main">
    <router-view />
  </main>
  <FooterComponent />
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {onMounted} from "vue";
import {checkAuth} from "@/hooks/Authorization";

  onMounted(() => {
    checkAuth();
  });

</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.main {
  padding-top: 80px;
}
</style>



