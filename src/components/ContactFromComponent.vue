<template>
  <v-form class="form" v-model="valid" ref="form">
    <v-text-field
      class="input"
      variant="underlined"
      base-color="#000000"
      color="#000"
      v-model="name"
      :rules="[required]"
    >
      <template v-slot:label>
        <span class="label">
          {{ t("forms.name") }}
        </span>
      </template>
    </v-text-field>
    <v-text-field
      class="input"
      variant="underlined"
      base-color="#000000"
      color="#000"
      v-model="email"
      :rules="[required, isEmail]"
    >
      <template v-slot:label>
        <span class="label">E-mail</span>
      </template>
    </v-text-field>
    <v-textarea
      class="input"
      variant="underlined"
      base-color="#000000"
      color="#000"
      v-model="comment"
      :rules="[required]"
      no-resize
      rows="5"
    >
      <template v-slot:label>
        <span class="label">
          {{ t("forms.comment") }}
        </span>
      </template>
    </v-textarea>
    <button class="button" :disabled="!valid">
      {{ t("home.contact.title") }}
    </button>
  </v-form>
</template>

<script setup lang="ts">
import type { Ref } from "vue"
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const valid: Ref<boolean> = ref(false)
const name: Ref<string> = ref("")
const email: Ref<string> = ref("")
const comment: Ref<string> = ref("")

const required = (v :any) => !!v || t("forms.required")
const isEmail = (v :any) => {
  if (/.+@.+\..+/.test(v)) return true

  return t("forms.bad_format")
}
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.form {
  max-width: 1000px;
  width: 100%;
  padding: 24px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  & .label {
    color: #000000;
  }

  & .button {
    align-self: center;
    padding: 20px 40px;
    border-radius: 10px;
  }

  & .input {
    color: #000000;
  }
}
</style>
