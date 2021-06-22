const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: app.globalData.pmhImgurl, //全局img路径
    list: [], //分类列表
    rightList: {}, //分类右边列表
    i: 0, //分类点击的分类索引
    cateItems: [{
      cate_id: 1,
      cate_name: "教材",
      ishaveChild: true,
      children: [{
          child_id: 1,
          name: '考研',
          image: "./img/classify1.jpg"
        },
        {
          child_id: 2,
          name: '外语学习',
          image: "./img/classify2.jpg"
        },
        {
          child_id: 3,
          name: '大学教材',
          image: "./img/classify3.jpg"
        },
        {
          child_id: 4,
          name: '资格考试',
          image: "./img/classify4.jpg"
        },
        {
          child_id: 5,
          name: '中小学教辅',
          image: "./img/classify5.jpg"
        }
      ]
    },
    {
      cate_id: 2,
      cate_name: "文学",
      ishaveChild: true,
      children: [{
          child_id: 1,
          name: '中国文学',
          image: "./img/wx1.jpg"
        },
        {
          child_id: 2,
          name: '外国文学',
          image: "./img/wx2.jpg"
        },
        {
          child_id: 3,
          name: '诗歌',
          image: "./img/wx3.jpg"
        },
        {
          child_id: 4,
          name: '推理',
          image: "./img/wx4.jpg"
        }
      ]
    },
    {
      cate_id: 3,
      cate_name: "艺术",
      ishaveChild: true,
      children: [{
          child_id: 1,
          name: '摄影',
          image: "./img/ys1.jpg"
        },
        {
          child_id: 2,
          name: '设计',
          image: "./img/ys2.jpg"
        },
        {
          child_id: 3,
          name: '绘画',
          image: "./img/ys3.jpg"
        },
        {
          child_id: 4,
          name: '建筑',
          image: "./img/ys4.jpg"
        }
      ]
    },
    {
      cate_id: 4,
      cate_name: "杂志",
      ishaveChild: true,
      children: [{
          child_id: 1,
          name: '中国国家地理',
          image: "./img/zz1.jpg"
        },
        {
          child_id: 2,
          name: '博物',
          image: "./img/zz2.jpg"
        },
        {
          child_id: 3,
          name: '读库',
          image: "./img/zz3.jpg"
        },
        {
          child_id: 4,
          name: '知日',
          image: "./img/zz4.jpg"
        }
      ]
    }
    ],
    curNav: 1,
    curIndex: 0
  },
  switchRightTab: function(e) {
    // 获取item项的id，和数组的下标值
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  // 点击分类左侧，渲染右侧
  clickTab(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      i: index,
      rightList: this.data.list[index]
    })
  },
  // 键盘搜索功能
  shop_search_function: function (e) {
    var value = e.detail.value;
    console.log("------->" + value);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request('classify/selectClassify').then(data => {
      console.log(data);
      this.setData({
        list: data,
        rightList: data[0]
      })
    })
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