<template>
  <Layout>
<div class="hero is-white">
  <div class="hero-body has-text-centered">
    <h1 class="title is-uppercase">{{ $page.category.title }}</h1>
    <h1 class="subtitle">collection of {{ $page.category.belongsTo.totalCount }} 🔖 awesome posts</h1>
</div>
</div>
<div class="section container">
      <div class="container">
        <div class="columns is-multiline is-max-desktop">
          <div class="column">
          </div>
          <div class="column is-two-thirds">
              <PostCard	v-for="edge in $page.category.belongsTo.edges" :key="edge.node.id"	:post="edge.node"/>
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
query Category ($id: ID!) {
  category (id: $id) {
    title
    belongsTo {
      totalCount
      edges {
        node {
          ...on Post {
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
  }
}
</page-query>
<script>
import PostCard from '../components/PostCard'
import Newsletter from "../components/Newsletter.vue";
export default {
  metaInfo () {
    return this.$seo({
      title: this.$page.category.title,
      description: this.$page.category.title,
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
  }  ,
  components: { PostCard,Newsletter },
};
</script>
