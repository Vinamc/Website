<script setup lang="ts">
import Authen from '@/layouts/Authencation.vue'
import bg from '@/assets/img/backrpg.png'
import nql from '@/assets/img/nql.png'
import { ref } from 'vue';
import { useAccountStore } from '@/stores/Accounts';
import { useRouter } from 'vue-router';
import HomeViewVue from './HomeView.vue';

const store = useAccountStore()
const username = ref('')
const pass = ref('')
const usernameInput = ref<HTMLInputElement>(null as any)
const passInput = ref<HTMLInputElement>(null as any)
const error = ref({
  username: false,
  pass: false,
  fail: false

})
const router = useRouter()
const login = () => {

  if (pass.value === '') {
    error.value.pass = true;
    passInput.value.focus()
    return;
  }
  else {
    error.value.pass = false
  }

  error.value.fail = false
  fetch('http://localhost:3001/login', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username.value,
      password: pass.value,
    })
  }).then(async response => {
    if (response.ok) {
      const data = await response.json()
      store.setUser({
        username: data.player.username,
        realname: data.player.realname,
        isLogged: data.player.isLogged,
        hasSession: data.player.hasSession,
        token: data.token,
        refresh_token: data.refresh_token
      })
      router.push('/')
    }
    error.value.fail = true
    usernameInput.value.focus()
  })
}

</script>

<template>
  <Authen>
    <div class="bg-local min-h-screen hero " :style="'background-image: url(' + bg + ');'">
      <div>
        <div class="hero-content min-h-full bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
              <div class="card w-96">
                <div class="card-body">
                  <h1 class="card-title">Chương trình nạp thẻ</h1>
                  <h3 class="card-title">Khuyến mãi nạp Bank và MOMO +20%</h3>
                </div>
                <figure><img :src="nql" /></figure>
              </div>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <h1 class="text-5xl font-bold">Đăng nhập VINAMC</h1>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Tên đăng nhập</span>
                  </label>
                  <input type="text" v-model="username" ref="usernameInput" placeholder="Tên đăng nhập"
                    class="input input-bordered" />
                  <span v-if="error.username" class=" text-red-500">Tên đăng nhập sai định dạng</span>
                  <span v-if="error.fail" class=" text-red-500">Tên đăng nhập hoặc mật khẩu không đúng</span>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Mật khẩu</span>
                  </label>
                  <input type="password" v-model="pass" ref="passInput" placeholder="password"
                    class="input input-bordered" />
                  <span v-if="error.pass" class=" text-red-500">Mật khẩu không được để trống</span>
                  <label class="label">
                    <RouterLink to="/reg" class="label-text-alt link link-hover">Bạn chưa có tài khoản?</RouterLink>
                    <a href="#" class="label-text-alt link link-hover">Bạn quên mật khẩu?</a>
                  </label>
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-primary" @click="login">Đăng nhập</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </Authen>
</template>