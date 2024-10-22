/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import style from "@/styles/Sass/Components/Home/doctorCarousel.module.scss";
import SimpleButton from "../Custom/Button/SimpleButton";
import UseFirebase from "../hooks/UseFirebase";

interface doctorData {
  _id: any;
  id: number;
  img: StaticImageData;
  category: string;
  name: string;
  designation: string;
  education: string;
  jobTitle: string;
}
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
[];
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
 

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}
const Doctor = ({data}:{data:doctorData[]}) => {
  const { user }: any = UseFirebase();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  console.log(data);
  return (
    <div className={`${style.carousel} transition-all duration-500 ease-in`}>
      <div
        className={`${style.titlePart} md:flex justify-between items-center `}
      >
        <h3 className={`${style.title} text-3xl`}>Our Doctor</h3>
        <Link href={"/"}>
          <p className="text-black text-sm font-semibold">View All</p>
        </Link>
      </div>

      <div className={`${style.DoctorCarousel_inner} `}>
        <Slider {...settings}>
          {data?.map((doctor, index) => {
            return (
              <div
                key={index}
                className={`${style.doctorCard} card  w-[250px]  shadow rounded-lg`}
              >
                <div className="h-[220px]">
                  <Image
                    src={doctor?.img}
                    alt={doctor?.name}
                    width={320}
                    height={220}
                    className="h-[220px] pt-2"
                  />
                </div>
                <div className={`${style.doctorCardBody} card-body space-y-3 py-3`}>
                  <h2 className="text-center">{doctor.name}</h2>
                  <p>{doctor.designation}</p>
                  <p>{doctor.education}</p>
                  <p>{doctor.jobTitle}</p>
                  <div className="card-actions flex justify-center">
                    <Link href={ user.email?`/doctor/${doctor._id}`:'/login'} passHref>
                   
                        <SimpleButton>Appointment</SimpleButton>
                 
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Doctor;
