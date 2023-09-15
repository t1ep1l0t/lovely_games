<template>
  <section class="modal">
    <div class="inner">
      <button class="close" @click="setRegisterModalVisible">
        <svg
          width="24"
          height="24"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.0611 19.9919L38.1245 10.9377C40.6252 8.44216 40.6252 4.37912 38.1245 1.88362C35.6207 -0.627874 31.5633 -0.627874 29.0611 1.88362L19.9992 10.9377L10.9374 1.88362C8.4367 -0.627874 4.37934 -0.627874 1.87549 1.88362C-0.625163 4.37912 -0.625163 8.44216 1.87549 10.9377L10.9374 19.9919L1.87549 29.0621C-0.625163 31.5576 -0.625163 35.6209 1.87549 38.1164C4.37934 40.6279 8.4367 40.6279 10.9374 38.1164L19.9992 29.0621L29.0611 38.1164C31.5633 40.6279 35.6207 40.6279 38.1245 38.1164C40.6252 35.6209 40.6252 31.5576 38.1245 29.0621L29.0611 19.9919Z"
            fill="white"
          />
        </svg>
      </button>
      <img src="../assets/images/logotype.png" alt="" class="logotype" />
      <v-form class="form" v-model="valid">
        <div class="box">
          <label for="name" class="label"> {{ t('forms.name') }} </label>
          <v-text-field
            class="input"
            :placeholder="t('forms.name')"
            name="name"
            v-model="name"
            type="text"
            rounded
            variant="solo"
            :autofocus="true"
            density="compact"
            :rules="[required]"
          />
        </div>
        <div class="box">
          <label for="email" class="label"> E-mail </label>
          <v-text-field
            class="input"
            placeholder="E-mail"
            name="email"
            v-model="email"
            type="mail"
            rounded
            variant="solo"
            density="compact"
            :rules="[required, isEmail]"
          />
        </div>
        <div class="box">
          <label for="password" class="label">
            {{ t('forms.password') }}
          </label>
          <v-text-field
            class="input"
            :placeholder="t('forms.password')"
            name="password"
            v-model="password"
            :type="passwordType"
            rounded
            variant="solo"
            density="compact"
            :rules="[required]"
          >
            <template v-slot:append-inner>
              <button class="toggle" @click.prevent="setPasswordType">
                <svg
                  v-if="passwordType === 'password'"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.55774 11.9654C6.07076 13.1411 6.86762 14.2071 7.81397 14.9775C8.99068 15.9354 10.4569 16.5 12.0451 16.5C14.8882 16.5 17.3619 14.6817 18.4421 12.0346C17.9291 10.8589 17.1323 9.79288 16.1859 9.02249C15.0092 8.06456 13.5429 7.5 11.9548 7.5C9.11169 7.5 6.63795 9.31828 5.55774 11.9654ZM4.04543 11.7183C5.25854 8.39553 8.32501 6 11.9548 6C13.9079 6 15.7046 6.69645 17.1329 7.85921C18.3594 8.85768 19.3531 10.2422 19.9476 11.7492L20.0521 12.0141L19.9545 12.2817C18.7413 15.6045 15.6749 18 12.0451 18C10.092 18 8.29531 17.3035 6.86698 16.1408C5.64047 15.1423 4.64682 13.7578 4.05228 12.2508L3.94775 11.9859L4.04543 11.7183ZM11.9999 10.5C11.1715 10.5 10.4999 11.1716 10.4999 12C10.4999 12.8284 11.1715 13.5 11.9999 13.5C12.8284 13.5 13.4999 12.8284 13.4999 12C13.4999 11.1716 12.8284 10.5 11.9999 10.5ZM8.99994 12C8.99994 10.3431 10.3431 9 11.9999 9C13.6568 9 14.9999 10.3431 14.9999 12C14.9999 13.6569 13.6568 15 11.9999 15C10.3431 15 8.99994 13.6569 8.99994 12Z"
                      fill="#1F2328"
                    ></path>
                  </g>
                </svg>
                <svg
                  v-else
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M0 0h48v48H0z" fill="none"></path>
                    <g id="Shopicon">
                      <path
                        d="M11.957,33.215L7.172,38L10,40.828l5.305-5.305C17.867,36.992,20.788,38,24,38c12,0,20-14,20-14s-2.954-5.16-7.957-9.215 L40.828,10L38,7.172l-5.305,5.305C30.133,11.008,27.212,10,24,10C12,10,4,24,4,24S6.954,29.16,11.957,33.215z M33.204,17.624 c2.668,2.091,4.747,4.638,5.996,6.369C36.728,27.396,31.024,34,24,34c-2.048,0-3.973-0.563-5.742-1.43l1.684-1.684 C21.133,31.589,22.517,32,24,32c4.418,0,8-3.582,8-8c0-1.483-0.411-2.867-1.114-4.058L33.204,17.624z M20.149,25.023 C20.062,24.694,20,24.356,20,24c0-2.206,1.794-4,4-4c0.356,0,0.694,0.062,1.023,0.149L20.149,25.023z M27.851,22.977 C27.938,23.306,28,23.644,28,24c0,2.206-1.794,4-4,4c-0.356,0-0.694-0.062-1.023-0.149L27.851,22.977z M24,14 c2.048,0,3.973,0.563,5.742,1.43l-1.684,1.684C26.867,16.411,25.483,16,24,16c-4.418,0-8,3.582-8,8 c0,1.483,0.411,2.867,1.114,4.058l-2.318,2.318c-2.668-2.091-4.747-4.638-5.997-6.369C11.272,20.604,16.976,14,24,14z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
            </template>
          </v-text-field>
        </div>
        <button class="button" :disabled="!valid" @click.prevent="registerUser">
          {{ t('header.register') }}
        </button>
        <div class="terms">
          {{ t('forms.accept').split('$')[0] }}
          <router-link
            :to="translation.i18nRoute({ name: 'terms_use' })"
            class="underline"
            @click="setRegisterModalVisible"
          >
            {{ t('forms.accept').split('$')[1] }}
          </router-link>
          {{ t('forms.accept').split('$')[2] }}
          <router-link
            :to="translation.i18nRoute({ name: 'privacy_policy' })"
            class="underline"
            @click="setRegisterModalVisible"
          >
            {{ ' ' + t('forms.accept').split('$')[3] }}
          </router-link>
        </div>
        <div class="text">
          {{ t('forms.already_register') }}
          <button class="link" @click.prevent="setLoginModalVisible">
            {{ t('header.login') }}
          </button>
        </div>
      </v-form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from '@/store/store'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import translation from '@/plugins/translation.config'

const store = useStore(key)
const { t } = useI18n()
const setLoginModalVisible = () => {
  store.commit('setLoginModal')
}
const setRegisterModalVisible = () => {
  store.commit('setRegisterModal')
}

const valid: Ref<boolean> = ref(false)
const name: Ref<string> = ref('')
const email: Ref<string> = ref('')
const password: Ref<string> = ref('')
const passwordType: Ref<string> = ref('password')

const setPasswordType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
const required = (v) => !!v || t('forms.required')
const isEmail = (v) => {
  if (/.+@.+\..+/.test(v)) return true

  return t('forms.bad_format')
}

const registerUser = async () => {
  const data = {
    email: email.value,
    name: name.value,
    password: password.value,
    password_confirmation: ''
  }

  const response = await fetch('https://api.megagamer.org/api/auth/register', {
    method: 'POST',
    headers: {
      "ContentType": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  })

  const result = await response.json()

  console.log(response)
}
</script>

<style scoped lang="scss">
@import '@/assets/variable.scss';
</style>
