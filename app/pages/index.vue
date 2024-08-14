<script setup lang="ts">
  import { CanvasClient } from '@dscvr-one/canvas-client-sdk';
  import type { CanvasInterface } from '@dscvr-one/canvas-client-sdk';
  import { validateHostMessage } from '~/utils/dscvr';

  interface CanvasState {
    client: CanvasClient | undefined;
    user: CanvasInterface.Lifecycle.User | undefined;
    content: CanvasInterface.Lifecycle.Content | undefined;
    isReady: boolean;
  }

  const state = reactive<CanvasState>({
    client: undefined,
    user: undefined,
    content: undefined,
    isReady: false,
  });

  const initializationStarted = ref(false);
  const resizeObserver = ref<ResizeObserver | null>(null);

  onMounted(async () => {
    if (initializationStarted.value) return;

    initializationStarted.value = true;

    const client = new CanvasClient();

    try {
      const response = await client.ready();
      const isValidResponse = await validateHostMessage(response);
      if (isValidResponse) {
        state.client = client;
        state.user = response.untrusted.user;
        state.content = response.untrusted.content;
        state.isReady = true;

        // Set up resize observer
        resizeObserver.value = new ResizeObserver(() => client.resize());
        resizeObserver.value.observe(document.body);
      }
    } catch {
      state.isReady = true;
    }
  });

  onUnmounted(() => {
    if (resizeObserver.value) {
      resizeObserver.value.disconnect();
    }
    if (state.client) {
      state.client.destroy();
    }
  });

  const openUserProfile = () => {
    if (!state.client || !state.user) return;
    const url = `https://dscvr.one/u/${state.user.username}`;
    state.client.openLink(url);
  };
  const setBodyHeight = (height: number) => {
    document.body.style.height = height ? `${height}px` : '';
  };
</script>

<template>
  <div v-if="state.isReady">
    <div class="p-4 grid grid-cols-1 gap-3">
      <user-info v-if="state.user" :user="state.user" @open="openUserProfile" />
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
    </div>
  </div>
</template>
