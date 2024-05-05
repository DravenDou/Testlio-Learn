type Calendar = {
    id: number,
    source : string,
    owner: string,
}

const calendar: Calendar = { id: 1, source: 'google', owner: 'me'}

function getProp<T>(object: T, property: keyof T): unknown {
    return object[property]
}

getProp<Calendar>(calendar, 'id')