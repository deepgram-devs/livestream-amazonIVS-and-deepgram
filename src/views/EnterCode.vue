<template>
  <div class="enter-code">
    <h1>VIP Live Stream</h1>
    <p>
      A live stream you have been specially invited to.... powered by Deepgram,
      Amazon IVS, and OBS.
    </p>
    <img src="../../assets/dg-logo.svg" class="logo" />
    <p>Deepgram Demos</p>
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

<style scoped>
form {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-title {
  margin-top: 100px;
}

.logo {
  height: 10vh;
  margin-top: 100px;
}

.enter-code > h1 {
  font-size: 3.5em;
}

.enter-code > p {
  font-size: 1.2em;
}
</style>
