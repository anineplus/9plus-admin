import { initPreferences } from '@vben/preferences';

import { overridesPreferences } from '~/preferences';

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();

  const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
  const appVersion = config.public.appVersion as string;
  const appNamespace = config.public.appNamespace as string;
  const namespace = `${appNamespace}-${appVersion}-${env}`;

  // Initialize app preferences
  await initPreferences({
    namespace,
    overrides: overridesPreferences,
  });
});
