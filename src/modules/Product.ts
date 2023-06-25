export { Product }

class Product {
    name: string
    description: string
    price: number
    imagePath: string
    id: number

    constructor(product: { name: string, description: string, price: number, imagePath: string, id: number }) {
        this.name = product.name
        this.description = product.description
        this.price = product.price
        this.imagePath = product.imagePath
        this.id = product.id
    }

}