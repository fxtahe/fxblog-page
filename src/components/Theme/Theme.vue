<template>
  <i
    class="icon"
    :class="theme === 'light' ? 'icon-dark' : 'icon-light'"
    style="font-size: 30px;"
    @click="switchTheme"
  ></i>
</template>
<script>
import { mapActions } from "vuex";
export default {
  computed: {
    theme() {
      return this.$store.state.app.theme;
    }
  },

  methods: {
    switchTheme() {
      if (this.theme === "light") {
        this.setTheme("dark");
      } else {
        this.setTheme("light");
      }
    },

    ...mapActions({
      setTheme: "app/setTheme"
    })
  }
};
</script>
<style lang="scss" scoped>
.icon {
  cursor: pointer;
  transition: $theme-transition;
}
</style>
