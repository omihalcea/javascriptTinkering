<script setup>
import Github from "@/components/icons/github.vue";
import Instagram from "@/components/icons/instagram.vue";
import Youtube from "@/components/icons/youtube.vue";
import Twitch from "@/components/icons/twitch.vue";
</script>

<template>
  <footer class="footer bg-gray-900">
    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <nav class="flex flex-wrap justify-center" aria-label="Footer">
        <div class="px-5 py-2 max-w-2 h-auto">
          <a href="https://www.instagram.com/octaviian.mi/?hl=es">
          <instagram class="icon-style"/>
          </a>
        </div>
        <div class="px-5 py-2 max-w-2 h-auto">
          <a href="https://github.com/omihalcea">
            <github class="icon-style"/>
          </a>
        </div>
        <div class="px-5 py-2 max-w-2 h-auto">
          <a href="https://www.youtube.com/@otamigod5199">
            <youtube class="icon-style"/>
          </a>
        </div>
        <div class="px-5 py-2 max-w-2 h-auto">
          <a href="https://www.twitch.tv/otamigod">
            <twitch class="icon-style"/>
          </a>
        </div>
      </nav>
      <p class="mt-4 text-center text-base text-gray-300">
        &copy; 2024 Octavian Mihalcea. All rights reserved.
      </p>
    </div>
  </footer>
</template>
