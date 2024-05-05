import { Point1, POINTI } from './Point1'
//wildcard import
import  * as G  from './Group'
import { horses } from "./Animals/horses"
import { piggs } from "./Animals/piggs"
import { Animals } from "./Animals/Animals"
console.log (Animals, piggs, horses)

const point1 = new Point1(1,2)

const group = new G.default(1, 'hello')
console.log(POINTI)
console.log(G.defaultGroups.admin)