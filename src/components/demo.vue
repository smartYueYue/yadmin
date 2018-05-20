<template>
  <section>
    <div class="test-button">
      <el-button @click="handleChangeName">傻越越</el-button>
      <p>{{name}}</p>
    </div>
    <div class="test-color"></div>
  </section>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch, Provide } from 'vue-property-decorator'
@Component
export default class Demo extends Vue {
  private name: String = '攀攀'
  private handleChangeName(): void {
    this.name = '越越'
  }
}
</script>


<style lang="sass" scoped>
  .test-color
    width: 200px
    height: 200px
    background: #646c7d
</style>
