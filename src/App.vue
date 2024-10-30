<!-- src/App.vue -->
<template>
  <div id="app" class="flex flex-col md:flex-row h-screen">
    <!-- Left Column (NavBar) -->
    <div 
      id="NavBar" 
      class="w-full md:w-1/4 flex flex-col md:flex-none border-r border-border"
    >
      <!-- Navbar -->
      <div class="flex flex-row space-x-2 p-4">
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
      class="flex-1 p-4 flex flex-col items-center justify-start md:justify-center"
    >
      <!-- Components -->
      <Chat v-if="activeTab === 'Chat'" />
      <Snippets v-if="activeTab === 'Snippets'" />
      <Codex v-if="activeTab === 'Codex'" />
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
        'tab-button flex-1 border border-border p-2': true,
        'bg-primary text-primary-foreground': this.activeTab === tab,
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
  background-color: var(--hover-background-color);
}
</style>
