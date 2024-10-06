import client from "./client";


async function init(){
    await client.setnx("hey:6","hello")
    await client.expire("hey:6",10)
    const result = await client.get("hey:6")
    console.log(result)
    await new Promise(r=>setTimeout(r,10000))
    const result1 = await client.get("hey:6")
    console.log(result1)

}

init()