<template>
  <Layout>
    <div class="hero is-project">
      <div class="hero-body has-text-centered">
        <h1 class="title has-text-white">My Projects</h1>
        <h2 class="subtitle has-text-white">
          Below you’ll find a selection of my favourite projects.
        </h2>
      </div>
    </div>
    <div class="section">
        <div class="is-max-desktop">
            <div class="columns is-multiline">
                <div class="column is-4" v-for="(project, index) in ProjectsList" :key="index">
                  <div class="card card-equal-height project-card">
                   <a style="text-decoration: none;" :href="project.web" target="_blank">
                    <div class="card-content">
                     <div class="media">
                        <div class="media-left">
                          <figure class="image is-48x48">
                            <g-image v-if="project.image != 'NoImage'" class="is-rounded" :src="project.image" :alt=project.name />
                            <g-image v-else class="is-rounded" src="@/assets/images/no_logo.png" :alt=project.name />
                          </figure>
                        </div>
                        <div class="media-content">
                          <p class="title is-5 is-size-6-mobile">{{project.name}}</p>
                          <p class="subtitle is-7">{{project.tagline}}</p>
                        </div>
                     
                      </div>
                      <div class="content">
                        <p class="subtitle is-6">{{project.description}}</p>
                      </div>
                    </div>
                  </a>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <Newsletter />
  </Layout>
</template>

<script>
import Newsletter from "@/components/Newsletter.vue";
import ProjectsList from "@/resources/projects.json";

export default {
  components: { Newsletter, ProjectsList },
  data() {
    return {
      ProjectsList
    }
  },
  metaInfo() {
    return this.$seo({
      title: "Projects", // Uses the titleTemplate in Gridsome config
      description: "side projects",
      keywords: "Projects",
      openGraph: {
        title: "Projects",
        type: "website",
      },
      twitter: {
        title: "Projects",
        type: "summary",
      },
      link: [], // any links
      script: [], // any scripts
    });
  }
};
</script>