<script setup lang="ts">
import { curation2tei } from "@nakamura196/iiif-tei";
const url = ref<string>(
  "https://mp.ex.nii.ac.jp/api/curation/json/b6ea1384-039d-4440-9cb5-c2be149b3daf"
);

const xml_string = ref<string>("");

const convert = async () => {
  const xml_string_ = await curation2tei(url.value);
  xml_string.value = xml_string_;
};
</script>
<template>
  <v-container>
    <v-text-field
      v-model="url"
      label="URL of Curation List"
      clearable
      clear-icon="mdi-close-circle"
    ></v-text-field>

    <v-btn color="primary" @click="convert">Convert</v-btn>

    <pre class="mt-5">{{ xml_string }}</pre>
  </v-container>
</template>
