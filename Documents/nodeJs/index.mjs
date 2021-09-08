import { write, writeFileSync } from 'fs'
import {readFile} from 'fs/promises'
import path from 'path'
import _ from 'lodash'
let template =await readFile(new URL("template.html",import.meta.url), "utf-8",)
console.log(_)
const data ={
    title:"Learn NodE.JS",
    body:"this is the final Html"
}

for (const[k,v]of Object.entries(data)){
    template=template.replace(`{${k}}`,v)
}
console.log(template)
await writeFileSync(new URL ("index.html",import.meta.url),template)
const getUsers= async ()=>{
    await db.getUsers()
}
