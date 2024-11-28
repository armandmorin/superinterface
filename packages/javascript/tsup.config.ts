import { defineConfig } from 'tsup'

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  entry: [
    'src/index.ts',
    'src/Thread.tsx',
    'src/ThreadFilesEnabled.tsx',
    'src/AudioThread.tsx',
    'src/ThreadDialog.tsx',
    'src/ThreadDialogFilesEnabled.tsx',
    'src/AudioThreadDialog.tsx',
  ],
  sourcemap: true,
  clean: true,
  shims: true,
  platform: 'browser',
  minify: true,
  format: [
    'iife',
    'cjs',
    'esm'
  ],
  injectStyle: true,
  dts: false,
  noExternal: [
    /(.*)/
  ],
})
