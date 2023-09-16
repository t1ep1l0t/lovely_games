<template>
<section class='tournaments'>
    <div class='top'>
      <div class='container'>
        <div class='inner'>
          <h1 class='title'>
            {{ t('header.tournaments') }}
          </h1>
          <button class='button'>
            {{ t('start') }}
          </button>
        </div>
      </div>
    </div>
  <div class='container'>
    <div class='tournaments_inner'>
      <div class='list' v-if='tournaments.length'>
        <div class='tournament'
             v-for='tournament of tournaments'
             :key='tournament.id'
        >
          <div class='info'>
            <div class='box'>
              {{ t('tournaments.start') }}
              <div class='rose'>
                {{ tournament.challenge_starts }}
              </div>
            </div>
            <div class='box'>
              <span class='name'>
                {{ tournament.name }}
              </span>
              <span class='fee'>
                {{ tournament.entry_fee }}
                <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="80" height="80" fill="url(#pattern0)"/>
                  <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_264_642" transform="scale(0.00195312)"/>
                  </pattern>
                  <image id="image0_264_642" width="512" height="512" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAADFBMVEUAAAD/////UFCbAnBMdFgBAAAAAXRSTlMAQObYZgAAATBJREFUeNrt27ENgDAQBEE3SZM0CZkjsECY1wlm47duGnBrkiRJkiRJkiRJknTSOmzOCwAAAAAAAAAAAAAAAAAAAAAAAIBEwFoQAAAAAAAAAAAAAAAAAAAAAAAAQCLg6GzpFVAAAAAAAAAAAAAAAAAAAAAAAAAAIgEVAQAAAAAAAAAAAAAAAAAAAAAAAPwVsPUAAAAAAAAAAAAAAAAAAAAAAAAAcgAVH5+HswAAAAAAAAAAAAAAAAAAAAAAAABBgNmU27MAAAAAAAAAAAAAAAAAAAAAAAAAQYAnlCmzAAAAAAAAAAAAAAAAAAAAAAAAAEGAq5TXZgEAAAAAAAAAAAAAAAAAAAAAAACCAEeU0lkAAAAAAAAAAAAAAAAAAAAAAACAIIAkSZIkSZIkSZKkD7UDNj+yanPkAPEAAAAASUVORK5CYII="/>
                  </defs>
                </svg>
              </span>
            </div>
            <div class='box'>
              {{ t('tournaments.players') }}
              <div class='rose'>
                {{ tournament.users_count.length }}
              </div>
            </div>
            <div class='box'>
              {{ t('tournaments.end') }}
              <div class='rose'>
                {{ tournament.challenge_ends }}
              </div>
            </div>
          </div>
          <button class='button' @click='playTournament'>
            <svg width="80" height="80" viewBox="0 0 186 188" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_264_631)">
                <circle cx="93" cy="89" r="89" fill="url(#paint0_linear_264_631)" shape-rendering="crispEdges"/>
                <circle cx="93" cy="89" r="88.5" stroke="#D931FE" shape-rendering="crispEdges"/>
              </g>
              <path d="M126 80.8398C132.667 84.6888 132.667 94.3113 126 98.1603L84.75 121.976C78.0833 125.825 69.75 121.014 69.75 113.316V65.6843C69.75 57.9863 78.0833 53.175 84.75 57.024L126 80.8398Z" fill="white"/>
              <defs>
                <filter id="filter0_d_264_631" x="0" y="0" width="186" height="188" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="6"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.664833 0 0 0 0 0.158504 0 0 0 0 0.776345 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_264_631"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_264_631" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_264_631" x1="93" y1="0" x2="93" y2="178" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#D931FE"/>
                  <stop offset="1" stop-color="#D931FE" stop-opacity="0.2"/>
                </linearGradient>
              </defs>
            </svg>
          </button>
          <img :src='tournament.image' alt='' class='image'>
        </div>
      </div>
      <LoaderComponent v-else/>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store/store'
import LoaderComponent from '@/components/UI/LoaderComponent.vue'

const { t } = useI18n()
const store = useStore(key)

const tournaments = computed(() => store.state.tournaments)
const user = computed(() => store.state.user);
const playTournament = async () => {
  if (!user.value) {
    store.commit('setLoginModal')
  }
  else {
    const response = await fetch('', {
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

.tournaments {
  position: relative;
  &_inner {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 80px 0 160px;
  }

  & .top {
    width: 100%;
    background-image: url('../assets/images/toutnament_top.png');
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-background-size: cover;
    background-size: cover;

    & .inner {
      min-height: calc(100vh - 80px);
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 100px 0 150px;
      height: auto;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        top: 25%;
        right: 0;
        width: 400px;
        height: 400px;
        background-image: url(../assets/images/home_tr_decore2.png);
        background-repeat: no-repeat;
        background-position: center center;
        -webkit-background-size: contain;
        background-size: contain;
      }
    }
    & .title {
      align-self: center;
      text-align: center;
      font-size: 96px;
      font-weight: 600;
      text-transform: uppercase;
      font-family: $nico;
    }
    & .button {
      background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.70) 100%);
      box-shadow: 0 5px 0 0 rgba(176, 47, 204, .6);
      color: $rose;
      font-weight: 600;
      font-size: 36px;
      border-radius: 20px;
      padding: 20px 56px;

      &:hover {
        box-shadow: 0 8px 0 0 #B02FCC;
      }
    }
  }
  & .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 60px;
  }
  & .tournament {
    width: 100%;
    position: relative;
    border-radius: 20px;
    background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.57) 100%);
    box-shadow: 10px 10px 4px 0 #737173;
    padding: 24px;
    display: grid;
    grid-template-columns: 3fr 1fr 2fr;
    grid-gap: 40px;
    align-items: center;

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 30px;
      left: 40px;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      background: linear-gradient(180deg, #B428D7 0%, rgba(180, 40, 214, 0.49) 100%);
    }
  }
  & .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
  & .box {
    color: #000;
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 10px;

    & .rose {
      font-weight: 600;
    }
  }
  & .fee {
    font-size: 36px;
    font-weight: 600;
    color: #000;
    padding-left: 20px;
    border-left: 2px solid #000;

    display: flex;
    align-items: center;
    gap: 8px;
  }
  & .name {
    font-size: 36px;
    font-weight: 600;
    color: #000;
    text-transform: uppercase;
    padding-right: 10px;
  }
  & .button {
    background: none;
    box-shadow: none;
    width: auto;
    justify-self: center;

    &:hover {
      scale: 1.1;
    }
  }
  & .image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: contain;
  }
}
</style>