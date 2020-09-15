<template>
  <div class="container">
    <div class="row">
      <input
        type="checkbox"
        :checked="theme === 'dark'"
        id="box"
        @click="switchTheme"
      />
      <label for="box" class="theme"></label>
    </div>
  </div>
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
.row {
  width: 100%;
  display: block;
  line-height: 60px;
  text-align: center;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + label {
  display: inline-block;
  width: 40px;
  height: 20px;
  position: relative;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  margin: 0px 20px;
  box-sizing: border-box;
}
input[type="checkbox"] + label:after {
  content: "";
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 20px;
  height: 20px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  cursor: pointer;
}
#box:checked + label.theme {
  background: #f53b57;
}

#box:checked + label.theme:after {
  background: var(--app-background-color);
}

#box:checked + label:after {
  left: calc(100% - 18px);
}
#box + label {
  background: #75bfd7;
}

#box + label:after {
  background: #fff;
  width: 16px;
  height: 16px;
  top: 2px;
  left: 2px;
}
</style>
