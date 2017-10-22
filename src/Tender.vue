
<template id="task-list">
  <section class="tasks">
    <div class="title">
      <h1>
        BANK OF CEYLON
      </h1>
      <h3>
        INVITATION FOR BIDS
      </h3>
    </div>



    <div class="task-item-list">
      <ol>
        <tender-item v-for="(task, index) in tasks" @remove="removeTask(index)" @complete="completeTask(task)" :task="task" :key="index"></tender-item>
        <!-- </transition-group -->
      </ol>
    </div>

    <div class="footer">
      <table>
        <tr>
          <td style="text-align:right; padding:1em">
            <img src="static/img/boc_logo.png" class="logo" />
          </td>
          <td style=" padding:1em">
            Chief Manager, <br/>
            Name of the Department, <br/>
            Address Line 1, <br/>
            Address Line 2,<br/>
            Street, <br/>
            City.
          </td>
        </tr>
      </table>

    </div>
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
.tasks {
  border: solid gray;
}

.title {
  background-color: gray;
  color: white;
  padding: 1em;
  text-align: center;
}
.footer{
  font-size: 12px;
  border: solid gray;
}

h1 {
  padding: 1px;
}

.logo {
  height: 100px;
  margin-left: 0px;
}

.task-item-list {
  text-align: justify;
}
</style>
