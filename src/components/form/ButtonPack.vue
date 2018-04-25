<!-- ButtonPack.vue
// button组件
import ButtonPack from '@/components/form/ButtonPack'
 -->
<template>
  <button type="button" class="button-pack">
    <i class="high-light-cube"></i>
    <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  name: 'buttonpack',
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {
  }
}
</script>
<style scoped>
.button-pack {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 0;
  background-color: rgb(28, 21, 15);
  box-shadow: 1px 1px 3px #ddd;
  color: rgb(206, 197, 190);
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: .2s;
}
.button-pack:hover .high-light-cube{
  opacity: 1;
  width: 20px;
}
.high-light-cube {
  opacity: 0;
  display: block;
  width: 0; height: 100%;
  float: left;
  background: rgb(234, 211, 83);
  transition: .3s;
}
</style>