// let message1:string = "Hola mundo"
// message1 = "Hello world"
// console.log (message1)
// /** 
//  * Types of Javascript
//  * number
//  * string
//  * boolean
//  * undefined    
//  * object
//  * function
 
// Types of Typescript

//   Any
//   unknown
//   never
//   array
//   tuplas    
//   Enums

//   NoImplicitAny :true or false
//  * */
// // TYPES : 
// //=================================================================
// // let DinosaurExtinction: number = 76_000_000
// // let FavoriteDinosaur: string = "Trex"
// // let DinosaursDead: boolean = true
// // let DinsaoursNumber: number = 19
// // console.log(typeof DinosaurExtinction)
// // let mazapan: string = "el mazapan me lo paso los huevos"
// // let douglas: string = "en bolas duke"
// // console.log(douglas)

// // ARRAYS
// //=================================================================

// // let animals :string [] = ['pig', 'batman', 'bird']
// // let numbers: number[] = [1,2,3]
// // let checks: boolean[]= []
// // let nums2: Array<number> = []
// // animals.map(x => x.) // auto-completion suggests data type methods

// // TUPLAS
// //=================================================================
// // little containers for your data that you can't mess with once you've made them. 
// // But they're super handy for keeping things organized and together!
// // let tupla: [number,string[]] = [1, ["hello", "goodbye"]]

// // ENUM
// //=================================================================
// // const small = "s"
// // const medium = 'm'
// // //PascalCase
// enum Size { Small = 2, Medium, Large, ExtraLarge}
// enum Size2 { Small = 's', Medium = 'm', Large = 'l', ExtraLarge = 'xl'}
// const variable1 = Size2.ExtraLarge
// console.log(variable1)

// // const enum LoadingState {Idle,Loading,Succes,Error}

// // const state =  LoadingState.Succes

// // OBJECTS
// //=================================================================
// //readonly: only read, you cant do changes in the variable
// // const object1 = {id: 1, name: ''}
// // object1.name = 'object'
// type Address ={
//     number: number,
//     street: string,
//     country: string
// }
// type Person =  {
//   readonly id:number,
//   name:string,
//   size: Size2,
//   address : Address
// }

// const object2: Person = {
//    id: 2, 
//   name: 'Object2', 
//   size: Size2.Medium,
//   address : 
//   {
//     number: 1,
//     street: "flowerstreet",
//     country: "Bolivia"
//   }
// }

// const arr: Person[] = []

// // FUNCTIONS
// //=================================================================

// // const fn: () => number = () =>{
// //   let x = 2
// //   if (x>5)
// //     {
// //       return 7
// //     } else {
// //       return 4
// //     }
// // }
// // const fn: (a: number) => string = (age: number) =>{
// //  if(age > 17)
// //   return 'you can pass'
// // return 'you cant pass'
// // }

// // function validateAge(age:number , msg = 'Douglas'): string{
// //   if(age>17)
// //     return `you can pass ${msg}`

// //   return 'no puedes pasar'
// // }
// // validateAge(18, "Douglas")

// // // NEVER
// // //===========================================

// // function UserError(): never{
// //   throw new Error("User Error")
// // }

// // // UNION TYPE
// // //===========================================
// // let score: number | string  = 98
// // score  = "number"

// // type Animal  = {
// //   id: number,
// //   state: string
// // }
// // type User  = {
// //   id: number,
// //   name: string

// // }

// // let animal : User | Animal = {id: 1, state: "", name: ""}

// // function addition (n: number | string) : number {
// //   if (typeof n === 'number'){
// //     return n + 2
// //   }
// //   return parseInt(n) + 2
// // }

// // addition("2")

// // INTERSECTION type
// //===========================================

// type Audit = {
//   created_at: string,
//   modified_at: string,
// }
// type Product = { 
//   name: string,
// }

// const product: Audit & Product = { 
//   created_at : '',
//   modified_at: '',
//   name: '',
// }
// // LITERAL types
// //===========================================
// type fibo =  0 | 1 | 2 | 3 | 5
// const fibonacci: fibo = 5

