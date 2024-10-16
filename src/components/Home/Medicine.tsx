import style from "@/styles/Sass/Components/Home/Medicine.module.scss";
import Product from "../common/Product";
import LargestButton from "../Custom/Button/LargestButton";
import { GetServerSideProps } from "next";
interface Data {
  _id:string;
  id: number;
  category: string;
  name: string;
  img: string;
  price: number;
  brand:string;
  description:string;
  productType: string;
  capacity: string;
  used: string;
  sideEffect: string;
}
const Medicine = ({data}:{data:Data[]}) => {


  return (
    <div className={`${style.medicine}`}>
      <div className={`${style.title} flex justify-center`}>
        <h2 className="text-center">Medicine Corner</h2>
      </div>

      <div className="mt-10">
        <div className="md:grid md:grid-cols-5 gap-4">
          {data.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center my-10">
          <LargestButton>More Product</LargestButton>
        </div>
      </div>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async (ctx: any) => {
//   console.log(ctx);
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/` + ctx.params.id
//   );
//   const data = await res.json();
//   return {
//     props: {
//       data: data,
//     },
//   };
// };
export const getServerSideProps =(async()=>{
  const res = await fetch('https://medstar-backend.onrender.com/doctor')
  const data: Data = await res.json()
  return {props:{data}}
})satisfies GetServerSideProps<{ data: Data }>
export default Medicine;
