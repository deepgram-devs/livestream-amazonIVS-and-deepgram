<template>
  <div class="enter-code">
    <h1 class="header-wrap">Enter with the code</h1>
    <form @submit.prevent="submitCode">
      <label for="code"> Code: </label>
      <input v-model="code" type="text" name="code" value />
      <button type="submit" name="button">Submit</button>
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

<style>
form {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

button {
  height: 35px;
  width: 150px;
  font-family: "Press Start 2P";
}

input {
  height: 30px;
  background-color: papayawhip;
  border: rgb(251, 169, 37) 5px solid;
  font-family: inherit;
  color: rgb(16, 97, 248);
}

label,
input,
button {
  font-size: inherit;
  padding: 0.2em;
  margin: 0.1em 0.2em;
  /* the following ensures they're all using the same box-model for rendering */
  -moz-box-sizing: content-box; /* or `border-box` */
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  border-radius: 5px;
  padding: 0.2em 0.8em;
}

button {
  background-color: rgb(53, 53, 146);
  border: rgb(250, 214, 8) 2px solid;
  color: rgb(250, 214, 8);
  width: fit-content;
}

button:hover {
  background-color: rgb(68, 68, 143);
}

button:active {
  background-color: rgb(147, 147, 189);
}
</style>
