<template>
  <HeaderComponent />
  <LoginFormComponent v-if="isLoginFormVisible" />
  <RegisterFormComponent v-if="isRegisterFormVisible"/>
  <main class="main">
    <router-view />
  </main>
  <FooterComponent />
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {computed, onMounted} from "vue";
import { checkAuth } from "@/hooks/Authorization";
import { fetchGames } from "@/api/fetchGames";
import LoginFormComponent from "@/components/LoginFormComponent.vue";
import RegisterFormComponent from "@/components/RegisterFormComponent.vue";
import {useStore} from "vuex";
import {key} from "@/store/store";

  onMounted(() => {
    //checkAuth();
    fetchGames('fun');
    fetchGames('coins');
  });

  const store = useStore(key);

  const isLoginFormVisible = computed(() => store.state.login_modal);
  const isRegisterFormVisible = computed(() => store.state.register_modal);


</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.main {
  padding-top: 80px;
}
</style>



