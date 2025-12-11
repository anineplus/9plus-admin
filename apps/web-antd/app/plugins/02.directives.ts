import { registerAccessDirective } from '@vben/access';
import { registerLoadingDirective } from '@vben/common-ui/es/loading';

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;

  // Register v-loading directive
  registerLoadingDirective(app, {
    loading: 'loading',
    spinning: 'spinning',
  });

  // Register access directive
  registerAccessDirective(app);
});
