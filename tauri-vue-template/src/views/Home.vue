<script setup lang="ts">
import { useRouter } from "vue-router";
import { NButton } from "naive-ui";

const router = useRouter();

function handleClick() {
  router.push({ name: "setting" });
}
</script>

<template>
  <NButton @click="handleClick"> 点它 </NButton>
</template>
