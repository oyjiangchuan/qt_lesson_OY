const { SearchShopById, CreateShops } = require('./data') // 模型层

module.exports = {
  findById: async (ctx) => {
    let id = ctx.params.id // 拿到路由携带的参数
    const shop = await SearchShopById(id)
    ctx.body = {
      status: 0,
      data: shop
    }
  },
  createShop: async (ctx) => {
    const shop = ctx.request.body
    console.log(shop)
    await CreateShops(shop)
    ctx.body = {
      status: 0
    }
  }
}