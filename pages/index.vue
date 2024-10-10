<template>
  <main>
    <div class="relative flex w-full h-dvh overflow-hidden">
      <div
        class="absolute z-2 top-43 left-40 w-90 h-60 backdrop-blur -translate-x-6 border-2 border-solid border-gray-400 text-center"
      >
        再見了小王八蛋
      </div>
      <img :src="random.pic" alt="Image of ran" class="w-dvw h-dvh" />
    </div>
    <div class="w-full h-105 flex relative justify-center">
      <div class="w-60 h-75 pl-15 pt-20 m-x-10 m-y-15 text-30px">
        好像有點什麼專業
      </div>
      <div
        class="w-70 h-75 p-y-10 m-x-5 m-y-15 text-center rounded-md hover:bg-[--hover]"
        v-for="item in pro"
      >
        <div class="m-y-5">{{ item.title }}</div>
        <div class="text-20px m-y-10 leading-6">
          {{ item.t1 }}<br />{{ item.t2 }}
        </div>
      </div>
    </div>
    <div class="w-full h-100 bg-[--second] flex flex-col">
      <div
        class="text-30px w-full text-center p-t-5 border-b-2 border-solid border-gray-600"
      >
        預計丟包流程
      </div>
      <div class="flex w-full justify-center">
        <div
          v-for="item in process"
          class="w-65 h-70 m-x-3 m-y-5 rounded-xl border-2 border-solid border-gray-400"
        >
          <div class="p-y-8 text-center">{{ item.title }}</div>
          <div class="p-x-8 text-20px leading-6 h-20">
            {{ item.t1 }}<br />{{ item.t2 }}
          </div>
          <div
            class="z-0 h-20 p-r-3 relative items-end text-30 text-end text-gray-500"
          >
            {{ item.id }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-70 overflow-hidden">
      <div
        class="text-30px w-full text-center p-t-5 border-b-2 border-solid border-gray-600"
      >
        選一個人教你丟包
      </div>
      <div class="w-90% flex overflow-hidden p-x-30">
        <div
          v-for="item in role"
          class="w-45 h-15 m-x-3 m-t-20 rounded border-2 border-solid border-white hover:bg-[--main]"
        >
          <div class="p-y-2 text-center text-6">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div
      class="w-full h-175 bg-[--second] flex flex-col overflow-hidden text-center p-y-10"
    >
      <div class="w-full h-30 flex justify-center">
        <div class="w-60 h-13 border-b-2 border-solid border-gray-400">
          熱門推薦
        </div>
      </div>
      <div class="w-full h-115">
        <div class="h-115 w-90% mx-auto flex justify-center items-center">
          <div
            v-for="item in hot"
            class="rounded-3 w-full mx-3 pt-5 border-2 bg-gray-800 border-solid border-#38394e hover:border-emerald"
          >
            <div class="h-20 flex justify-center">
              <div
                class="bg-emerald-7 h-20 w-20 rounded-full text-8 items-center flex justify-center"
              >
                {{ item.num }}
              </div>
            </div>
            <div class="text-center text-5">{{ item.na }}</div>
            <div class="text-left px-7">
              <div class="h-10 text-25px pt-2">{{ item.cn }}</div>
              <div class="h-6 text-20px text-emerald">
                {{ item.ty }}
              </div>
              <div class="h-37 text-23px">{{ item.tx }}</div>
            </div>
            <div class="h-20">{{ item.pri }}</div>
          </div>
        </div>
      </div>
      <div class="w-full h-30">
        <button
          class="w-50 h-15 m-t-5 border-none bg-green-7 text-white hover:bg-green-5 text-20px"
        >
          查看所有
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
// 熱門
const hot = ref([
  {
    num: "1654",
    na: "Sena",
    cn: "光明正大丟包實作",
    ty: "丟包",
    tx: "亂打些什麼",
    pri: "$2000",
  },
  {
    num: "2018",
    na: "Suou",
    cn: "丟包理論",
    ty: "丟包",
    tx: "亂打些什麼好呢",
    pri: "$1800",
  },
  {
    num: "1339",
    na: "Narukami",
    cn: "實用資訊站廣播技能",
    ty: "尋人",
    tx: "亂打些什麼就可以了",
    pri: "$1500",
  },
  {
    num: "3088",
    na: "Sakuma",
    cn: "丟包輔助技能",
    ty: "丟包",
    tx: "zzzzZZZ",
    pri: "$1800",
  },
]);

// 項目
const role = ref([
  { name: "SenaIzumi" },
  { name: "SuouTsukasa" },
  { name: "NarukamiArashi" },
  { name: "SakumaRitsu" },
  { name: "TsukinagaLeo" },
  { name: "TsukinagaLeo" },
  { name: "TsukinagaLeo" },
]);

// 流程
const process = ref([
  { title: "尋人", t1: "轉頭確認", t2: "自發尋人", id: "1" },
  {
    title: "廣播",
    t1: "借用服務台廣播器",
    t2: "通知目標人物到服務台",
    id: "2",
  },
  { title: "丟包", t1: "廣播結束", t2: "頭也不回地離開服務台", id: "3" },
  { title: "回家", t1: "離開賣場", t2: "騎車回家", id: "4" },
]);

// 專業
const pro = ref([
  { title: "好多專業", t1: "借麥克風廣播", t2: "然後丟包月永雷" },
  { title: "也可以是", t1: "借麥克風廣播", t2: "然後丟包朔間栗" },
  { title: "或者是", t1: "借麥克風廣播", t2: "然後丟包月永雷（重複）" },
]);

// 主頁
import Ran1 from "~/assets/image/ran/ran1.jpg";
import Ran2 from "~/assets/image/ran/ran2.jpg";
import Ran3 from "~/assets/image/ran/ran3.jpg";
const ran = [{ pic: Ran1 }, { pic: Ran2 }, { pic: Ran3 }];
const random = ref(ran[Math.floor(Math.random() * ran.length)]);
</script>
