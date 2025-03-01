export interface Watch{
    id:string | number,
    brand:string,
    model:string,
    price:number,
    description:string,
    rating:number,
    image:string,
    quantity?:number
}

export type WatchFormData = Omit<Watch,"id">