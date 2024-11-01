<template>
  <header class="header">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <div class="text-4xl font-bold text-gray-300 hover:text-gray-400">
            Octavian<span class="text-yellow-400 hover:text-yellow-600">.</span>
          </div>
        </a>
      </div>
      <div class="lg:hidden">
        <button @click="openMenu" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12 center">
        <a href="/" class="text-lg font-semibold leading-6 text-gray-400 hover:text-white transition duration-200">Home</a>
        <a href="/calculadora" class="text-lg font-semibold leading-6 text-gray-400 hover:text-white transition duration-200">Calculadora</a>
        <a href="/json" class="text-lg font-semibold leading-6 text-gray-400 hover:text-white transition duration-200">Json</a>
        <a href="/axios" class="text-lg font-semibold leading-6 text-gray-400 hover:text-white transition duration-200">Axios</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <p class="text-3xl font-semibold leading-6 text-white">🙉</p>
      </div>
    </nav>

    <!-- Mobile menu, shown based on 'isMenuOpen' state -->
    <div v-if="isMenuOpen" class="lg:hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 z-10"></div>
      <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto header px-6 py-6 sm:max-w-sm sm:ring-white/10">
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <div class="text-4xl font-bold text-gray-300">
              Octavian<span class="text-yellow-400">.</span>
            </div>
          </a>
          <button @click="closeMenu" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/25">
            <div class="space-y-2 py-6">
              <a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Home</a>
              <a href="/calculadora" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Calculadora</a>
              <a href="/json" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Json</a>
              <a href="/axios" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Axios</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isMenuOpen = ref(false);

    const openMenu = () => {
      isMenuOpen.value = true;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    return {
      isMenuOpen,
      openMenu,
      closeMenu,
    };
  },
};
</script>