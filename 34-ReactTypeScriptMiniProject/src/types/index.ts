export interface Watch{
    id:string | number,
    brand:string,
    model:string,
    price:number,
    description:string,
    rating:number,
    image:string
}

export type WatchFormData = Omit<Watch,"id">