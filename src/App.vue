<!-- src/App.vue -->
<template>
  <div id="app" class="flex flex-row h-screen">
    <!-- Left Column (NavBar) -->
    <div
      id="NavBar"
      class="w-1/4 flex flex-col border-r-4 border-gray-300"
    >
      <!-- Navbar -->
      <div class="flex flex-col space-y-2 p-4 h-full">
        <button
          @click="activeTab = 'Chat'"
          :class="buttonClasses('Chat')"
        >
          Chat
        </button>
        <button
          @click="activeTab = 'Snippets'"
          :class="buttonClasses('Snippets')"
        >
          Snippets
        </button>
        <button
          @click="activeTab = 'Codex'"
          :class="buttonClasses('Codex')"
        >
          Codex
        </button>
      </div>
    </div>
    <!-- Main Content -->
    <div
      id="MainContent"
      class="flex-1 p-4 flex flex-col items-center justify-start"
    >
      <component :is="activeTab"></component>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'Chat',
    };
  },
  methods: {
    buttonClasses(tab) {
      return {
        'tab-button flex-1 p-2 border-b-2 border-gray-300 rounded transition-colors': true,
        'bg-blue-500 text-white': this.activeTab === tab,
        'bg-gray-200 text-black': this.activeTab !== tab,
      };
    },
  },
  components: {
    Chat: () => import('./components/Chat.vue'),
    Snippets: () => import('./components/Snippets.vue'),
    Codex: () => import('./components/Codex.vue'),
  },
};
</script>

<style scoped>
.tab-button {
  transition: background-color 0.2s;
  border-radius: 0.25rem;
}

.tab-button:hover {
  background-color: rgb(229, 231, 235); /* Tailwind's gray-200 */
}
</style>