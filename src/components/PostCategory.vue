<template>
   <div class="tags">
    <g-link v-for="categoryitem in post.category" 
    :key="categoryitem.id" 
    :to="categoryitem.path" 
    class="tag is-success">
      #{{ categoryitem.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>