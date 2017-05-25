<template>
  <div class="hello">
    <table class="table">
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Description</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects">
          <td>{{project.name}}</td>
          <td>{{project.description}}</td>
          <td>{{project.language}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'hello',
  mounted: function() {
    this.$store.dispatch('loadProjectList')
  },
  computed: {
    projects: function() {
      return this.$store.getters.projects
    }
  },
  data () {
    return {
      msg: 'Welcome to Your List of Projects'
    }
  }
}
</script>
