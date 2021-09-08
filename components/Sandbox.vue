<template>
  <div
    :style="`height: ${height}px`"
    class="codesandbox w-full mb-6 mx-auto bg-black text-white text-3xl text-center flex items-center justify-center overflow-hidden rounded-md"
  >
    <iframe
      :style="`height: ${height}px`"
      v-if="id"
      :src="`https://codesandbox.io/embed/${id}?fontsize=14&hidenavigation=1&theme=dark&view=preview`"
      title="CodeSandbox editor"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      class="w-full overflow-hidden"
    />
    <span v-else>Loading CodeSandbox...</span>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      default: 500
    }
  },
}
</script>

<style scoped>
.codesandbox,
.codesandbox iframe {
  @apply w-full rounded-md overflow-hidden h-64;
}
</style>
