import { initTippy } from '@vben/common-ui/es/tippy';
import { MotionPlugin } from '@vben/plugins/motion';

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;

  // Initialize Tippy
  initTippy(app);

  // Configure Motion plugin
  app.use(MotionPlugin);
});
