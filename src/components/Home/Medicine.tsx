import style from "@/styles/Sass/Components/Home/Medicine.module.scss";
import Product from "../common/Product";
import LargestButton from "../Custom/Button/LargestButton";
import { TMedicine } from "@/Type/type";

const Medicine = ({data}:{data:TMedicine[]}) => {


  return (
    <div className={`${style.medicine}`}>
      <div className={`${style.title} flex justify-center`}>
        <h2 className="text-center text-[#4C9DC3]">Medicine Corner</h2>
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
export default Medicine;
