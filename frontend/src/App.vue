<template>
  <SyncMessage title="メッセージ同期" />
</template>

<script setup lang="ts">
import { defineOptions } from "vue";
import SyncMessage from "./components/SyncMessage.vue";

defineOptions({ name: "App" });
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
