// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 收藏数据
    collect: [],
    tabList: [
      {
        id: 0,
        name: "商品收藏",
        isActive: true,
      },
      {
        id: 1,
        name: "品牌收藏",
        isActive: false,
      },
      {
        id: 2,
        name: "店铺收藏",
        isActive: false,
      },
      {
        id: 3,
        name: "浏览足迹",
        isActive: false,
      }
    ]
  },
  onShow(){
    const collect = wx.getStorageSync("collect")||[];
    this.setData({
      collect
    })
  },
  handleItemChange(e){
    const {index} = e.detail;
     /**
       * 严谨做法：重新拷贝一份数组，再对这个数组的备份进行处理
       * let tabList = JSON.parse(JSON.stringify(this.data.tabList));
       * 一般做法：let {tabList} = this.data;
       */
      let tabList = JSON.parse(JSON.stringify(this.data.tabList));
      tabList.forEach((v, i) => {
        i === index ? v.isActive = true : v.isActive = false;
      })
      this.setData({
        tabList
      })
  }
 
})
