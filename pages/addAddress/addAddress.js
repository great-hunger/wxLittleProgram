// pages/addAddress/addAddress.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name:"",
        sex:"",
        number:"",
        location:"",
        address:"",
        isDefault:true,
        tips:''
    },
    addAddr(e){
        var location=""
        wx.chooseAddress({
            success: (result) => {
                location=result.cityName+result.countyName+result.detailInfo
                this.setData({
                    location
                 })
            }
         })
    },
    formSubmit(e){
        // console.log(e.detail.value);
        if(e.detail.value.address==""|e.detail.value.chooseDefault==""|e.detail.value.location==""|e.detail.value.name==""|e.detail.value.number==""|e.detail.value.sex==""){
            let tips="填写的内容不得为空！";
            this.setData({
                tips
            })
        }else{ 
            let name=e.detail.value.name;
             let   sex=e.detail.value.sex;
              let  number=e.detail.value.number;
             let   location=e.detail.value.location;
             let   address=e.detail.value.address;
             let   isDefault=e.detail.value.chooseDefault;
             let tips="";
            this.setData({
                name,
                sex,
                number,
                location,
                address,
                isDefault,
                tips
            })
            wx.showToast({
              title: '填写成功',
              icon:'success'
            })
            let pages=getCurrentPages()
            let prevPage=pages[pages.length-2]
            prevPage.setData({
                name,
                sex,
                number,
                location,
                address,
                isDefault
            })
            wx.navigateBack({
              delta: 1
            })
        }
    }
})