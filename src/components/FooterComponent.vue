<template>
<footer class="footer">
  <div class="container">
    <div class="inner">
      <router-link :to="translation.i18nRoute({name: 'home'})">
        <img src="../assets/images/logotype.png" alt="" class="logotype">
      </router-link>
      <div class='links'>
        <router-link :to='translation.i18nRoute({name: "faq"})' class='link'>
          FAQ
        </router-link>
        <router-link :to='translation.i18nRoute({name: "terms_use"})' class='link'>
          {{ t('terms') }}
        </router-link>
        <router-link :to='translation.i18nRoute({name: "privacy_policy"})' class='link'>
          {{ t('policy') }}
        </router-link>
      </div>
      <ul class="list">
        <li class="item"
            v-for="locale of locales"
            :key="locale"
            @click="translation.switchLanguage(locale)"
        >
          {{ locale }}
        </li>
      </ul>
    </div>
  </div>
</footer>
</template>

<script setup lang="ts">
import translation from "@/plugins/translation.config";
import { useI18n } from 'vue-i18n'

const locales = translation.supportedLocales;

const { t } = useI18n()

</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";
.footer {
  padding: 40px 0 200px;

  & .inner {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
  & .logotype {
    height: 60px;
    width: auto;
  }
  & .list {
    display: flex;
    align-items: center;
  }
  & .item {
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    padding: 0 20px;
    border-right: 1px solid #FFFFFF;
    transition: all .3s ease;
    text-transform: uppercase;
    line-height: 100%;
    
    &:hover {
      color: $rose;
    }

    &:last-child {
      border-right: none;
    }
  }
  & .links {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
  & .link {
    font-size: 20px;
    font-weight: 600;
    &:hover {
      color: $rose;
    }
  }
}
</style>