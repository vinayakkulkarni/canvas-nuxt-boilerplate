<script setup lang="ts">
  const setBodyHeight = (height: number) => {
    document.body.style.height = height ? `${height}px` : '';
  };
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <button
      v-for="height in [1000, 1500, 0]"
      :key="height"
      type="button"
      class="text-white font-bold py-2 px-4 rounded bg-gray-500 hover:bg-gray-400 hover:border-gray-500"
      @click="setBodyHeight(height)"
    >
      {{ height ? `Set height to ${height}px` : 'Reset height' }}
    </button>
  </div>
</template>
