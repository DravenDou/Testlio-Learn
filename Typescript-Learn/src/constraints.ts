// interface Userconst {
//     id:string
//     name : string
// }
class Userconst { 
    constructor (
        public id: string
    ) {}
}
function print <T extends Userconst>(t: T): T{
    console.log(t);
    return t

}

print ({id : 'user_id', name: 'Felix'})