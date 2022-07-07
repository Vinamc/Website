<script setup lang="ts"></script>

<template >
  <register class="bg-local min-h-screen hero " style="background-image: url(./components/img/backrpg.png);" >
  <div class="hero-content min-h-full bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <div class="card w-96">
          <div class="card-body">
            <h1 class="card-title">Chương trình nạp thẻ</h1>
            <h3 class="card-title">Khuyến mãi nạp Bank và MOMO +20%</h3>
          </div>
          <figure><img src="./components/img/nql.png" /></figure>
        </div>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <h1 class="text-5xl font-bold">Đăng ký VINAMC</h1>
            <label class="label">
              <span class="label-text">Tên nhân vật</span>
            </label>
            <input type="text" placeholder="tên nhân vật" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Mật khẩu</span>
            </label>
            <input type="text" placeholder="password" class="input input-bordered" />
            <label class="label">
              <a href="/login.html" class="label-text-alt link link-hover">Bạn đã có tài khoản?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</register>
</template>
