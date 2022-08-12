<script setup lang="ts">

import Logo from '@/assets/img/Asset1.png'
import { useAccountStore } from '@/stores/Accounts';
import ArrowDownIcon from '@/components/ArrowDownIcon.vue'

const store = useAccountStore();
</script>

<template>
  <header>
  <div class="navbar bg-base-300">
    <div class="navbar-start">
      <img :src="Logo" class="normal-case w-12" >
    </div>
    <div class="navbar-center hidden lg:flex ">
      <ul class="menu menu-horizontal p-0 ">
        <li><RouterLink to="/">Trang chủ</RouterLink></li>
        <li tabindex="0">
          <a>
            Lối chơi
            <ArrowDownIcon />
          </a>
          <ul class="p-2 drop">
            <li ><RouterLink to="/rpg">MMO-RPG</RouterLink></li>
            <li ><RouterLink to="/fac" >Faction</RouterLink></li>
            <li ><RouterLink to="/">Skyblock</RouterLink></li>
            <li ><RouterLink to="/">Prison</RouterLink></li>
          </ul>
        </li>
        <li><RouterLink to="/donate">Nạp Thẻ</RouterLink></li>
        <li><RouterLink to="/wiki">Thông tin</RouterLink></li>
        <li><a href="http://vinamc.vn:8123/">Bản đồ</a></li>
      </ul>
    </div>

    <div class="navbar-end">
      <div class="dropdown dropdown-end" v-if="store.account">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" />
          </div>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Thông tin
              <span class="badge">mới</span>
            </a>
          </li>
          <li><a>{{store.account.realname}}</a></li>
          <li><a>Chức vụ: {{'Underfield'}}</a></li>
          <li><a>V-xu: {{store.account.points}}</a></li>
          <li><a>Cài đặt</a></li>
          <li><a @click="store.logout()">Đăng xuất</a></li>
        </ul>
      </div>
      <div v-else>
        <RouterLink to="/login" class=" btn btn-sm btn-primary">Đăng Nhập</RouterLink>
      </div>
    </div>
  </div>
  </header>
</template>

<style scoped lang="css">

.drop li {
  background-color: #e5e7eb;
}

header {
  position: fixed;
  width: 100%;
  z-index: 99;
}
</style>