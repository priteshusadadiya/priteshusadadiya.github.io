<template>
  <Layout>
<div class="hero is-grey">
  <div class="hero-body has-text-centered">
    <h1 class="subtitle is-size-3 is-size-4-mobile">Tag : {{ $page.tag.title }}</h1>
</div>
</div>
<div class="section container">
      <div class="container">
        <div class="columns is-multiline is-max-desktop">
          <div class="column">
          </div>
          <div class="column is-two-thirds">
              <PostCard	v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id"	:post="edge.node"/>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </div>
  </Layout>
</template>
<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
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
import PostCard from '@/components/PostCard'

export default {
  components: { PostCard },
  metaInfo () {
    return this.$seo({
      title: this.$page.tag.title,
      description: this.$page.tag.title,
      keywords: 'Software Testing, QA, Automation, Security, Performance, Accessibility, Devops, TDD',
      openGraph: {
        title: 'Pritesh Usadadiya',
        type: 'website'
      },
      twitter: {
        title: 'Pritesh Usadadiya',
        type: 'summary'
      },
      link: [],   // any links
      script: []  // any scripts
    })
  }
};
</script>
