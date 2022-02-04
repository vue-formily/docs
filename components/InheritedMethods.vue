<template>
  <div class="c-inherited-methods">
    <ul class="w-full">
      <li class="c-inherited-methods__item inline-flex mr-2" v-for="(method, i) in classMethods[name]" :key="i">
        <a :href="method.url">{{ method.text }}</a>
        <template v-if="i < classMethods[name].length - 1">,</template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    }
  },
  data() {
    return {
      classMethods: {
        evento: [
          { text: 'emit', url: '/api/evento#emit' },
          { text: 'once', url: '/api/evento#once' },
          { text: 'on', url: '/api/evento#on' },
          { text: 'off', url: '/api/evento#off' }
        ],
        element: [
          { text: 'register', url: '/api/element#static-register' },
          { text: 'unregister', url: '/api/element#static-unregister' },
          { text: 'isValid', url: '/api/element#abstract-isvalid' },
          { text: 'getHtmlName', url: '/api/element#abstract-getHtmlName' },
          { text: 'shake', url: '/api/element#shake' },
          { text: 'cleanUp', url: '/api/element#cleanUp' },
          { text: 'addProps', url: '/api/element#addProps' },
          { text: 'getProps', url: '/api/element#getProps' },
          { text: 'getSchema', url: '/api/element#getschema' }
        ],
        group: [
          { text: 'accept', url: '/api/group#static-accept' },
          { text: 'create', url: '/api/group#static-create' },
          { text: 'validate', url: '/api/group#validate' },
          { text: 'setValue', url: '/api/group#setValue' },
          { text: 'clear', url: '/api/group#clear' },
          { text: 'reset', url: '/api/group#reset' },
          { text: 'shake', url: '/api/group#shake' }
        ]
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.c-inherited-methods__item {
  padding:  0;

  &:before {
    display: none;
  }
}
</style>
