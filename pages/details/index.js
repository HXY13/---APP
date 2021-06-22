Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        goods_id: 1,
        goods_title:'考研英语词汇',
        goods_img:'../classify/img/classify1.jpg',
        goods_xiaoliang:'26',
        goods_price:'6'
      },{
        goods_id: 2,
        goods_title:'大学英语综合教程2',
        goods_img:'../classify/img/classify2.jpg',
        goods_xiaoliang:'64',
        goods_price:'7'
      }, {
        goods_id: 3,
        goods_title: '外语学习与导论',
        goods_img: '../classify/img/classify3.jpg',
        goods_xiaoliang: '35',
        goods_price: '8'
      }, {
        goods_id: 4,
        goods_title: '中学教资',
        goods_img: '../classify/img/classify4.jpg',
        goods_xiaoliang: '50',
        goods_price: '20'
      }, {
        goods_id: 5,
        goods_title: '高中知识清单生物',
        goods_img: '../classify/img/classify5.jpg',
        goods_xiaoliang: '7',
        goods_price: '5'
      }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let goods_id = options.goods_id;
    this.setData({
      goods_id: this.data.list[goods_id],
      goods_id:goods_id
    })
  },
  
  // 收藏
  // addLike() {
  //   this.setData({
  //     isLike: !this.data.isLike
  //   });
  // },
  // 跳到购物车
  toCar() {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  // 立即购买
  immeBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  }

})