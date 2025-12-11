import { setupI18n } from '~/locales';

export default defineNuxtPlugin(async (nuxtApp) => {
  const app = nuxtApp.vueApp;

  // Setup i18n
  await setupI18n(app);
});
