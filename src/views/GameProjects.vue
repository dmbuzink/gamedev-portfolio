<template>
  <div>
    <h1>Game projects</h1>

    <div style="margin-bottom: 30px;">
      These are game projects (including game prototypes) that I have created or was a big contributor in creating.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
