<template>
  <div class="flex items-center justify-center">
    <IconCheckCircle v-if="yes" width="20" class="text-green-500"></IconCheckCircle>
  </div>
</template>

<script>
export default {
  name: 'Features',
  props: {
    yes: Boolean
  },
}
</script>
