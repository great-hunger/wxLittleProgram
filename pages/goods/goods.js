// pages/goods/goods.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        msg:"hello",
        num:10000,
        person:{
            age:74,
            hcsiaus:1566
        },
        persons:[
            {
                age:74,
                hcsiaus:1566 
            },
            {
                age:73,
                hcsiaus:1546 
            },
            {
                age:79,
                hcsiaus:18766 
            }
        ],
        isChecked:true,
        list:[
            {
                id:0,
                name:"jdchj"
            },
            {
                id:2,
                name:"cx zhj"
            }
        ],
        isTrue:true,
        num1:0,
        gender:"",
        tabs:[
            {
                id:0,
                name:"首页",
                isActive:true
            },
            {
                id:1,
                name:"原创",
                isActive:false
            },
            {
                id:2,
                name:"分类",
                isActive:false
            }
        ],
        list1:[
            {
                id:1,
                name:"a",
                value:"A"
            },
            {
                id:2,
                name:"b",
                value:"B"
            },
            {
                id:3,
                name:"c",
                value:"C"
            }
        ],
        checkList:[]
    },
    handleradio(e){
        let gender=e.detail.value;
        //直接赋值
        this.setData({
            gender
        })
    },
    handlecheckbox(e){
        let checkList=e.detail.value;
        this.setData({
            checkList
        })
        // console.log(e)
    },
    handleInput(e){
        this.setData({
            num1:e.detail.value
        })
    },
    handleTap(e){
        const operation=e.currentTarget.dataset.operation;
        this.setData({
            num1:this.data.num1+operation
        })
    },
    handleItemChange(e){
       const {index}=e.detail;
    //    console.log(index);
       let {tabs}=this.data;
        tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
         this.setData({
            tabs
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})