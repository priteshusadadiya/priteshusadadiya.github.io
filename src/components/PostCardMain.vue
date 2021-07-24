<template>
  <div class="card mb-3">
    <div class="card-content">
      <g-link :to="post.path" class="is-size-5 has-text-weight-bold">
        {{ post.title }}
      </g-link>
      <PostMeta :post="post" />  
      <div class="content" v-html="post.description" />
            Posted in
        <g-link v-for="categoryitem in post.category" :key="categoryitem.id" :to="categoryitem.path" class="">
        {{ categoryitem.title }}
        </g-link>
    </div>
  </div>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import PostCategory from "~/components/PostCategory";
export default {
  components: {
    PostMeta,
    PostTags,
    PostCategory,
  },
  props: ["post"],
};
</script>