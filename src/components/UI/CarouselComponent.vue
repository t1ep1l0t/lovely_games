<template>
  <div class="wrapper">
    <Carousel class="carousel"
              v-if="games"
              v-bind="settings"
              ref="carousel"
    >
      <Slide class="slide"
             v-for="game of games"
             :key="game.id"
      >
        <div class="inner"
             :style="{backgroundImage: `url(${game.image})`}"
        >
          <span class="name">
            {{ game.name }}
          </span>
          <div class="info">
            <button class="info__button">
              {{ t('play') }}
            </button>
            <div class="price" v-if="type === 'pay'">
              <svg width="40" height="40" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="55" height="55" fill="url(#pattern0)"/>
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_35_2063" transform="scale(0.00195312)"/>
                  </pattern>
                  <image id="image0_35_2063" width="512" height="512" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAADFBMVEUAAAD/////UFCbAnBMdFgBAAAAAXRSTlMAQObYZgAAATBJREFUeNrt27ENgDAQBEE3SZM0CZkjsECY1wlm47duGnBrkiRJkiRJkiRJknTSOmzOCwAAAAAAAAAAAAAAAAAAAAAAAIBEwFoQAAAAAAAAAAAAAAAAAAAAAAAAQCLg6GzpFVAAAAAAAAAAAAAAAAAAAAAAAAAAIgEVAQAAAAAAAAAAAAAAAAAAAAAAAPwVsPUAAAAAAAAAAAAAAAAAAAAAAAAAcgAVH5+HswAAAAAAAAAAAAAAAAAAAAAAAABBgNmU27MAAAAAAAAAAAAAAAAAAAAAAAAAQYAnlCmzAAAAAAAAAAAAAAAAAAAAAAAAAEGAq5TXZgEAAAAAAAAAAAAAAAAAAAAAAACCAEeU0lkAAAAAAAAAAAAAAAAAAAAAAACAIIAkSZIkSZIkSZKkD7UDNj+yanPkAPEAAAAASUVORK5CYII="/>
                </defs>
              </svg>
              {{ game.price }}
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
    <button class="button button_prev"
            @click="prevSlide"
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="inherit" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z" fill="inherit"></path>
        </g>
      </svg>
    </button>
    <button class="button button_next"
            @click="nextSlide"
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="inherit" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z" fill="inherit"></path>
        </g>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import type {IGame} from "@/dto/GameDto";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from "vue3-carousel";
import {onMounted, ref} from "vue";
import {useI18n} from "vue-i18n";

interface IProps {
  games: IGame[],
  type: string
}

const { games, type } = defineProps<IProps>();

const { t } = useI18n();

const settings = {
  itemsToShow: 3,
  snapAlign: 'start',
  itemsToScroll: 1,
  wrapAround: true,
  autoplay: 5000,
  mouseDrag: true,
  touchDrag: true,
  pauseAutoplayOnHover: true,
};

const carousel = ref<HTMLInputElement | null>(null);

const prevSlide = () => {
  carousel?.value?.prev()
}
const nextSlide = () => {
  carousel?.value?.next()
}


</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.wrapper {
  width: 100%;
  position: relative;

  & .button {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(160deg, #E983FF 13.57%, #FFF 95.3%);
    box-shadow: none;
    fill: #000;
    position: absolute;
    top: calc(50% - 20px);

    & svg {
      transition: all .2s ease;
    }
    &:hover {
      scale: 1.1;
      fill: $rose;
    }
  }
  & .button_prev {
    left: -80px;
  }
  & .button_next {
    right: -80px
  }
}
.carousel {
  width: 100%;

  & .slide {
    padding: 0 10px;
  }
  & .inner {
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