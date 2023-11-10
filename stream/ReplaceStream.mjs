import {Readable, Transform} from 'stream'




const asyncProcess=async ( data)=>{
  return new Promise( (resolve, reject)=>{
    setTimeout( ()=>{
      console.log(data)
      resolve(data.index);
    }, 1000)
  })
}


export class MyStream extends Transform {
  constructor (options) {
    super({ ...options })
    
  }
  
  
  _transform (item, encoding, callback) {
  console.log(item)
    
    callback()
  }
  
  _flush (callback) {
    this.push(this.tail)
    callback()
  }
}

// -----------------------------------------------------------------

const mountains = [
  { index:1, name: 'Everest', height: 8848 },
  { index:2,name: 'K2', height: 8611 },
  {index:3, name: 'Kangchenjunga', height: 8586 },
  {index:4, name: 'Lhotse', height: 8516 },
  {index:5, name: 'Makalu', height: 8481 }
]
const mountainsStream = Readable.from(mountains).pipe( new MyStream() )

mountainsStream.on('data', (mountain) => {
  asyncProcess(mountain).then( data=>{
    console.log(`finished ${data}`)
  })
})

mountainsStream.on('finish',()=>{
  console.log('mountainsStream finished')
})