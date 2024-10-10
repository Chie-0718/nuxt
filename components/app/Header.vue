<script setup>
const router = useRouter();

const header = ref([
  {
    text: "Home",
    onClick: () => {
      router.push("/");
    },
  },
  {
    text: "Classes",
    onClick: () => {
      router.push("/classes");
    },
  },
  {
    text: "Login",
    onClick: () => {
      console.log("Login");
    },
  },
]);
</script>

<template>
  <div
    class="flex w-full items-center h-85px text-gray-400 top-0 relative sticky z-10 bg-gray-800"
  >
    <div class="flex text-4xl w-1/5 justify-end border-2">Amazing!!</div>
    <div
      class="flex justify-end pr-75px items-center w-4/5 border-b-2 border-solid border-white-500"
    >
      <button
        class="text-28px px-25px cursor-pointer bg-transparent border-none h-60px text-white"
        v-for="item in header"
        @click="item.onClick"
      >
        {{ item.text }}
      </button>
    </div>
  </div>
</template>
