export default {
    namespaced: true,
    //准备actions对象——响应组件中用户的动作
    actions : {},
    //准备mutations对象——修改state中的数据
    mutations : {
        changeAside(state, value){
            state.isCollapse = !state.isCollapse
        }
    },
    //准备state对象——保存具体的数据
    state : {   
        //控制菜单状态为展开还是收起 
        isCollapse: false,
    }
}