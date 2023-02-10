// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxtjs-drupal-ce'],
  drupalCe: {
    baseURL:
      process.env.DRUPAL_BASE_URL ||
      'https://8080-drunomics-lupusdecouple-9n2kevzh642.ws-eu86.gitpod.io/ce-api',
  },
});
