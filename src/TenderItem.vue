<template id="task-item">
  <li v-if="isAdded" class="tender__item">
      {{ task.title }}
  </li>
</template>


<script>
export default {
  name: 'tende-item',
  props: ['task'],
  computed: {
    isAdded: function isAdded() {
      return this.task.completed
    }
  }
}
</script>

<style>
.tender__item{
    padding: .8em;
}
</style>
