import {request} from "./request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, service) {
    this.title = itemInfo.title;//标题
    this.desc = itemInfo.desc;//标题
    this.newPrice = itemInfo.price;//现价
    this.oldPrice = itemInfo.oldPrice;//原价
    this.discount = itemInfo.discountDesc;//优惠价
    this.columns = columns;//销量、收藏、默认快递
    this.service = service;//对勾图标
    this.nowPrice = itemInfo.highNowPrice;//
  }
}

export class Shops {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;//logo
    this.name = shopInfo.name;//店铺名称
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;

  }
}

export class GoodsPrams {
  constructor(info,rule) {
    this.image=info.images?info.images[0]:'';
    this.infos=info.set;
    this.sizes=rule.tables;
  }

}
