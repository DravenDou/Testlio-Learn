interface Animal { 
 name: string
 walk(): void
 sound(): string

}

class Horse implements Animal { 
    name: string = 'horse'

    walk(): void {
        console.log ('walking')
    }

sound(): string {
    return 'hin'
    }
}

class Pig implements Animal { 
    name: string = 'piggy'

    walk(): void {
        console.log ('walking')
    }

sound(): string {
    return 'oing'
    }
}

class Dog implements Animal {
    name: string = 'doggy'
    walk(): void {
        console.log ('walking')
    }
    sound(): string {
        return 'guau'
    }

}
