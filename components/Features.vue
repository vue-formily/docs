<template>
  <div>
    <div v-for="(item, i) in items" :key="i" class="mt-3 flex">
      <div v-html="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
}
</script>
