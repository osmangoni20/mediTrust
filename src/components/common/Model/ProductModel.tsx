/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { useState } from "react";
import style from "@/styles/Sass/common/model/dynamicModel.module.scss";
import SimpleButton from "../../Custom/Button/SimpleButton";
import {useAppDispatch } from "@/app/redux/hooks";
import { addToCart, updateProduct } from "@/app/redux/feature/CartSlice";
interface Data {
  id: number;
  _id:string,
  category: string;
  name: string;
  img: string;
  price: number;
  productType: string;
  capacity: string;
  used: string;
  sideEffect: string;
}


const ProductModel = ({
  data,
  setModel,
  showModel,
}: {
  data: Data;
  showModel: any;
  setModel: any;
  user:any
}) => {
  const [countValue, setContValue] = useState(1);
  
  const dispatch=useAppDispatch()
  const HandleIncrease = (id:any) => {
    dispatch(updateProduct({id,type:"increment"}))
    setContValue((count) => count + 1);
  };
  const HandleDecrease = (id:any) => {
    if (countValue > 1) {
      dispatch(updateProduct({id,type:"decrement"}))

      setContValue((count) => count - 1);
    }
  };

  console.log(data);
  const HandleAddtoCart = () => {
    const product = {
      _id:data?._id,
      capacity: data.capacity,
      category: data.category,
      img: data.img,
      name: data.name,
      price: data.price,
      productType: data.productType,
      quantity: countValue,
    };
    console.log("product", product);
    dispatch(addToCart(product))
    setModel(false)
  
  };
  return (
    <div>
      {showModel && (
        <div className={`${style.popup_container}`}>
          <div className={`${style.addProduct_inner_popup}`}>
          
            <label
              onClick={() => setModel(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="flex justify-center">
              <div className={`md:flex md:justify-between w-full`}>
                <div>
                  <Image
                    src={data.img}
                    width={200}
                    height={200}
                    alt={data.name}
                  />
                  <div className={`${style.buttonCard} flex `}>
                    <div>
                      <p className="text-sm text-gray-400">
                        MRP{" "}
                        <span className="line-through">
                          Tk {Number(data.price * countValue).toFixed(2)}
                        </span>{" "}
                        <span className={style.offer}>8% off</span>
                      </p>
                      <p className={`${style.price}`}>
                        TK{" "}
                        {Number(data.price * countValue -
                          (data.price * countValue * 8) / 100).toFixed(2)}
                      </p>

                      <button className={`${style.countButton}`}>
                        <p
                          className={`${style.increaseAndDecrease}`}
                          onClick={()=>HandleDecrease(data?._id)}
                        >
                          -
                        </p>
                        <p className={`${style.countValue}`}>{countValue}</p>
                        <p
                          className={`${style.increaseAndDecrease}`}
                          onClick={()=>HandleIncrease(data?._id)}
                        >
                          +
                        </p>
                      </button>

                      <div className="mt-5 ">
                        <span onClick={HandleAddtoCart}>
                          <SimpleButton>Add to Cart</SimpleButton>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${style.productDetails}`}>
                  <h3>{data.name}</h3>
                  <p className={`${style.capacity}`}>{data.capacity}</p>
                  <p>{data.used.slice(0, 200)}</p>
                  {/* <h6>Effect:</h6> */}
                  <p>{data.sideEffect}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductModel;
// export default withAuth(OrderCart);
