<!-- HomeRescueGoodsAdd.vue
物资点物资增加组件
'@/components/homeChild/rescue/rescueDetails/rescueGoods/HomeRescueGoodsAdd.vue' -->
<template>
  <div>
    <el-select class="mar-bom-small" v-model="addRescueGoods.id" placeholder="请选择">
      <el-option
        v-for="item in addRescueGoodsDictionariy"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <InputPack @getValue="getRescueGoods" class="mar-bom-small" placeholder="初始数量"></InputPack>
    <ButtonPack @click.native="save">
      保存
    </ButtonPack>
  </div>
</template>

<script>
// input组件
import InputPack from '@/components/form/InputPack'
// button组件
import ButtonPack from '@/components/form/ButtonPack'
export default {
  props: ['addRescueGoodsDictionariy'],
  data () {
    return {
      addRescueGoods: {
        id: '',
        amount: ''
      }
    }
  },
  components: {
    InputPack,
    ButtonPack
  },
  computed: {},
  methods: {
    getRescueGoods (value) {
      this.addRescueGoods.amount = value
    },
    save () {
      this.$http.post('/home/addRescueGoods', {goodsInfo: this.addRescueGoods, rescueId: this.$route.params.id})
      .then(res => {
        this.$notify({
          title: '增加营救点物资',
          message: '成功',
          duration: 1000
        })
        // 初始化选择栏
        this.addRescueGoods = {
          id: '',
          amount: ''
        }
        this.$emit('add-success')
      })
    }
  }
}
</script>
<style scoped>
</style>