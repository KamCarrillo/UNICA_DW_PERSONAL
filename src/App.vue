<template>
  <div>
    <Navigation />
    <router-view />
  </div>

</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Navigation,
  },

  computed: {
    encodedUrl() {
      return encodeURIComponent(window.location.href);
    },
    encodedTitle() {
      return encodeURIComponent(this.$route.meta.title);
    },
    encodedDescription() {
      return encodeURIComponent(this.$route.meta.description);
    },
  },
};
</script>

