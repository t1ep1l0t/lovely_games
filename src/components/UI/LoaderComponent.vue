<template>
  <div class='preloader'>
    <div class='push-pop'>
      <div class='loader'></div>
    </div>
    <span class='text'>
    {{ t('loading') }}
  </span>
  </div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped lang='scss'>
@import "../../assets/variable";

.preloader {
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 200px 0;
}

.push-pop {
  --duration: .85;
  height: 100px;
  width: 100px;
  position: relative;
  overflow: hidden;


  & > div:nth-of-type(1) {
    height: 20px;
    width: 20px;
    position: absolute;
    animation: push-pop-slide calc(var(--duration) * 1s) infinite alternate ease-in-out;
    transform: translate(0, -100%);
    top: 100%;
    left: 0;
    background: $rose;

    &:after {
      animation: push-pop-flip calc(var(--duration) * 1s) infinite alternate ease-in-out;
      background: $rose;
      content: '';
      height: 100%;
      position: absolute;
      width: 100%;
    }
  }


  & > div:nth-of-type(2) {
    background: $rose;
    height: 30px;
    left: 50%;
    position: absolute;
    top: 100%;
    transform: translate(-50%, -100%);
    width: 20px;
  }

  &:after,
  &:before {
    animation: push-pop-pushed calc(var(--duration) * 1s) alternate infinite ease;
    background: $rose;
    bottom: 0;
    content: '';
    height: 40px;
    position: absolute;
    width: 20px;
  }

  &:before {
    animation: push-pop-pushed calc(var(--duration) * 1s) alternate-reverse infinite ease;
    left: 0;
    background: $rose;
  }

  &:after {
    right: 0;
    background: $rose;
  }
}

@keyframes push-pop-pushed {
  0%, 72.5% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 100%);
  }
}

@keyframes push-pop-flip {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(0, -80px) rotate(90deg);
  }
  100% {
    transform: translate(0, 0) rotate(180deg);
  }
}

@keyframes push-pop-slide {
  to {
    transform: translate(0, -100%) translate(80px, 0);
  }
}

.text {
  font-family: $nico;
  color: $rose;
  font-weight: 600;
  font-size: 24px;
}
</style>