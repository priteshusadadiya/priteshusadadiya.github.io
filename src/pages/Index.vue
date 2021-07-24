<template>
  <Layout>
    <HomePage/>
</Layout>
</template>
<script>
import HomePage from '@/components/HomePage.vue'
export default {
  components: {
    HomePage
  },
  metaInfo () {
    return this.$seo({
      title: 'Home', // Uses the titleTemplate in Gridsome config
      description: "Pritesh Usadadiya is a software tester, occasional coder and blogger. and launching projects on the side.",
      keywords: 'Software Testing, QA, Automation, Security, Performance, Accessibility, Devops, TDD',
      openGraph: {
        title: 'Pritesh Usadadiya',
        type: 'website',
        image: '/images/pritesh-gravatar.jpg'
      },
      twitter: {
        title: 'Pritesh Usadadiya',
        type: 'summary',
        image: '/images/pritesh-gravatar.jpg'
      },
      link: [],   // any links
      script: []  // any scripts
    })
  }
};
</script>
