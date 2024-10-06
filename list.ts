import client from "./client"


const init = async () => {
    await client.lpush("messages:1","user:1")
    await client.lpush("messages:1","user:2")
    const result = await client.lpop("messages:1")
    console.log(result)
}


init()