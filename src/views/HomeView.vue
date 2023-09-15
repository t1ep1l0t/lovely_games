<template>
  <section class="top">
    <div class="container">
      <div class="top__inner">
        <h1 class="top__title">
          ONLINE <br />
          GAMINg
          <span class="text_shadow rose"> GAMINg </span>
        </h1>
        <h2 class="top__subtitle">
          {{ t("home.top.title") }}
        </h2>
        <p class="top__desc">
          {{ t("home.top.desc") }}
        </p>
        <router-link class="button" :to="translation.i18nRoute({ name: 'browse_games' })">
          {{ t("home.top.button") }}
        </router-link>
      </div>
    </div>
    <img src="../assets/images/circle_decorate2.png" alt="" class="decorate decorate1" />
    <img src="../assets/images/circle_decorate2.png" alt="" class="decorate decorate2" />
  </section>
  <section class="games">
    <div class="container">
      <div class="games__inner">
        <h2 class="games__title">
          {{ t("home.pay_games.title").split(" ")[0] }}
          <span class="rose">
            {{ t("home.pay_games.title").split(" ")[1] }}
          </span>
        </h2>
        <CarouselComponent v-if="payGames" :games="payGames" type="pay" />
        <router-link :to="translation.i18nRoute({ name: 'browse_games' })" class="button">
          {{ t("home.pay_games.button") }}
        </router-link>
      </div>
    </div>
    <img src="../assets/images/circle_decorate2.png" alt="" class="decorate1" />
  </section>
  <section class="tournament">
    <img src="../assets/images/circle_decorate2.png" alt="" class="decorate decorate1" />
    <img src="../assets/images/circle_decorate2.png" alt="" class="decorate decorate2" />
    <div class="container">
      <div class="tournament__inner">
        <img src="../assets/images/home_tr_decore1.png" alt="" class="tournament__decore1" />
        <img src="../assets/images/home_tr_decore2.png" alt="" class="tournament__decore2" />
        <h2 class="tournament__title">
          {{
            t("home.tournament.title").split(" ")[0] +
            " " +
            t("home.tournament.title").split(" ")[1]
          }}
          <br />
          <span class="white">
            {{ t("home.tournament.title").split(" ")[2] }}
          </span>
          <span class="text_shadow rose">
            {{ t("home.tournament.title").split(" ")[2] }}
          </span>
        </h2>
        <span class="tournament__desc">
          {{ t("home.tournament.desc") }}
        </span>
        <router-link class="button" :to="translation.i18nRoute({ name: 'tournaments' })">
          {{ t("home.tournament.button") }}
        </router-link>
      </div>
    </div>
  </section>
  <section class="games">
    <img src="../assets/images/circle_decorate2.png" alt="" class="decorate2" />
    <div class="container">
      <div class="games__inner">
        <h2 class="games__title">
          {{ t("home.free_games.title").split(" ")[0] }}
          <span class="rose">
            {{ t("home.free_games.title").split(" ")[1] }}
          </span>
        </h2>
        <CarouselComponent v-if="freeGames" :games="freeGames" type="free" />
        <router-link :to="translation.i18nRoute({ name: 'browse_games' })" class="button">
          {{ t("home.pay_games.button") }}
        </router-link>
      </div>
    </div>
  </section>
  <section class="contact">
    <div class="container">
      <div class="inner">
        <h2 class="title">
          {{ t("home.contact.title") }}
        </h2>
        <span class="subtitle">
          {{ t("home.contact.subtitle") }}
        </span>
        <div class="links">
          <div class="link">
            <a href="mailto:example@example.com" class="link">
              <svg
                width="44"
                height="44"
                viewBox="0 0 189 189"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="94.5" cy="94.5" r="94.5" fill="white" />
                <g clip-path="url(#clip0_43_2175)" filter="url(#filter0_d_43_2175)">
                  <path
                    d="M143.804 102.05L131.078 88.8299L143.804 77.8599V102.05Z"
                    fill="url(#paint0_linear_43_2175)"
                  />
                  <path
                    d="M57.9379 88.8299L45.1958 102.065V77.8599L57.9379 88.8299Z"
                    fill="url(#paint1_linear_43_2175)"
                  />
                  <path
                    d="M143.804 114.068V126.24C143.804 129.183 141.416 131.571 138.473 131.571H50.5268C47.5838 131.571 45.1958 129.183 45.1958 126.24V114.068L64.2548 94.2842L86.026 113.035C88.2909 114.977 91.2952 116.055 94.5001 116.055C97.7051 116.055 100.725 114.977 102.99 113.035L124.745 94.2842L143.804 114.068Z"
                    fill="url(#paint2_linear_43_2175)"
                  />
                  <path
                    d="M143.804 62.7448V68.0759L97.304 108.136C95.8094 109.43 93.1903 109.43 91.6958 108.136L45.1958 68.0759V62.7448C45.1958 59.8022 47.5836 57.4292 50.5268 57.4292H138.473C141.416 57.4292 143.804 59.8022 143.804 62.7448Z"
                    fill="url(#paint3_linear_43_2175)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_43_2175"
                    x="41.1958"
                    y="45.1958"
                    width="106.609"
                    height="107.609"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.640935 0 0 0 0 0.144736 0 0 0 0 0.750217 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_43_2175"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_43_2175"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_43_2175"
                    x1="137.441"
                    y1="77.8599"
                    x2="137.441"
                    y2="102.05"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D931FE" />
                    <stop offset="1" stop-color="#D931FE" stop-opacity="0.25" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_43_2175"
                    x1="51.5668"
                    y1="77.8599"
                    x2="51.5668"
                    y2="102.065"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D931FE" />
                    <stop offset="1" stop-color="#D931FE" stop-opacity="0.25" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_43_2175"
                    x1="94.5001"
                    y1="94.2842"
                    x2="94.5001"
                    y2="131.571"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D931FE" />
                    <stop offset="1" stop-color="#D931FE" stop-opacity="0.25" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_43_2175"
                    x1="94.5001"
                    y1="57.4292"
                    x2="94.5001"
                    y2="109.106"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D931FE" />
                    <stop offset="1" stop-color="#D931FE" stop-opacity="0.25" />
                  </linearGradient>
                  <clipPath id="clip0_43_2175">
                    <rect
                      width="98.6087"
                      height="98.6087"
                      fill="white"
                      transform="translate(45.1958 45.1958)"
                    />
                  </clipPath>
                </defs>
              </svg>
              example@example.com
            </a>
          </div>
          <div class="link">
            <a
              href="https://www.google.com/maps/place/Chertanovo+Severnoye+District,+Moscow,+117208/@55.6312392,37.5965031,17z/data=!3m1!4b1!4m6!3m5!1s0x414ab2e8ad25e2bb:0x249109056747b992!8m2!3d55.6312371!4d37.5983276!16s%2Fg%2F11p4zvhyy9?entry=ttu"
              class="link"
              target="_blank"
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 189 189"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="94.5" cy="94.5" r="94.5" fill="white" />
                <g clip-path="url(#clip0_261_1243)">
                  <g filter="url(#filter0_d_261_1243)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M94 70.125C88.8219 70.125 84.625 74.3219 84.625 79.5C84.625 84.6781 88.8219 88.875 94 88.875C99.1781 88.875 103.375 84.6781 103.375 79.5C103.375 74.3219 99.1781 70.125 94 70.125ZM94 95.125C85.3719 95.125 78.375 88.1312 78.375 79.5C78.375 70.8687 85.3719 63.875 94 63.875C102.628 63.875 109.625 70.8687 109.625 79.5C109.625 88.1312 102.628 95.125 94 95.125ZM94 42C73.2906 42 56.5 58.7906 56.5 79.5C56.5 95.1813 87.7656 142.034 94 142C100.138 142.034 131.5 94.9688 131.5 79.5C131.5 58.7906 114.709 42 94 42Z"
                      fill="url(#paint0_linear_261_1243)"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_261_1243"
                    x="52.5"
                    y="42"
                    width="83"
                    height="110"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.674977 0 0 0 0 0.164062 0 0 0 0 0.7875 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_261_1243"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_261_1243"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_261_1243"
                    x1="94"
                    y1="42"
                    x2="94"
                    y2="142"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D931FE" />
                    <stop offset="1" stop-color="#D931FE" stop-opacity="0.37" />
                  </linearGradient>
                  <clipPath id="clip0_261_1243">
                    <rect width="100" height="100" fill="white" transform="translate(44 42)" />
                  </clipPath>
                </defs>
              </svg>
              Pushkin street Kalatushkin house
            </a>
          </div>
          <div class="link">
            <a href="tel:75555555555" class="link">
              <svg
                width="44"
                height="44"
                viewBox="0 0 189 189"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="94.5" cy="94.5" r="94.5" fill="white" />
                <path
                  d="M85.0058 69.3659L87.9804 74.696C90.6649 79.5062 89.5873 85.8162 85.3592 90.0442C85.3592 90.0442 80.2313 95.173 89.5291 104.471C98.8241 113.766 103.956 108.641 103.956 108.641C108.184 104.413 114.494 103.335 119.304 106.02L124.634 108.994C131.898 113.048 132.755 123.234 126.371 129.619C122.535 133.455 117.835 136.44 112.64 136.637C103.895 136.968 89.0424 134.755 74.1438 119.857C59.2454 104.958 57.032 90.1058 57.3635 81.3602C57.5605 76.165 60.5455 71.4654 64.3818 67.6291C70.7662 61.2448 80.9522 62.1026 85.0058 69.3659Z"
                  fill="url(#paint0_linear_261_1242)"
                />
                <path
                  d="M99.7725 53.6157C100.076 51.7417 101.847 50.4704 103.721 50.7737C103.837 50.796 104.211 50.8657 104.406 50.9093C104.798 50.9964 105.343 51.1305 106.023 51.3286C107.384 51.7248 109.284 52.3775 111.564 53.4231C116.131 55.5166 122.207 59.1787 128.513 65.4844C134.819 71.7902 138.481 77.8668 140.574 82.4331C141.62 84.7138 142.273 86.6141 142.669 87.9743C142.867 88.6545 143.001 89.2001 143.088 89.5911C143.132 89.7867 143.164 89.9437 143.186 90.0597L143.212 90.2027C143.515 92.0766 142.256 93.9219 140.382 94.2253C138.513 94.5278 136.753 93.2623 136.442 91.3974C136.432 91.347 136.406 91.2127 136.378 91.0857C136.321 90.8318 136.223 90.4293 136.068 89.8969C135.758 88.8321 135.22 87.2493 134.325 85.2983C132.538 81.401 129.325 76.0193 123.652 70.3458C117.978 64.6722 112.597 61.4594 108.699 59.6727C106.748 58.7782 105.166 58.2395 104.101 57.9293C103.568 57.7742 102.899 57.6207 102.645 57.5641C100.78 57.2533 99.47 55.4845 99.7725 53.6157Z"
                  fill="#D931FE"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M100.809 69.4262C101.331 67.6007 103.233 66.5437 105.059 67.0653L104.115 70.3705C105.059 67.0653 105.059 67.0653 105.059 67.0653L105.066 67.0672L105.073 67.0692L105.088 67.0737L105.124 67.0843L105.214 67.1125C105.283 67.1346 105.37 67.1634 105.472 67.1999C105.678 67.273 105.95 67.3768 106.284 67.5198C106.952 67.806 107.864 68.248 108.985 68.9112C111.228 70.2389 114.291 72.4443 117.889 76.0421C121.487 79.6399 123.692 82.7024 125.019 84.9458C125.683 86.0665 126.124 86.9788 126.411 87.6466C126.554 87.9803 126.658 88.2523 126.731 88.4582C126.768 88.5611 126.796 88.6474 126.818 88.7165L126.846 88.8072L126.857 88.8427L126.861 88.858L126.863 88.865C126.863 88.865 126.866 88.8716 123.56 89.816L126.866 88.8716C127.387 90.697 126.33 92.5995 124.505 93.1211C122.695 93.6381 120.809 92.6036 120.268 90.8067L120.251 90.7573C120.227 90.6884 120.177 90.5528 120.092 90.3548C119.922 89.9591 119.615 89.3118 119.103 88.4474C118.081 86.7207 116.235 84.1116 113.027 80.9035C109.819 77.6953 107.21 75.8496 105.483 74.8277C104.619 74.3161 103.972 74.0086 103.576 73.839C103.378 73.7541 103.242 73.7035 103.173 73.6791L103.124 73.6622C101.327 73.1219 100.292 71.2361 100.809 69.4262Z"
                  fill="#D931FE"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_261_1242"
                    x1="94.0002"
                    y1="63.3335"
                    x2="94.0002"
                    y2="136.667"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D931FE" />
                    <stop offset="1" stop-color="#D931FE" stop-opacity="0.33" />
                  </linearGradient>
                </defs>
              </svg>
              +75555555555
            </a>
          </div>
        </div>
        <ContactFromComponent />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import translation from "@/plugins/translation.config"
import CarouselComponent from "@/components/UI/CarouselComponent.vue"
import { useStore } from "vuex"
import { key } from "@/store/store"
import { computed, ref } from "vue"
import ContactFromComponent from '@/components/ContactFromComponent.vue'

const { t } = useI18n()
const store = useStore(key)

const payGames = computed(() => store.state.pay_games)
const freeGames = computed(() => store.state.free_games)

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

    background-image: url("@/assets/images/top_bg.png");
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
    background: linear-gradient(160deg, #e983ff 13.57%, #fff 95.3%);
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
      color: #ffffff;
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

.contact {
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
  & .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & .title {
    font-size: 64px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  & .subtitle {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 40px;
  }
  & .links {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    margin-bottom: 60px;
  }
  & .link {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 3.2px;
  }
}
</style>
