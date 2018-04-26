<!-- FlowItem.vue
// flow布局每块
'@/components/layOut/flow/FlowItem'
 -->
<template>
  <div :class="transparent ? 'background-transparent': 'background-white'" class="flow-item">
    <slot>
      // FlowItem.vue
    </slot>
  </div>
</template>

<script>
export default {
  props: ['transparent'],
  name: 'flowItem',
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
.flow-item {
  width: 100%;
  margin: 8px 0;
}
.background-transparent {
  background: transparent;
}
.background-white {
  background: rgb(206, 197, 190);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
}
</style>