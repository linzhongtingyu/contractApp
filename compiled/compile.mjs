import { readFile,writeFile,readdir } from 'fs/promises'
import solc from 'solc'
const contractPath = new URL('../contracts/Name.sol', import.meta.url)
const contractSource = await readFile(contractPath,'utf-8')
const input = {
  language: 'Solidity',
  sources: {
    'Name': {
      content: contractSource
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};
const result = JSON.parse(solc.compile(JSON.stringify(input)));
if (Array.isArray(result.errors) && result.errors.length) {
  throw Error(result.errors[0].message)
}
for (const contractName in result.contracts.Name) {
  const compicePath = new URL(`../compiled/${contractName}.json`, import.meta.url)
  console.log(compicePath)
  await writeFile(compicePath,JSON.stringify(result.contracts.Name[contractName]))
  // console.log(result.contracts.Name[contractName].evm.bytecode.object);
  // console.log(result.contracts.Name[contractName].abi)
}