
<template id="task-list">
  <section class="tasks">
    <h1>
      Electronic Equipments

    </h1>
      <tender-item v-for="(task, index) in tasks" @remove="removeTask(index)" @complete="completeTask(task)" :task="task" :key="index"></tender-item>
    <!-- </transition-group -->
  </section>
</template>


<script>
import TenderItem from './TenderItem.vue'
export default {
  name: 'tender',
  props: {
    tasks: {
      default: []
    }
  },
  data: function data() {
    return {
      newTask: ''
    }
  },
  components: { TenderItem },
  computed: {
    incomplete: function incomplete() {
      return this.tasks.filter(this.inProgress).length
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
