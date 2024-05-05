type Computer = {
    turnON () : void
    turnOff() : void

}

class Programmer<T> {
    computer: T ;
    constructor (t : T)
    {
        this.computer = t
    }
}

const programmer = new Programmer<Computer>({
    turnON() {
        
    },
    turnOff() {
        
    },
})
const programmer1 = new Programmer<string>('hello world')
programmer.computer.turnON
programmer1.computer.charAt
