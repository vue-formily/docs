import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#F1A142'
  },
  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  tailwindcss: {
    viewer: false,
    jit: true
  }
});
