interface KeyValue<T, V>
{
    key : T,
    value1: V,
}
interface Product1{
    id: string
}

function fetchProduct(): KeyValue<string, Product1>{
  return {
    key: 'product id',
    value1: {id: 'product id'}
  }
}
function fetchStock(): KeyValue<string, number>{
    return { 
        key: 'product id',
        value1 : 500,
    }
}