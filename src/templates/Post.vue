<template>
  <Layout>
    <section class="section">
      <div class="container is-medium">
        <article class="post pu-post">
          <header>
            <h1 class="title is-2" itemprop="name headline">
              {{ $page.post.title }}
            </h1>
          </header>
          <PostMeta class="subtitle is-size-6" :post="$page.post" />
          <div class="pu-post-body content" itemprop="articleBody">
            <figure v-if="$page.post.cover_image" class="image is-16by9">
              <g-image alt="Cover image" :src="$page.post.cover_image" />
            </figure>
            <div v-html="$page.post.content" />
            <footer>
              <PostTags :post="$page.post" class="mt-5" />
            </footer>
          </div>
        </article>
      </div>
    </section>
    <div class="post-comments">
        <Newsletter />
      </div>
  </Layout>
</template>
<page-query>
query Post($id: ID!) {
  post: post(id: $id) {
    title
    path
    date(format: "D. MMMM YYYY")
    timeToRead
    tags {
      id,
      path,
      title
    }
    category {
      id,
      path,
      title
    }
    description
    content
    cover_image(width: 860, blur: 10)
  }
}
</page-query>
<script>
import Newsletter from "../components/Newsletter.vue";
import PostMeta from "~/components/PostMeta.vue";
import PostTags from "~/components/PostTags.vue";
export default {
  components: {
    PostMeta,
    PostTags,
    Newsletter,
  },
  metaInfo() {
    return this.$seo({
      title: this.$page.post.title,
      description: this.$page.post.description,
      keywords: 'Software Testing, QA, Automation, Security, Performance, Accessibility, Devops, TDD',
      openGraph: {
        title: this.$page.post.title,
        description: this.$page.post.description,
        type: 'Article',
        image: this.$page.post.cover_image
      },
      twitter: {
        title: this.$page.post.title,
        description: this.$page.post.description,
        type: 'Article',
        image: this.$page.post.cover_image
      },
      link: [],   // any links
      script: []  // any scripts
    });
  },
};
</script>