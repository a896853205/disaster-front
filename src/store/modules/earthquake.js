// 模拟地震变量储存
export default {
  state: {
    // 第一步之后各灾区需要的物资
    needArr: [],
    // 第二步之后各灾区对应物资点所需要的物资
    areaNeedResult: [],
    // 第二步缺少的物资
    unPut: [],
    // 第三步装载的具体细节
    upLoadArr: []
  },
  mutations: {
    /**
     * 第一步之后各灾区需要的物资
     */
    setNeedArr (state, needArr) {
      state.needArr = needArr
    },
    /**
     * 第二步之后各灾区对应物资点所需要的物资
     */
    setAreaNeedResult (state, areaNeedResult) {
      state.areaNeedResult = areaNeedResult
    },
    /**
     * 第二步缺少的物资
     */
    setUnPut (state, unPut) {
      state.unPut = unPut
    },
    /**
     * 第三步装载的具体细节
     */
    setUpLoadArr (state, upLoadArr) {
      state.upLoadArr = upLoadArr
    }
  },
  actions: {}
}
