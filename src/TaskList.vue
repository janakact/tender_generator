
<template id="task-list">
  <section class="tasks">
    <h3>
      Electronic Equipments
      <transition name="fade">
        <small v-if="incomplete">({{ incomplete }})</small>
      </transition>

    </h3>
    <div class="tasks__new input-group">
      <input type="text" class="input-group-field" v-model="newTask" @keyup.enter="addTask" placeholder="New task">
      <span class="input-group-button">
        <button @click="addTask" class="button">
          <i class="fa fa-plus"></i> Add
        </button>
      </span>
    </div>

    <div class="tasks__clear button-group pull-right">
      <button class="button warning small" @click="clearAll">
        <i class="fa fa-check"></i> Clear All
      </button>
    </div>

    <transition-group name="fade" tag="ul" class="tasks__list no-bullet">
      <task-item v-for="(task, index) in tasks" @remove="removeTask(index)" @complete="completeTask(task)" :task="task" :key="index"></task-item>
    </transition-group>
  </section>
</template>


<script>
import TaskItem from './TaskItem.vue'
export default {
  name: 'task-list',
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
  components: { TaskItem },
  computed: {
    incomplete: function incomplete() {
      return this.tasks.filter(this.inProgress).length
    }
  },
  methods: {
    addTask: function addTask() {
      if (this.newTask) {
        this.tasks.push({
          title: this.newTask,
          completed: false
        })
        this.newTask = ''
      }
    },
    completeTask: function completeTask(task) {
      task.completed = !task.completed
    },
    removeTask: function removeTask(index) {
      this.tasks.splice(index, 1)
    },
    clearCompleted: function clearCompleted() {
      this.tasks = this.tasks.filter(this.inProgress)
    },
    clearAll: function clearAll() {
      for (let t of this.tasks) {
        t.completed = false
      }
    },
    inProgress: function inProgress(task) {
      return !this.isCompleted(task)
    },
    isCompleted: function isCompleted(task) {
      return task.completed
    }
  }
}
</script>

<style>

</style>
