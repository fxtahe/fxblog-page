<template>
  <header
    class="detail-header"
    :style="{backgroundImage: `url(${cover})`}"
    :class="cover ? 'is-cover' : ''"
  >
    <div class="detail-content">
      <slot name="header"></slot>
      <h1 class="title">{{name}}</h1>
      <slot name="info"></slot>
      <p v-if="description" class="desc">{{description}}</p>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    cover: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
</style>