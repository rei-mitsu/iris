<template>
  <h1>{{ props.title }}</h1>
  <textarea
    v-model="message"
    placeholder="ここにメッセージを入力すると、この画面を開いている他の人にも入力したメッセージが表示されます。"
  />
</template>

<script setup lang="ts">
import { defineOptions, defineProps, ref, watch } from "vue";
import { io } from "socket.io-client";

defineOptions({ name: "SyncMessage" });

const props = defineProps({
  title: String,
});

const message = ref("");

watch(message, (value) => {
  socket.emit("message", value);
});

const socket = io(process.env.VUE_APP_API_URL);

socket.on("message", (msg) => {
  message.value = msg;
});
</script>

<style scoped>
textarea {
  width: 500px;
  height: 100px;
}
</style>
