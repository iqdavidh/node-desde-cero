import { Transform } from 'stream'


const asyncProcess=async ( data)=>{
  return new Promise( (resolve, reject)=>{
    setTimeout( ()=>{
      console.log(data)
      resolve(data.index);
    }, 1000)
  })
}


 class AsyncStream extends Transform {
  constructor (searchStr, replaceStr, options) {
    super({ ...options })
    this.searchStr = searchStr
    this.replaceStr = replaceStr
  }
  _transform (chunk, encoding, callback) {
    const textNew =  chunk.toString()
      .split(this.searchStr)
      .join(this.replaceStr)
    
    this.push( textNew)                   // (3)
    
    callback()
  }
  _flush (callback) {
    this.push(this.tail)
    callback()
  }
}
