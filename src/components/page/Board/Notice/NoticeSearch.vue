<template>
  <div class="search-box">
    제목<input v-model="searchKey.searchTitle" />
    <input type="date" v-model="searchKey.searchStartDate" />
    <input type="date" v-model="searchKey.searchEndDate" />
    <button @click="handlerSearch">검색</button>
    <button
      v-if="userType === 'M'"
      @click="() => $router.push('notice.do/insert')"
    >
      신규등록
    </button>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useUserInfo } from "../../../../stores/userInfo";

const injectedValue = inject("providedValue");
const searchKey = ref({});
const userInfo = useUserInfo();
const userType = computed(() => userInfo.user.userType);

const handlerSearch = () => {
  injectedValue.value = { ...searchKey.value };
};
</script>

<style lang="scss" scoped>
.search-box {
  margin-bottom: 10px;
  display: block;
  float: inline-end;
}

input {
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border: none;
  color: white;
  width: 70px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 0 4px #999;
  background-color: #3bb2ea;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #3e8e41;
    box-shadow: 0 2px #666;
    transform: translateY(2px);
  }
}
</style>