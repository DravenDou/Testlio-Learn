/**
 * Class product
 * name
 * desc
 * created_at
 * ceated_by
 * stock
 * sku
 * 
 * Class category
 * name
 * desc
 * create_at
 * created_by
 */

// class BasicData {
//     constructor(
//       public name: string,
//       public desc: string,
//       public created_at: Date,
//       public created_by: number,
//     ){}

//     get fullYear(){
//         return this.created_at.getFullYear()
//     }

//     get fullDesc() { 
//       return this.name + ' ' + this.desc
//     }
// }
// class Product extends BasicData{
//     constructor (
//       public stock: number,
//       public sku: number,
//       name: string,
//       desc: string,
//       created_at: Date,
//       created_by: number,

//     ) {
//         super(name,desc,created_at,created_by)
//     }

//     override get fullDesc(){
//       return 'Product : ' + super.fullDesc
//     }
// }

// class Category extends BasicData{
//     public products: Product[] = []
//     constructor (
//       name: string,
//       desc: string,
//       created_at: Date,
//       created_by: number,

//     ) {
//         super(name,desc,created_at,created_by)
//     }

//     addProduct (product: Product){
//       this.products.push(product)
//     }

//     override get fullDesc(){
//       return 'Category : ' + super.fullDesc
//     }
// }

// let product1 = new Product(100, 
//     1, 
//     'Iphone', 
//     'this is a smartphone',
//     new Date(),
//     1
// )

// let category = new Category(
// 'cellphones', 
// '', 
// new Date(),
//  1
// )
// category.addProduct(product1)
// console.log(category.fullDesc)


// Protected Properties
// use protected
// ABSTRACT CLASSES AND METHODS
//===================================================
abstract class BasicData {
  constructor(
    public name: string,
    public desc: string,
    protected created_at: Date,
    protected created_by: number,
  ){}

  get fullYear(){
      return this.created_at.getFullYear()
  }

  get fullDesc() { 
    return this.name + ' ' + this.desc
  }

  abstract save (): void ; 
}
class Product extends BasicData{
  constructor (
    public stock: number,
    public sku: number,
    name: string,
    desc: string,
    created_at: Date,
    created_by: number,

  ) {
      super(name,desc,created_at,created_by)
  }

  override get fullDesc(){
    
    return 'Product : ' + super.fullDesc
  }

  save(){
    console.log('saving product..')
  }
}

class Category extends BasicData{
  public products: Product[] = []
  constructor (
    name: string,
    desc: string,
    created_at: Date,
    created_by: number,

  ) {
      super(name,desc,created_at,created_by)
  }

  addProduct (product: Product){
    this.products.push(product)
  }

  override get fullDesc(){
    return 'Category : ' + super.fullDesc
  }

  save(){
    console.log('saving category..')
  }
}

let product1 = new Product(100, 
  1, 
  'Iphone', 
  'this is a smartphone',
  new Date(),
  1
)

let category = new Category(
'cellphones', 
'', 
new Date(),
1
)
category.addProduct(product1)
console.log(category.fullDesc)
