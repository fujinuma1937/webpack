import { ref, createApp } from "vue";
const app = createApp({
  setup() {
    const buttonStatement = ref<boolean>(true);
    const toggleStatement = () => {
      buttonStatement.value = !buttonStatement.value;
    };

    return { buttonStatement, toggleStatement };
  },
});
app.mount("#sample2");
