import { ReplaceStream } from './ReplaceStream.mjs'
const replaceStream = new ReplaceStream('l', 'L')
replaceStream.on('data', chunk => console.log(chunk.toString()))
replaceStream.write('Hello W')
replaceStream.write('orld!')
replaceStream.end()
