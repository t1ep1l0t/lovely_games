<template>
  <section class="top">
    <div class="container">
      <div class="top__inner">
        <h1 class="top__title">
          ONLINE <br>
          GAMINg
          <span class="text_shadow rose">
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
  <section class="games">
    <div class="container">
      <div class="games__inner">
        <h2 class="games__title">
          {{ t('home.pay_games.title').split(' ')[0] }}
          <span class="rose">
            {{ t('home.pay_games.title').split(' ')[1] }}
          </span>

        </h2>
        <CarouselComponent v-if="payGames"
                           :games="payGames"
                           type="pay"
        />
        <router-link :to="translation.i18nRoute({name: 'browse_games'})" class="button">
          {{ t('home.pay_games.button') }}
        </router-link>
      </div>
    </div>
    <img src="../assets/images/circle_decorate2.png" alt="" class="decorate1">
  </section>
  <section class="tournament">
    <img src="../assets/images/circle_decorate2.png" alt="" class="decorate decorate1">
    <img src="../assets/images/circle_decorate2.png" alt="" class="decorate decorate2">
    <div class="container">
      <div class="tournament__inner">
        <img src="../assets/images/home_tr_decore1.png"
             alt=""
             class="tournament__decore1"
        >
        <img src="../assets/images/home_tr_decore2.png"
             alt=""
             class="tournament__decore2"
        >
        <h2 class="tournament__title">
          {{ t('home.tournament.title').split(' ')[0] + ' ' + t('home.tournament.title').split(' ')[1] }}
          <br>
          <span class="white">
            {{ t('home.tournament.title').split(' ')[2] }}
          </span>
          <span class="text_shadow rose">
            {{ t('home.tournament.title').split(' ')[2] }}
          </span>
        </h2>
        <span class="tournament__desc">
          {{ t('home.tournament.desc') }}
        </span>
        <router-link class="button"
                     :to="translation.i18nRoute({name: 'tournaments'})"
        >
          {{ t('home.tournament.button') }}
        </router-link>
      </div>
    </div>
  </section>
  <section class="games">
    <img src="../assets/images/circle_decorate2.png" alt="" class="decorate2">
    <div class="container">
      <div class="games__inner">
        <h2 class="games__title">
          {{ t('home.free_games.title').split(' ')[0] }}
          <span class="rose">
          {{ t('home.free_games.title').split(' ')[1] }}
        </span>
        </h2>
        <CarouselComponent v-if="freeGames"
                           :games="freeGames"
                           type="free"
        />
        <router-link :to="translation.i18nRoute({name: 'browse_games'})" class="button">
          {{ t('home.pay_games.button') }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import translation from "@/plugins/translation.config";
import CarouselComponent from "@/components/UI/CarouselComponent.vue";
import { useStore } from "vuex";
import { key } from '@/store/store'
import {computed} from "vue";

const { t } = useI18n();
const store = useStore(key);

const payGames = computed(() => store.state.pay_games);
const freeGames = computed(() => store.state.free_games);
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

.games {
  position: relative;
  padding: 60px 0;

  & .decorate1 {
    position: absolute;
    z-index: -1;
    left: -150px;
    top: 0px;
  }
  & .decorate2 {
    position: absolute;
    z-index: -1;
    right: -100px;
    top: -150px;
  }

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;
  }
  &__title {
    font-size: 64px;
    font-weight: 600;
    font-family: $nico;
  }
  & .button {
    border-radius: 15px;
    font-size: 32px;
    padding: 20px 40px;
    font-weight: 600;
    align-self: center;
  }
}

.tournament {
  position: relative;
  padding: 140px 0;

  & .decorate {
    position: absolute;
    z-index: -1;
  }
  & .decorate1 {
    left: -300px;
    bottom: -300px;
  }
  & .decorate2 {
    right: -300px;
    top: -300px;
  }

  &__inner {
    position: relative;
    width: 100%;
    padding: 40px;
    background: linear-gradient(160deg, #E983FF 13.57%, #FFF 95.3%);
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;
  }
  &__decore1 {
    position: absolute;
    z-index: 2;
    top: 40px;
    right: 320px;
    width: 100px;
    height: auto;
  }
  &__decore2 {
    position: absolute;
    z-index: 1;
    top: 40px;
    right: 0;
    width: 380px;
    height: auto;
  }
  &__title {
    position: relative;
    color: #000;
    font-size: 86px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 6.4px;

    & .white {
      color: #FFFFFF;
      position: relative;
      z-index: 2;
    }
    & .text_shadow {
      position: absolute;
      bottom: 14px;
      left: 15px;
      font-weight: 300;
      font-size: 86px;
      z-index: 1;
    }
  }
  &__desc {
    color: #000;
    font-size: 33px;
    line-height: normal;
    letter-spacing: 2.31px;
    margin-bottom: 14px;
  }
  & .button {
    align-self: center;
    font-weight: 600;
    font-size: 33px;
    padding: 16px 32px;
    border-radius: 10px;
    letter-spacing: 4.48px;
  }
  
}
</style>