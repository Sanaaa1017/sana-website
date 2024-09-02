<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);
// 關閉菜單
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header>
    <div class="fixed flex justify-between items-center w-full bg-white p-2 md:p-4 text-lg font-serif font-bold">
      <!-- 漢堡標導覽列 -->
      <div class="md:hidden">
        <input type="checkbox" id="menu-toggle" class="menu-checkbox" v-model="isMenuOpen" />
        <label for="menu-toggle" class="relative ham-icon">
          <div>
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
          </div>
        </label>
        <nav class="absolute ham-menu" v-show="isMenuOpen">
          <RouterLink :to="{ name: 'about' }" @click="closeMenu">
            <div class="p-2 text-center hover:bg-gray-400">About</div>
          </RouterLink>
          <RouterLink :to="{ name: 'works' }" @click="closeMenu">
            <div class="p-2 text-center hover:bg-gray-400">Works</div>
          </RouterLink>
          <RouterLink :to="{ name: 'blog' }" @click="closeMenu">
            <div class="p-2 text-center hover:bg-gray-400">Blog</div>
          </RouterLink>
          <RouterLink :to="{ name: 'contact' }" @click="closeMenu">
            <div class="p-2 text-center hover:bg-gray-400">Contact</div>
          </RouterLink>
        </nav>
      </div>
      <!-- 導覽列 -->
      <nav class="hidden md:flex gap-5">
        <RouterLink :to="{ name: 'about' }">
          <span class="hover:text-gray-400">About</span>
        </RouterLink>
        <span>/</span>
        <RouterLink :to="{ name: 'works' }">
          <span class="hover:text-gray-400">Works</span>
        </RouterLink>
        <span>/</span>
        <RouterLink :to="{ name: 'blog' }">
          <span class="hover:text-gray-400">Blog</span>
        </RouterLink>
        <span>/</span>
        <RouterLink :to="{ name: 'contact' }">
          <span class="hover:text-gray-400">Contact</span>
        </RouterLink>
      </nav>
      <div class="">
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.ham-icon {
  display: block;
  width: 40px;
  height: 40px;
}

.ham-icon .line {
  background-color: black;
  width: 80%;
  height: 2px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 1s;
}

.ham-icon .line-1 {
  top: 25%;
}

.ham-icon .line-2 {
  top: 50%;
}

.ham-icon .line-3 {
  top: 75%;
}

#menu-toggle:checked+.ham-icon .line-1 {
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}

#menu-toggle:checked+.ham-icon .line-3 {
  top: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
}

#menu-toggle:checked+.ham-icon .line-2 {
  display: none;
}

.menu-checkbox {
  display: none;
}

.ham-icon {
  cursor: pointer;
}

.ham-menu {
  background-color: white;
  width: 100%;
  position: absolute;
  top: 56px;
  left: 0;
  opacity: 0; /* 初始透明 */
  transform: ScaleY(0); /* 初始向上移動 */
  transition: transform 1s ease-in-out, opacity 1s ease-in; /* 動畫過渡效果 */
}

#menu-toggle:checked ~ .ham-menu {
  opacity: 1; /* 顯示選單 */
  transform: ScaleY(1); /* 恢復到原始位置 */
}

@media (min-width: 768px) {
  .ham-icon {
    display: none;
  }
}
</style>
