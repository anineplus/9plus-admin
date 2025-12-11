import { initComponentAdapter } from '~/adapter/component';
import { initSetupVbenForm } from '~/adapter/form';

export default defineNuxtPlugin(async () => {
  // Initialize component adapter
  await initComponentAdapter();

  // Initialize form component
  await initSetupVbenForm();
});
