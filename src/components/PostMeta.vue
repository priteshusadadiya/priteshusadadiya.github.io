<template>
   <div class="content">
      <small>Posted</small> {{ post.date }} •
      <template v-if="post.timeToRead">
        ☕️ {{ post.timeToRead }} min read.
      </template>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>