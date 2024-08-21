<template>
  <div class="todo-list">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="Consistency" :name="task.id" v-for="(task, index) in tasks" :key="task.id" >
        <template #title>
          <div class="task-header">
            <img class="expand" :class="task.expanded ? 'rotate' : ''"  src="../assets/images/expand.png" alt="">
            <img class="checkbox" :src="task.completed ? select : unselect" alt="" @click="changeState(index)">
            <span class="task-name">{{ task.name }}</span> 
          </div>
        </template>
        <div>
          <div v-if="task.expanded" class="task-details" :class="task.expanded ? 'task-details-display' : ''" ref="details">
            <p>{{ task.description }}</p>
            <el-date-picker v-model="task.date" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- <div v-for="(task, index) in tasks" :key="task.id" class="task">
      <div class="task-header">
        <img class="expand" :class="task.expanded ? 'rotate' : ''" @click="toggleExpand(index)" src="../assets/images/expand.png" alt="">
        <img class="checkbox" :src="task.completed ? select : unselect" alt="" @click="changeState(index)">
        <span class="task-name">{{ task.name }}</span> 
      </div>
      
      <div v-if="task.expanded" class="task-details" :class="task.expanded ? 'task-details-display' : ''" ref="details">
        <p>{{ task.description }}</p>
        <el-date-picker v-model="task.date" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElDatePicker } from 'element-plus';
import select from "../assets/images/select.png";
import unselect from "../assets/images/unselect.png";

const activeNames = ref([])
const handleChange = (val) => {
  console.log(val,activeNames.value)
  tasks.value.forEach(task => {
    task.expanded = activeNames.value.includes(task.id);
  });
  
}


const tasks = ref([
  { id: 1, name: '任务 1', description: '这是任务 1 的描述', completed: false, expanded: false, date: null },
  { id: 2, name: '任务 2', description: '这是任务 2 的描述', completed: false, expanded: false, date: null },
  { id: 3, name: '任务 3', description: '这是任务 3 的描述', completed: false, expanded: false, date: null },
  { id: 4, name: '任务 4', description: '这是任务 4 的描述', completed: false, expanded: false, date: null },
  { id: 5, name: '任务 5', description: '这是任务 5 的描述', completed: false, expanded: false, date: null },
  { id: 6, name: '任务 6', description: '这是任务 6 的描述', completed: false, expanded: false, date: null },
  // 可以添加更多任务
]);

const toggleExpand = (index) => {
  tasks.value[index].expanded = !tasks.value[index].expanded;
};

const changeState = (index) => {
  tasks.value[index].completed = !tasks.value[index].completed;
}
</script>

<style lang="scss" scoped>
.todo-list {
  max-width: 600px;
  margin: 0 auto;
}
.task {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;
}
.task-header {
  display: flex;
  align-items: center;
  
  .expand {
    width: 1rem;
    object-fit: cover;
    margin-right: .8rem;
    cursor: pointer;
    transition: transform 0.2s ease; /* 过渡效果 */
  }
  .checkbox {
    width: 2rem;
    object-fit: cover;
    cursor: pointer;
  }

}
.task-name {
  flex-grow: 1;
  margin-left: 10px;
}
.task-details {
  margin-top: 10px;
  height: 0;
  transition: height 0.5s ease; /* 过��效果 */
}

.task-details-display {
  height: 200px; /* 初始高度为0 */
  overflow: hidden; /* 隐藏��出部分 */
}

// .expand-fade-enter-active, .expand-fade-leave-active {
//   transition: max-height 0.5s ease, opacity 0.5s ease;
// }
// .expand-fade-enter, .expand-fade-leave-to {
//   max-height: 0; /* 初始高度为0 */
//   opacity: 0; /* 初始透明度为0 */
// }
// .expand-fade-enter-to, .expand-fade-leave {
//   max-height: 200px; /* 设置最大高度，确保内容可见 */
//   opacity: 1; /* 结束时透明度为1 */
// }

.task-header .expand {
  transform: rotate(0deg); /* 初始旋转角度 */
}
.task-header .expand.rotate {
  transform: rotate(90deg); /* 旋转90度 */
}
</style>