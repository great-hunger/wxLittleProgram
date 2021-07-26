// pages/map/map.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        location1:"",
        location:"",
        name:"",
        sex:"",
        number:"",
        address:"",
        isDefault:true,
        isShow:false
    },
    getLocation:function(){
        var location1=""
        wx.chooseAddress({
            success: (result) => {
                location1=result.cityName+result.countyName+result.detailInfo
                this.setData({
                    location1
                })
            },
        })
        // wx.getSetting({
        //   success:(result)=>{
        //       console.log(result);
        //   }
        // })
    },
    onShow:function(){
        var pages=getCurrentPages()
        var currpage=pages[pages.length-1]
           this.setData({
               isShow:true
           })
    }
 })

