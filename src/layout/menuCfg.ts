export interface ImenuCfgItem {
    title:string,
    path:string,
    children?:ImenuCfgItem[]
}


const menuCfg:ImenuCfgItem[] = [
    {
        title:'ui',
        path:'/ui',
        children:[
            {
                title:'按钮',
                path:'/ui/button'
            },{
                title:'弹框',
                path:'/ui/Modal'
            },{
                title:'loading',
                path:'/ui/loading'
            },{
                title:'通知',
                path:'/ui/notifycation'
            }
        ]
    },    {
        title:'表单',
        path:'/form',
        children:[
            {
                title:'表单登录',
                path:'/form/login'
            }
        ]
    },    {
        title:'表格',
        path:'/table'
    }
]

export default menuCfg