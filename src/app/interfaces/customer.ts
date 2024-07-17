export interface Customer {
  filter(arg0: (customer: { id: number; }) => boolean): any[];
  name:string,
  id:number
}
