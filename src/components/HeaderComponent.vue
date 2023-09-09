<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="buttons">
          <button class="button" v-if="!user">
            {{ t('header.login') }}
          </button>
          <router-link class="profile"
                       v-else
                       :to="translation.i18nRoute({name: 'profile'})"
          >
            <img src="../assets/images/no_avatar.png" alt="" class="avatar" v-if="!user.image">
            <img :src="user.image" alt="" class="avatar" v-else>
          </router-link>
        </div>
        <div class="links">
          <router-link class="link"

                       :to="translation.i18nRoute({name: 'home'})"
          >
            {{ t('header.home') }}
          </router-link>
          <router-link class="link"
                       active-class="link_active"
                       :to="translation.i18nRoute({name: 'tournaments'})"
          >
            {{ t('header.tournaments') }}
          </router-link>
          <img src="../assets/images/logotype.png"
               alt=""
               class="logotype">
          <router-link class="link"
                       active-class="link_active"
                       :to="translation.i18nRoute({name: 'browse_games'})"
          >
            {{ t('header.games') }}
          </router-link>
        </div>
        <div class="buttons">
          <button class="button" v-if="!user">
            {{ t('header.register') }}
          </button>
          <router-link class="button"
                       v-else
                       :to="translation.i18nRoute({name: 'profile'})"
          >
            {{ user.balance }}
            <svg width="18" height="18" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="55" height="55" fill="url(#pattern0)"/>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_48_2337" transform="scale(0.00195312)"/>
                </pattern>
                <image id="image0_48_2337" width="512" height="512" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAADFBMVEUAAAD/////UFCbAnBMdFgBAAAAAXRSTlMAQObYZgAAATBJREFUeNrt27ENgDAQBEE3SZM0CZkjsECY1wlm47duGnBrkiRJkiRJkiRJknTSOmzOCwAAAAAAAAAAAAAAAAAAAAAAAIBEwFoQAAAAAAAAAAAAAAAAAAAAAAAAQCLg6GzpFVAAAAAAAAAAAAAAAAAAAAAAAAAAIgEVAQAAAAAAAAAAAAAAAAAAAAAAAPwVsPUAAAAAAAAAAAAAAAAAAAAAAAAAcgAVH5+HswAAAAAAAAAAAAAAAAAAAAAAAABBgNmU27MAAAAAAAAAAAAAAAAAAAAAAAAAQYAnlCmzAAAAAAAAAAAAAAAAAAAAAAAAAEGAq5TXZgEAAAAAAAAAAAAAAAAAAAAAAACCAEeU0lkAAAAAAAAAAAAAAAAAAAAAAACAIIAkSZIkSZIkSZKkD7UDNj+yanPkAPEAAAAASUVORK5CYII="/>
              </defs>
            </svg>
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
  import {useI18n} from "vue-i18n";
  import {computed} from "vue";
  import {useStore} from "vuex";
  import translation from "@/plugins/translation.config";
  import {key} from "@/store/store";

  const { t } = useI18n();
  const store = useStore(key);

  const user = computed(() => store.state.user);

</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 998;
  background: $violet;
  padding: 20px 0;

  & .nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & .button {
    border-radius: 50px;
    padding: 8px 16px;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 100%;
  }
  & .profile {
    display: block;
    width: 40px;
    height: 40px;
  }
  & .avatar {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
  & .links {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  & .link {
    font-weight: 600;
    font-size: 20px;
    transition: all .3s ease;
    
    &:hover {
      color: $rose;
    }
    
    &_active {
      color: $rose;
    }
  }
  & .logotype {
    height: 40px;
    width: auto;
  }
}

</style>