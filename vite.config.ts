import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  if (mode === 'dev') {
    return {};
  }
  return {
    base: '/babylon-shader-import-sample/',
  };
});