// // NULLABLE types
// //===========================================
// function toNumber (s: string | null | undefined)  { 
//   if (!s)
//     {
//       return 0 
//     }
//    return parseInt(s)
// }

// const n = toNumber(undefined)

// // OPTIONAL CHAIN OPERATOR
// //===========================================

// function getUser(id: number){
//   if (id< 0){
//     return null
//   }
//   return{
//     id: 1,
//     name: 'felipe',
//     created_at: new Date()
//   }
// }

// const user = getUser(1)
// console.log('usuario',user?.created_at)

// const arr1 = null
// console.log(arr1?.[0])

// const fn5:any = null
// console.log(fn5?.())

// // Nullish coalescing operator
// //===========================================

// const difficulty: number | null  = 0

// const user2 = {
//   username: 'douglas',
//   difficulty: difficulty ?? 1
// }
// console.log(user2)

// // type ASSERTION

// const elem: any = null;

// const elem1 = elem as number

// // const input = document.getElementById('username') as HTMLInputElement

// // input.value

// // const input = <HTMLInputElement> document.getElementById('username') 
// // input.value

// // type NARROWING
// //===========================================

// // function Lala(x: string | number) { 
// //   if(typeof x === 'number') { 
// //     x.
// //   }
// //   if(typeof x === 'string') { 
// //     x.
// //   }

// // }

// // type UNKNOWN
// //===========================================

// // function process (some: unknown) {
// //   if (typeof some === 'string'){
// //     return some.toUpperCase()
// //   }
// //   if (typeof some === 'number'){
// //     return some.toString
// //   }
// //   if(some instanceof String)
// //   some.hace()
// //   some.other()
// //   some.genkidama()

// // }

// // CLASS
// //===========================================
// class Character {
//    id: number 
//    name: string 
//    level: number
//    hp: number
//    constructor(id: number,name: string ,level: number ,hp: number){
//      this.id = id
//      this.name = name
//      this.level = level
//      this.hp = hp
//    }

//    levelUp(): number {
//     this.level = this.level ++
//     return this.level
//    }
   
//    changeHP(amount: number):number{
//     this.hp = this.hp + amount
//     return this.hp
//    }
// }

// const character = new Character(1,'Douglas', 1, 100)
// character.changeHP(-10)
// console.log(character)

// For TYPE NARROWING
// if(character instanceof Character)
//   {

//   }

// // ACCES CONTROL AND PARAMETERS PROPERTIES
// //===========================================
// // GETTERS AND SETTERS
// //===========================================

//readonly
//private 
//public
// class Character {
//   profession?: string
//   constructor(
//     public readonly id: number,
//     public name: string ,
//     public level: number ,
//      private _hp: number
//     )  {
//     //_hp use for determinate a private property
//   }

//   levelUp(): number {
//    this.level = this.level ++
//    return this.level
//   }
  
//   changeHP(amount: number):number{
//    this._hp = this._hp + amount
//    return this._hp
//   }

//   get hp(): number {
//     return this._hp
//   }
//   // set hp(amount: number){
//   //  this._hp = this._hp + amount
//   // }

// }

// const character = new Character(1,'Douglas', 1, 100)
// character.changeHP(-10)
// console.log(character)

// // STATIC PROPERTIES AND METHODS
// //===========================================

class Character {
  profession?: string
  private static team : number = 1
  constructor(
    public readonly id: number,
    public name: string ,
    public level: number ,
     private _hp: number
    )  {
    //_hp use for determinate a private property
  }

  levelUp(): number {
   this.level = this.level ++
   return this.level
  }

  static addCharacter(): void {
    Character.team ++
  }
  
  changeHP(amount: number):number{
   this._hp = this._hp + amount
   return this._hp
  }

  get hp(): number {
    return this._hp
  }
  // set hp(amount: number){
  //  this._hp = this._hp + amount
  // }

  static getTeam(): number {
    return Character.team
  }
}

const character = new Character(1,'Douglas', 1, 100)
character.changeHP(-10)
// console.log(character)
const character1 = new Character(2, 'Luis',1, 120)
Character.addCharacter()
console.log(character, character1)
character1.changeHP(20)
