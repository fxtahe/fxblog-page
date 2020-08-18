<template>
  <div class="tag-container">
    <ul class="tags">
      <li v-for="(tag, index) in tags" :key="index">
        <router-link :class="`tag`" :to="`/tag/${tag.tagName}/${tag.id}`">
          {{
          tag.tagName
          }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.tags {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  a {
    &:hover {
      background: transparent;
      border: 1px solid var(--tag-color);
      color: var(--tag-color);
    }
  }
}

.tag {
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 12px;
  //color: #a0a8bd;
  color: var(--theme-active);
  border: 1px solid transparent;
  background: rgba(160, 168, 189, 0.2);
  border-radius: 15px;
  padding: 3px 15px;
  font-weight: normal;
  display: block;
  &:hover {
    background: transparent;
    border: 1px solid var(--tag-color);
    color: var(--tag-color);
  }
}
</style>
