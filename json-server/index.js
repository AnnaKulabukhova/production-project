const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
const fs = require('fs');

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);
// объект запроса ( req ), объект ответа ( res ) 

// Set default middlewares (logger, static, cors and no-cache)
server.use(async (req, res, next) => {
  await new Promise((res) => {setTimeout(res, 800)});
   next()
})

server.post('/login', (req, res) => {
  const {username, password} = req.body
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json')))
  const {users} = db

  const userFromBd = users.find((user) => user.username === username && user.password === password);

  if (userFromBd) {
    return res.json(userFromBd)
  }

  return res.status(403).json({massage: 'AUTH ERROR'})
})
server.use((req, res, next) => {
  if (!req.headers.authorization) {
   return res.status(403).json({massage: 'AUTH ERROR'})
  }
  next()
})

server.use(router)


// Use default router
server.listen(8000, () => {
  console.log('JSON Server is running')
})