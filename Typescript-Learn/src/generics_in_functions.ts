function log<T, V>(a: T, b: V) : V{
    console.log(a,b)
    return b
}

log<string, number>( 'data' ,42)
log<string, string>( 'data' ,'hello')
log (1,2)
log('hello', 'bye')

async function fetchData<T>(resource: string): Promise<T>{
    const response = await fetch(`${resource}`)
    return response.json()

}

type User = {
    id: string,
    name: string,
}
async function main() {
    const user = await  fetchData<User>('/users')
    user.id
}

