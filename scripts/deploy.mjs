// const { interface, bytecode } = require(contractPath);
import { createRequire } from 'module'
const contractPath = new URL('../compiled/MyName.json', import.meta.url)
const require = createRequire(import.meta.url)

const data = require('./../compiled/MyName.json')
console.log(data)
debugger
