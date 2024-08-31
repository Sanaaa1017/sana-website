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
      <!-- 漢堡菜單元件 -->
      <div class="md:hidden">
        <input type="checkbox" id="menu-toggle" class="menu-checkbox" v-model="isMenuOpen" />
        <label for="menu-toggle" class="relative menu-icon">
          <div>
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
          </div>
        </label>
        <nav class="absolute menu-links" v-show="isMenuOpen">
          <RouterLink :to="{ name: 'about' }" @click="closeMenu">About</RouterLink>
          <RouterLink :to="{ name: 'works' }" @click="closeMenu">Works</RouterLink>
          <RouterLink :to="{ name: 'blog' }" @click="closeMenu">Blog</RouterLink>
          <RouterLink :to="{ name: 'contact' }" @click="closeMenu">Contact</RouterLink>
        </nav>
      </div>
      <!-- 導覽列 -->
      <nav class="hidden md:flex gap-5">
        <RouterLink :to="{ name: 'about' }">
          <span class="hover:border-black hover:border-b-2 hover:border-dotted">About</span>
        </RouterLink>
        <span>/</span>
        <RouterLink :to="{ name: 'works' }">
          <span class="hover:border-black hover:border-b-2 hover:border-dotted">Works</span>
        </RouterLink>
        <span>/</span>
        <RouterLink :to="{ name: 'blog' }">
          <span class="hover:border-black hover:border-b-2 hover:border-dotted">Blog</span>
        </RouterLink>
        <span>/</span>
        <RouterLink :to="{ name: 'contact' }">
          <span class="hover:border-black hover:border-b-2 hover:border-dotted">Contact</span>
        </RouterLink>
      </nav>
      <div class="">
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.menu-icon {
  display: block;
  width: 40px;
  height: 40px;
}

.menu-icon .line {
  background-color: black;
  width: 80%;
  height: 2px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 1s;
}

.menu-icon .line-1 {
  top: 25%;
}

.menu-icon .line-2 {
  top: 50%;
}

.menu-icon .line-3 {
  top: 75%;
}

#menu-toggle:checked+.menu-icon .line-1 {
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}

#menu-toggle:checked+.menu-icon .line-3 {
  top: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
}

#menu-toggle:checked+.menu-icon .line-2 {
  display: none;
}

.menu-checkbox {
  display: none;
}

.menu-icon {
  cursor: pointer;
}

.menu-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: white;
  width: 100%;
  padding: 20px;
  position: absolute;
  top: 56px;
  left: 0;
}

@media (min-width: 768px) {
  .menu-icon {
    display: none;
  }
}
</style>
