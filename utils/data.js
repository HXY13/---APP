var list_jc = [
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
]
var list_wx = [
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
]
var list_ys = [
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
]
function getlist(){
  return list;
}
function getGoodsListByIndex(indexList){
  var goodsNewList=[];
  //i++   --> i=i+1; 
  for(let i=0;i<indexList.length;i++){
    var index = indexList[i].index;
    var goods=goodsList[index];
    goodsNewList.push(goods);
  }
  return goodsNewList;
}

module.exports = {
  getGoodsList: getGoodsList,
  getGoodsListByIndex: getGoodsListByIndex
}