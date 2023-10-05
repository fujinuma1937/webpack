import { ref, createApp, onMounted } from "vue";

const app = createApp({
  setup() {
    const message = ref<string>("Hello vue.js");
    onMounted(() => {
      message.value = "Good by vue.js";
    });
    console.log(message.value);
    return { message };
  },
});
app.mount("#sample1");
