<script lang="ts" setup>
import { preferences } from '@vben/preferences';

definePageMeta({
  layout: 'default',
});

// Redirect to default home page
const router = useRouter();
const defaultHomePath = preferences.app.defaultHomePath || '/analytics';
router.replace(defaultHomePath);
</script>

<template>
  <div />
</template>
