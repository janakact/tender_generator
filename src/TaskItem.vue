<template id="task-item">
  <li class="tasks__item">
    <button :class="className" @click.self="$emit('complete')">
      {{ task.title }}
    </button>
    <button class="tasks__item__remove button alert pull-right" @click="$emit('remove')">
      x
    </button>
  </li>
</template>


<script>
export default {
  name: 'task-item',
  props: ['task'],
  computed: {
    className: function className() {
      var classes = ['tasks__item__toggle']
      if (this.task.completed) {
        classes.push('tasks__item__toggle--completed')
      }
      return classes.join(' ')
    }
  }
}
</script>

<style>

</style>
