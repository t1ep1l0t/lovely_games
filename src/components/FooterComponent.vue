<template>
<footer class="footer">
  <div class="container">
    <div class="inner">
      <router-link :to="translation.i18nRoute({name: 'home'})">
        <img src="../assets/images/logotype.png" alt="" class="logotype">
      </router-link>
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

const locales = translation.supportedLocales;

</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";
.footer {
  padding: 40px 0 200px;

  & .inner {
    display: flex;
    align-items: center;
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
}
</style>