<template>
  <section class="faq_view">
    <div class="container">
      <div class='inner'>
        <h1 class='title'>
          FAQ
        </h1>
        <span class='subtitle'>
          {{ t('faq.subtitle') }}
          <router-link :to='translation.i18nRoute({name: "home"})'
                       class='link'
          >
            {{ t('home.contact.title') }}
          </router-link>
        </span>
        <v-expansion-panels class='faqs'
                            variant='accordion'
        >
          <v-expansion-panel class='faq'
                             v-for='(faq, idx) of faqs'
                             :key='idx'
                             selected-class='faq_open'
                             rounded='20px'
          >
            <v-expansion-panel-title>
              <span class='name'>
                {{ t(`${faq.name}`) }}
              </span>
              <template v-slot:actions>
                <svg class='icon' width="32" height="32" viewBox="0 0 75 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_87_751)">
                    <path d="M45.3333 0H25.3333V18.6791H2V34.6897H25.3333V53.3687H45.3333V34.6897H68.6667V18.6791H45.3333V0Z" fill="url(#paint0_linear_87_751)" shape-rendering="crispEdges"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_87_751" x="0" y="0" width="74.667" height="63.3687" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dx="2" dy="6"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_751"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_751" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_87_751" x1="35.3333" y1="0" x2="35.3333" y2="53.3687" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#D631FB"/>
                      <stop offset="1" stop-color="#D631FB" stop-opacity="0.58"/>
                    </linearGradient>
                  </defs>
                </svg>
              </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <span class='value'>
                {{ t(`${faq.desc}`) }}
              </span>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { ref } from "vue"
import type { Ref } from "vue"
import translation from '@/plugins/translation.config'

const { t } = useI18n()

interface faq {
  name: string,
  desc: string
}

const faqs :Ref<faq[]> = ref([
  {
    name: 'faq.head1',
    desc: 'faq.desc1'
  },
  {
    name: 'faq.head2',
    desc: 'faq.desc2'
  },
  {
    name: 'faq.head3',
    desc: 'faq.desc3'
  },
  {
    name: 'faq.head4',
    desc: 'faq.desc4'
  },
  {
    name: 'faq.head5',
    desc: 'faq.desc5'
  },
  {
    name: 'faq.head6',
    desc: 'faq.desc6'
  },
  {
    name: 'faq.head7',
    desc: 'faq.desc7'
  },
  {
    name: 'faq.head8',
    desc: 'faq.desc8'
  },
  {
    name: 'faq.head9',
    desc: 'faq.desc9'
  },
  {
    name: 'faq.head10',
    desc: 'faq.desc10'
  },
  {
    name: 'faq.head11',
    desc: 'faq.desc11'
  },
  {
    name: 'faq.head12',
    desc: 'faq.desc12'
  },
  {
    name: 'faq.head13',
    desc: 'faq.desc13'
  },
])

</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.faq_view {
  padding: 80px 0;

  & .inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & .title {
    text-align: center;
    font-size: 96px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 100%;
    margin-bottom: 30px;
  }
  & .subtitle {
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    max-width: 1000px;
    display: block;
    margin-bottom: 60px;
  }
  & .link {
    color: $rose;
    &:hover {
      text-decoration: underline;
    }
  }
  & .faqs {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
  & .faq {
    width: 100%;
  }
  & .icon {
    transition: all .3s ease;
  }
  & .v-expansion-panel-title--active {
    & .icon {
      transform: rotate(45deg);
    }
  }
  & .name {
    font-weight: 600;
    font-size: 24px;
  }
  & .value {
    font-weight: 500;
    font-size: 20px;
  }
}
</style>

<style lang='scss'>
.faq_view {
  & .v-expansion-panels > :first-child:not(:last-child):not(.v-expansion-panel--active):not(.v-expansion-panel--before-active) {
    border-radius: 20px!important;
  }
  & .v-expansion-panels > :not(:first-child):not(:last-child):not(.v-expansion-panel--active):not(.v-expansion-panel--after-active) {
    border-radius: 20px!important;
  }
  & .v-expansion-panels > :not(:first-child):not(:last-child):not(.v-expansion-panel--active):not(.v-expansion-panel--before-active) {
    border-radius: 20px!important;
  }
  & .v-expansion-panels > :last-child:not(:first-child):not(.v-expansion-panel--active):not(.v-expansion-panel--after-active) {
    border-radius: 20px!important;
  }
  & .v-expansion-panels--variant-accordion > :not(:first-child):not(:last-child) {
    border-radius: 20px!important;
  }
  & .v-expansion-panels--variant-accordion > :last-child {
    border-radius: 20px!important;
  }
  & .v-expansion-panels--variant-accordion > :first-child {
    border-radius: 20px!important;
  }
  & .v-expansion-panel {
    border-radius: 20px;
  }
  & .v-expansion-panel-title {
    padding: 24px 40px;
  }
  & .v-expansion-panel-text__wrapper {
    padding: 8px 40px 24px;
  }
  & .v-expansion-panel--active:not(:first-child), .v-expansion-panel--active + .v-expansion-panel {
    margin-top: 0;
  }
}
</style>