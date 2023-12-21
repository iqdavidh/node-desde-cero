import { Readable } from 'stream'
const mountains = [
  { index:1, name: 'Everest', height: 8848 },
  { index:2,name: 'K2', height: 8611 },
  {index:3, name: 'Kangchenjunga', height: 8586 },
  {index:4, name: 'Lhotse', height: 8516 },
  {index:5, name: 'Makalu', height: 8481 }
]
const mountainsStream = Readable.from(mountains)

const asyncProcess=async ( data)=>{
  return new Promise( (resolve, reject)=>{
    setTimeout( ()=>{
      console.log(data)
      resolve(data.index);
    }, 1000)
  })
}




mountainsStream.on('data', (mountain) => {
   asyncProcess(mountain).then( data=>{
    console.log(`finished ${data}`)
  })
})

mountainsStream.on('finish',()=>{
  console.log('mountainsStream finished')
})

console.log('--------------------------END')