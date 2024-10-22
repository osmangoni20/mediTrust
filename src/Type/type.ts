/* eslint-disable @typescript-eslint/no-explicit-any */

import { StaticImageData } from "next/image";

export type TMedicine ={
    _id:string,
    id: number;
    category: string;
    name: string;
    img: string;
    price: number;
      productType: string;
      capacity: string;
      used: string;
      sideEffect: string;
      quantity:number;
      order_price:number;
      brand:string;
      description:string;
  
  }

  export type TOrder={
    date:string,
    email:string,
    order_product: TMedicine[];
    status: string;
    shippingInfo: any;
    price: number;
    paymentInfo: {
        payment_method: string;
        transactionId: string;
    };
}

export type doctorData= {
    _id: any;
    id: number;
    img: StaticImageData;
    category: string;
    name: string;
    designation: string;
    education: string;
    jobTitle: string;
  }