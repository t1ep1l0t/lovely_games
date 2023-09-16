<template>
  <section class="games">
    <div class="container">
      <div class="inner">
        <h1 class="title">
          {{ t("header.games").split(" ")[0] }}
          <span class="rose">
            {{ t("header.games").split(" ")[1] }}
          </span>
        </h1>
        <div class="games"
             v-if='gamesKey !== 0'
             :key='gamesKey'
        >
          <div
            class="game"
            v-for="game of games"
            :key="game.id"
            :style="{ backgroundImage: `url(${game.image})` }"
          >
            <span class="name">
              {{ game.name }}
            </span>
            <div class="info">
              <button class="info__button"
                      @click='playGame'
              >
                {{ t("play") }}
              </button>
              <div class="price">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="55" height="55" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlink:href="#image0_35_2063" transform="scale(0.00195312)" />
                    </pattern>
                    <image
                      id="image0_35_2063"
                      width="512"
                      height="512"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAADFBMVEUAAAD/////UFCbAnBMdFgBAAAAAXRSTlMAQObYZgAAATBJREFUeNrt27ENgDAQBEE3SZM0CZkjsECY1wlm47duGnBrkiRJkiRJkiRJknTSOmzOCwAAAAAAAAAAAAAAAAAAAAAAAIBEwFoQAAAAAAAAAAAAAAAAAAAAAAAAQCLg6GzpFVAAAAAAAAAAAAAAAAAAAAAAAAAAIgEVAQAAAAAAAAAAAAAAAAAAAAAAAPwVsPUAAAAAAAAAAAAAAAAAAAAAAAAAcgAVH5+HswAAAAAAAAAAAAAAAAAAAAAAAABBgNmU27MAAAAAAAAAAAAAAAAAAAAAAAAAQYAnlCmzAAAAAAAAAAAAAAAAAAAAAAAAAEGAq5TXZgEAAAAAAAAAAAAAAAAAAAAAAACCAEeU0lkAAAAAAAAAAAAAAAAAAAAAAACAIIAkSZIkSZIkSZKkD7UDNj+yanPkAPEAAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
                {{ game.price }}
              </div>
            </div>
          </div>
        </div>
        <LoaderComponent v-else/>
      </div>
    </div>
  </section>
</template>

<script async setup lang="ts">
import { useI18n } from "vue-i18n"
import { computed, onMounted, ref } from 'vue'
import { useStore } from "vuex"
import { key } from "@/store/store"
import type { Store } from "vuex"
import type { State } from "@/store/store"
import { fetchGames } from '@/api/fetchGames'
import LoaderComponent from '@/components/UI/LoaderComponent.vue'
import type { IGame } from '@/dto/GameDto'

const { t } = useI18n()
const store: Store<State> = useStore(key)

const gamesKey = ref(0)

let games :undefined | IGame[];
onMounted(async () => {
  games = await fetchGames('coins', '100')
  setTimeout(() => {
    gamesKey.value++
  }, 500)
})

const user = computed(() => store.state.user);

const playGame = async () => {
  if (!user.value) {
    store.commit('setLoginModal')
  }
  else {
    const response = await fetch('https://play.forestrygames.com/lets-inspect/', {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
      }
    })
  }
}


</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.games {
  position: relative;
  padding: 80px 0;

  & .inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
  & .title {
    text-align: center;
    font-size: 96px;
    font-weight: 600;
    text-transform: uppercase;
    font-family: $nico;
  }
  & .games {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
  }
  & .game {
    width: 100%;
    position: relative;
    height: 360px;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
    border-radius: 20px;
    overflow: hidden;

    &:hover {
      & .info {
        opacity: 1;
      }
    }
  }
  & .name {
    background: #FFF;
    display: block;
    width: 100%;
    color: #000;
    padding: 16px 0;
    margin-top: auto;
    font-weight: 600;
    font-size: 22px;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    cursor: default;
    text-align: center;
  }
  & .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0;
    background: rgba(42, 41, 41, 0.65);
    transition: all .3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &__button {
      border-radius: 50px;
      background: linear-gradient(180deg, #FFF 0%, rgba(217, 49, 254, 0.45) 100%);
      box-shadow: 0 5px 0 0 #B02FCC;
      color: #000;
      font-size: 33px;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.65px;
      font-family: $nico;
      padding: 16px 32px;

      &:hover {
        box-shadow: 0 6px 0 0 #B02FCC;
      }
      &:active {
        box-shadow: 0 2px 0 0 #B02FCC;
      }
    }
  }
  & .price {
    display: flex;
    align-items: center;
    gap: 16px;
    color: #FFF;
    font-size: 24px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.65px;
  }
}
</style>
