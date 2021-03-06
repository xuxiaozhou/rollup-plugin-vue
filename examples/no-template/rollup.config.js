import VuePlugin from 'rollup-plugin-vue'

export default [
  {
    input: 'src/HelloWorld.vue',
    output: {
      file: 'dist/HelloWorld.js',
      format: 'esm',
      sourcemap: 'inline',
    },
    plugins: [VuePlugin()],
    external: ['vue'],
  },
]
