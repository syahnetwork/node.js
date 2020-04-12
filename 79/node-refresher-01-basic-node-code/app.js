// import fs from 'fs'
// es6
const fs = require('fs')

const userName = 'max'

fs.writeFile('user-data.txt', 'name: ' + userName, (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('write file')
})

// console.log(userName)
// alert(userName) 
// node has no functionality