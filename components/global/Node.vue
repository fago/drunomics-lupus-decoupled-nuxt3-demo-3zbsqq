<template>
  <div class="node">
    <h2>{{ title }}</h2>
    <div v-if="body" v-html="body" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: String;
  type: String;
  body?: String;
}>();
</script>
