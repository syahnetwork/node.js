// import http from 'http';
const http = require('http')

const server = http.createServer((req, res) => {
  console.log('incoming request')
  console.log(req.method, req.url)

  if (req.method === 'POST') {
    let body = ''

    req.on('end', () => {
      // console.log(body)
      const userName = body.split('=')[1]
      res.end('<h1>' + userName + '</h1>')
      // res.end('<h1>got the post request</h1>')
    })

    req.on('data', (chunk) => {
      body += chunk
    })
  } else {
    res.setHeader('Content-Type', 'text/html')
    // res.setHeader('Content-Type', 'text/plain')
    // res.end('<h1>success</h1>')
    res.end('<form method="POST"><input type="text" name="username"><button type="submit">create user</button></form>')
  }

  //ask to response with text
  // res.setHeader('Content-Type', 'text/html')
  // // res.setHeader('Content-Type', 'text/plain')
  // // res.end('<h1>success</h1>')
  // res.end('<form method="POST"><input type="text" name="username"><button type="submit">create user</button></form>')
})

server.listen(5000)
//after changes need restart server