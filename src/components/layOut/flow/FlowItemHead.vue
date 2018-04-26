<!-- FlowItemHead.vue
flow布局的头部
'@/components/layOut/flow/FlowItemHead'
 -->
<template>
  <div class="flow-item-head">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {}
}
</script>
<style scoped>
.flow-item-head {
  height: 45px;
  border-bottom: 3px solid #ddd;
  font-weight: 600;
  padding-left: 16px;
  line-height: 45px;
  font-size: 14px;
  background: rgb(206, 197, 190);
  color: rgb(90, 81, 76)
}
</style>