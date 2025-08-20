export interface Item {
  id: number
  name: string
  price: number
}

export interface Book extends Item {
  author: string
  pages: number
}

export interface Device extends Item {
  brand: string
  warrantyMonths: number
}

export type AnyItem = Item | Book | Device;