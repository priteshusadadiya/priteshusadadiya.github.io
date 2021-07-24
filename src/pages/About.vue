<template>
  <Layout>
    <section class="section">
      <div class="container is-medium">
        <article class="post pu-post">
          <h1 class="is-size-2 has-text-weight-bold mb-5">About</h1>
        <h2 class="subtitle has-text-weight-bold mb-2">Pritesh Usadadiya</h2>
        <div class="columns">
        <div class="column is-one-third">
        <figure class="image is-square">
          <img class="" src="@/assets/images/pritesh-gravatar.jpg" alt="Hi, I'm Pritesh">
        </figure>
        </div>
        <div class="column">
          <div class="content">
          <p>Hi, I'm Pritesh. I'm a software tester and an occasional Coder 💻.</p>
          <p>I’ve been testing software professionally for around 6+ years.</p>
          <p>I mainly work with stuff related to Performance Engineering 🕙 . I also enjoy doing Web Development.</p>
          <p> I have a Master's degree in Computer Applications. I am a QE Engineer and occasional coder. During my student life , I used to teach Programming in my home town in Gujarat - IN</p>
          </div>
        </div>
      </div>
        <div class="content">
        <p>I'm currently working at as a Tech Lead at <a href="http://www.infostretch.com/" target="_blank">Infostretch</a> mainly focused on Quality Engineering services where i build Performance Test scripts and test Performance of application on various environments with use of tools like Jmeter , Taurus , Gatling etc</p>
        <p>I create Test scripts and test Performance of software on various environments and conditions with use of tools like Jmeter , Taurus , Gatling etc</p>
        <p>I also customize Automation Tests with various frameworks like Selenium, Cucumber , TestNg , and Junit based on project requirements.</p>
        <p>I can help you with Performance Testing , Database and Api Optimization , designing Test Strategies, Test Metrics and Processes and Designing Work-flow frameworks.
        </p>
        <h1 class="title is-size-5">Domains that i have worked with :</h1>
        <p>Telecom, Health Care, E-commerce, Airline , CRM & Travel Management Other than that , I love writing code in my spare time, Mostly in PHP or in Python , with help of frameworks like Django , flask (My Favourite)</p>
        <h1 class="title">About This Site</h1>
        <p>This site is made with <a href="https://gridsome.org/" target="_blank">Gridsome</a>, <a href="https://buefy.org/" target="_blank">Buefy</a> and <a href="https://bulma.io" target="_blank">Bulma CSS</a>. and <a href="/" target="_blank">Home Page Layout</a> is inspired by <a href="https://www.coryzue.com" target="_blank">Cory Zue</a>'s personal website.</p>
        <p>I created this site so that I could document the things that I learn or enjoy working with and help you avoid the mistakes that I make. If you enjoy my content please share it with your friends.</p>
        <h1 class="title">Get in Touch</h1>
        <p>Want to talk? Feel free to DM me on Twitter -<a href="https://twitter.com/priteshusdadiya" target="_blank">@priteshusadadiya</a> or email <b> priteshonweb at gmail dot com </b></p>
        </div>
        </article>
      </div>
    </section>
    <Newsletter />
  </Layout>
</template>

<script>
import Newsletter from "@/components/Newsletter.vue";
export default {
  components: { Newsletter },
  metaInfo() {
    return this.$seo({
      title: "About", // Uses the titleTemplate in Gridsome config
      description: "Pritesh Usadadiya is a software tester, occasional coder and blogger. and launching projects on the side.",
      keywords: "About",
      openGraph: {
        title: "About",
        type: "website",
        image: '/images/pritesh-gravatar.jpg'
      },
      twitter: {
        title: "About",
        type: "summary",
        image: '/images/pritesh-gravatar.jpg'
      },
      link: [], // any links
      script: [], // any scripts
    });
  }
};
</script>