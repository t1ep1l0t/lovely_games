<template>
  <section class="terms">
    <div class="container">
      <div class="inner">
        <h1 class="title">
          {{ t("policy") }}
        </h1>
        <ul class='list'>
          <li class='item'
              v-for='(term, idx) of terms'
              :key='idx'
          >
            <h3 class='name'>
              {{ idx + 1 }}. {{ t(`policy_view.${term.name}`) }}
            </h3>
            <p class='text'>
              {{ t(`policy_view.${term.desc}`) }}
            </p>
            <ul class='subs' v-if='term.sub'>
              <p class='text'
                 v-for='(sub, i) of term.sub'
                 :key='idx'
              >
                {{ (idx + 1) + '.' + (i + 1) }}  {{ t(`policy_view.${sub}`) }}
              </p>
            </ul>
          </li>
        </ul>
        <span class='name'>
          {{ t('terms_view.contacting') }}
        </span>
        <span class='text'>
          {{ t('terms_view.contacting_desc') }}
          <a href='mailto:info@lovely-games.org' class='link'>
            info@lovely-games.org
          </a>
        </span>
        <div class='footer'>
          <span class='name text-center'>
            {{ t('terms_view.footer_name') }}
          </span>
          <span class='text text-center'>
            {{ t('terms_view.footer_desc') }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { ref } from "vue"
import type { Ref } from "vue"

const { t } = useI18n()

interface faq {
  name: string
  desc: string
  sub?: string[]
}

const terms :Ref<faq[]> = ref([
  {
    name: 'name1',
    desc: 'desc1'
  },
  {
    name: 'name2',
    desc: 'desc2'
  },
  {
    name: 'name3',
    desc: 'desc3'
  },
  {
    name: 'name4',
    desc: 'desc4'
  },
  {
    name: 'name5',
    desc: 'desc5'
  },
  {
    name: 'name6',
    desc: 'desc6',
    sub: ['desc6_1', 'desc6_2', 'desc6_3', 'desc6_4', 'desc6_5']
  },
  {
    name: 'name7',
    desc: 'desc7'
  },
])
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.terms {
  position: relative;
  padding: 80px 0;

  & .inner {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
  & .title {
    font-size: 68px;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 20px;
  }
  & .text {
    font-weight: 400;
    font-size: 22px;
  }
  & .name {
    font-weight: 600;
    font-size: 28px;
  }
  & .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;
  }
  & .item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
  & .link {
    color: $rose;
  }
  & .subs {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    padding-left: 20px;
  }
  & .footer {
    margin-top: 40px;
    padding-top: 40px;
    border-top: 2px solid #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
}
</style>