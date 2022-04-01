<template>
  <div class="enter-code">
    <h2 class="form-title">Enter with the code:</h2>
    <form @submit.prevent="submitCode">
      <label for="code"> Code: </label>
      <input v-model="code" type="password" name="code" value />
      <button type="submit" name="button" class="dg-btn">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "EnterCode",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();

    //Verify Code
    let code = ref("");
    function submitCode() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code }),
      };
      fetch("http://localhost:8080/secret-code", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data === "Correct code") {
            store.dispatch("verifyCode", true);
          } else {
            store.dispatch("verifyCode", false);
          }
        })
        .then(() => {
          if (store.state.allowAccess) {
            router.push({ name: "StreamChannel" });
          } else {
            alert("Incorrect code");
          }
        });

      code.value = "";
    }

    return { code, submitCode };
  },
};
</script>
