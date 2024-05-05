class UserDictionary {
   [id: string]: string

}

let userDictionary = new UserDictionary()
userDictionary['1a'] = 'user1' 
userDictionary['a1'] = 'user2' 
console.log(userDictionary)
