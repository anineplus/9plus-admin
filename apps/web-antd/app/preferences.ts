import { defineOverridesPreferences } from '@vben/preferences';

/**
 * @description Project configuration file
 * Only need to override part of the configuration in the project
 * The rest will use default configuration
 * !!! Please clear cache after changing configuration, otherwise it may not take effect
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    name: process.env.VITE_APP_TITLE || 'Vben Admin',
  },
});
