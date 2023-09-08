<template>
<section class="top">
  <div class="container">
    <div class="top__inner">
      <h1 class="top__title">
        ONLINE <br>
        GAMINg
        <span class="text_shadow">
          GAMINg
        </span>
      </h1>
      <h2 class="top__subtitle">
        {{ t('home.top.title') }}
      </h2>
      <p class="top__desc">
        {{ t('home.top.desc') }}
      </p>
      <router-link class="button"
                   :to="translation.i18nRoute({name: 'browse_games'})"
      >
        {{ t('home.top.button') }}
      </router-link>
    </div>
  </div>
  <img src="../assets/images/circle_decorate2.png" alt="" class="decorate decorate1">
  <img src="../assets/images/circle_decorate2.png" alt="" class="decorate decorate2">
</section>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";
import translation from "@/plugins/translation.config";

const { t } = useI18n();

</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.top {
  position: relative;

  & .decorate {
    position: absolute;
    z-index: -1;
  }
  & .decorate1 {
    left: -300px;
    top: -150px;
  }
  & .decorate2 {
    right: -300px;
    bottom: -300px;
  }


  &__inner {
    width: 100%;
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    min-height: calc(100vh - 80px);
    height: auto;

    background-image: url('@/assets/images/top_bg.png');
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
    background-position: center center;
  }
  &__title {
    text-align: center;
    font-size: 96px;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    line-height: 120%;
  }
  & .text_shadow {
    position: absolute;
    bottom: 30px;
    left: 15px;
    color: $rose;
    font-weight: 200;
    font-size: 96px;
    z-index: -1;
  }
  &__subtitle {
    font-size: 60px;
    font-weight: 400;
    text-align: center;
  }
  &__desc {
    font-size: 33px;
    font-weight: 400;
    max-width: 767px;
    text-align: center;
  }
  & .button {
    border-radius: 15px;
    font-size: 32px;
    padding: 20px 40px;
    font-weight: 600;
  }
}
</style>