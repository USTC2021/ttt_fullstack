// component/nav-bar/nar-bar.js
Component({
    /**
     * 组件的属性列表 父组件
     */
    properties: {
        title: {
            type: String,
            value: ''
        },
        statusBarColor: {
            type: String,
            value: '#fff'
        },
        navBarColor: {
            type: String,
            value: '#fff'
        },
        titleColor: {
            type: String,
            value: '#000'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        topHeight: 0,
        statusBarStyle: '',
        navBarStyle: ''
    },

    // 小程序组件的生命周期
    lifetimes: {
        attached: function() {
            // 在组件实例进入页面节点树时执行  properties中数据取法与data一样
            let navBarStyle = `background-color: ${this.data.navBarColor}; height: ${wx.db.navBarHeight}px; color: ${this.data.titleColor}`
            let statusBarStyle = `background-color: ${this.data.statusBarColor}; height: ${wx.db.statusBarHeight}px;`
            let topHeight = wx.db.statusBarHeight + wx.db.navBarHeight
            
            this.setData({
                navBarStyle,
                statusBarStyle,
                topHeight
            })
        },
        detached: function() {
          // 在组件实例被从页面节点树移除时执行
        },
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
