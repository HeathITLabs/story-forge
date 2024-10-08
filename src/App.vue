<template>
  <div id="app" class="flex">
    <div class="flex h-screen bg-background">
    <!-- Left Column -->
    <div class="w-1/4 flex flex-col space-y-4 p-4 bg-card border border-border">
      <Chat />
      <Snippets />
      <Codex />
    </div>
    
    <!-- Main Content -->
    <div class="flex-1 p-4">
      <Chapter />
      <Act />
    </div>
  </div>
</div>
</template>

<script>
import Chat from './components/Chat.vue'
import Codex from './components/Codex.vue'
import Snippets from './components/Snippets.vue'
import Chapter from './components/Chapter.vue'
import Act from './components/Act.vue'
import './assets/tailwind.css'

export default {
  name: 'App',
  components: {
    Chat,
    Codex,
    Snippets,
    Chapter,
    Act
  }
}
</script>

<style>


</style>
