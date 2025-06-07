const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  projectId: 'ok5pqh', // <- está no mesmo nível de e2e
  e2e: {
    setupNodeEvents(on, config) {
      // eventos customizados (se precisar depois)
    },
  },
})
