<template>
  <Layout>
<div class="hero is-white">
  <div class="hero-body has-text-centered">
    <h1 class="title is-uppercase">Blog</h1>
    <h1 class="subtitle">collection of {{ $page.posts.totalCount }} 🔖 awesome posts</h1>
</div>
</div>
<div class="section container">
      <div class="container">
        <div class="columns is-multiline is-max-desktop">
          <div class="column">
          </div>
          <div class="column is-two-thirds">
              <PostCard	v-for="edge in $page.posts.edges" :key="edge.node.id"	:post="edge.node"/>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </div>
    <Newsletter />
  </Layout>
</template>
<page-query>
query {
  posts : allPost (filter: { date: { gte: "2020" }}){
    totalCount
    edges {
        node {
            title
            path
            date (format: "MMMM D, YYYY")
            timeToRead
            cover_image(width: 770, height: 380, blur: 10)
            description
            content
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
        }
  	}
  }
}
</page-query>
<script>
import PostCard from '@/components/PostCardMain'
import Newsletter from "@/components/Newsletter.vue";
export default {
  components: { PostCard, Newsletter },
  metaInfo () {
    return this.$seo({
      title: "Pritesh's blog",
      description: 'Software Testing, QA, Automation, Security, Performance, Accessibility, Devops, TDD',
      keywords: 'Software Testing, QA, Automation, Security, Performance, Accessibility, Devops, TDD',
      openGraph: {
        title: 'Browse Categories',
        type: 'website'
      },
      twitter: {
        title: 'Browse Categories',
        type: 'summary'
      },
      link: [],   // any links
      script: []  // any scripts
    })
  }
};
</script>
