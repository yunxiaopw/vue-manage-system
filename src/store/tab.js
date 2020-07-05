export default {
  state: {
    isCollapse: false,
    currentMenu: null,
    menu: [],
    tabsList: [
      {
        path: "/",
        label: "首页",
        name: "home",
        icon: "home"
      },
    ]
  },
  mutations: {
    selectMenu (state, val) {
      if (val.name !== 'home') {
        state.currentMenu = val
        // 判断有没有当前标签
        let result = state.tabsList.findIndex(item => item.name === val.name)
        result === -1 ? state.tabsList.push(val) : ''
      } else {
        state.currentMenu = null
      }
    },
    closeTab (state, val) {
      let result = state.tabsList.findIndex(item => item.name === val.name)
      state.tabsList.splice(result, 1)
    },
    collapseMenu (state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {

  }
};
