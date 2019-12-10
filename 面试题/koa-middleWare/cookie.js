const Koa = require('koa')
const KoaRouter = require('koa-router')
const app = new Koa()
const router = new KoaRouter()

let id = 0
// 放到数据库里 session
const sessiontable = [

]

router.get('/login', async (ctx) => {
  // set-cookie
  id ++;
  let col = {
    id,
    uid,
  }
  // session-id
  ctx.cookies.set('login', id, {
    maxAge: 1000 * 60, // 设置一分钟的过期时间
    httpOnly: true  // js无法读取
  })
  ctx.body = 'login success'
})

router.get('/isLogin', async (ctx) => {
  let login = ctx.cookies.get('login')
  if (login) {
    ctx.body = {
      isLogin: true
    }
  } else {
    ctx.body = {
      isLogin: false
    }
  }
})

router.get('/', async (ctx) => {
  ctx.body = `
  <a href="/login">login</a>
  <a href="/isLogin">isLogin</a>
  `
})

app.use(router.routes(), router.allowedMethods())
app.listen(9999, () => {
  console.log(9999)
})
