type Point = {
    x: number,
    y: number,
    desc?: string,
}

type OptionalPoint = Partial<Point>
type RequiredPoint = Required<Point>

const KeyVal: Record<string, number> = {
    'i am a string': 42
}
const p: Omit<Point, 'desc' | 'y'> = {
    x: 1,
    // y: 2,
}
const p1: Pick<Point, 'x' | 'y'> = {
    x: 1,
    y: 2,
}
const readOnlyP: Readonly<Point> = {
    x: 1,
    y: 2,
    desc: 'hello'
}
