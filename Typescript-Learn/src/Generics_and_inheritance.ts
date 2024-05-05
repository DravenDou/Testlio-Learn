class State<T> { 
    protected data: T[] = [];

    add(t: T): void { 
        this.data.push(t)
    }

    getState() : T[]{
        return this.data
    }
}
type ObjectId = {
    id: string
}
// pass generic  with restrictions
class DeleteState <T extends ObjectId> extends State<T> { 
    delete(id: string){
      this.data = this.data.filter(x => x.id !== id)
    }
}
// pass a fixed generic 
class UserState extends State<User> {
    resetPassword(){

    }
}


const userState = new UserState()
const deleteState = new DeleteState<Userconst>()
deleteState.delete