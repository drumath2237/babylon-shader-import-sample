import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return {};
  }
  // config for gh pages
  return {
    base: '/babylon-shader-import-sample/',
  };
});
