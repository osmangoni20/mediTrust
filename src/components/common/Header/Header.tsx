'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import {
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineMobile,
  AiOutlinePhone,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import logo from "@/public/image/medstar.png";
import style from "@/styles/Sass/common/Header/_header.module.scss";
import SimpleButton from "../../Custom/Button/SimpleButton";
import UseFirebase from "../../hooks/UseFirebase";
import Navbar from "./Navbar";
import NavbarModel from "./NavbarModel";
import defaultProfile from "@/public/image/default_profile.png";
import { useAppSelector } from "@/app/redux/hooks";
const Header = () => {
  const [open, setOpen] = useState(false);
  const { user }: any = UseFirebase();
  // const [isAdmin, setIsAdmin] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
const {products}=useAppSelector(state=>state.cartR)
  const route = useRouter();


  const HandleSearch = () => {
    route.push(`/medicine?search=${searchValue}`);
    console.log(searchValue);
  };
  return (
    <div>
      <div className={`${style.headerComponent} sticky top-0`}>
        <div
          className={`${style.topHeader}  md:px-5 lg:px-6 py-2 bg-blend-lighten border-bottom`}
        >
          <div className="flex justify-between items-center">
            <ul className="list-none flex items-center gap-4">
              <li className="flex items-center">
                <AiOutlinePhone />
                <Link href="tell:01878452545">+88018784525</Link>
              </li>
              <li className="flex items-center">
                <AiOutlineMail></AiOutlineMail>
                <Link href="mail-to:support@ehostelbd.com">
                  support@ehostelbd.com
                </Link>
              </li>
            </ul>
            <div className="flex items-center">
              <AiOutlineMobile />
              <Link href="/medStart">Save on our app</Link>
            </div>
          </div>
        </div>
        <div className={style.middleHeader}>
          {open && <NavbarModel />}
          <div
            className={`${style.middle_header_body} flex items-center justify-between lg:justify-evenly md:justify-evenly py-2 `}
          >
            <div className={`${style.menuFoldIcon} flex items-center`}>
              <label htmlFor="my-modal-3">
                <AiOutlineMenu className="md:hidden block text-white" />
                {/* <NavbarModel /> */}
              </label>

              {/* <img className="branding" src={logo} alt=""></img> */}
              <Link href={"/"} passHref>
                <span className={style.logo}>
                  <Image src={logo} height={80} width={80} alt="Med Star" />
                </span>
              </Link>
            </div>

            <label className={`${style.searchInput} relative hidden md:block`}>
              <div className={style.inputField}>
                <input
                  onBlur={(e) => setSearchValue(e.target.value)}
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Medicine Search for anything..."
                  type="text"
                  name="search"
                />
                <button onClick={HandleSearch} type="submit">
                  Search
                </button>
              </div>
            </label>
            <ul className={` ${style.iconList}`}>
              {/* <li>
                <BsBagCheck />
              </li> */}

              <Link href={"/order_cart"} passHref>
                
                  <li>
                    <BsFillCartPlusFill />
                    <span className={`${style.totalCartItem}`}>
                      {Number(products?.length)}
                    </span>
                  </li>
                
              </Link>
              {/* <li>
                <AiOutlineUser />
              </li> */}
              <span className="md:block lg:block ">
                {user.email ? (
                  <div className={style.profileLogo}>
                    <Link href={"/dashboard"}>
                     
                       <figure className="w-[45px] h-[45px]">
                       <Image
                        className=" h-[42px] w-[42px] rounded-full"
                          src={user?.photoURL || defaultProfile}
                          alt={""}
                          height={42}
                          width={42}
                        />
                   
                       </figure>
                    </Link>
                  </div>
                ) : (
                  <Link href={"/login"} passHref>
                    <span className={style.loginButton}>
                      <SimpleButton>Log In</SimpleButton>
                    </span>
                  </Link>
                )}
              </span>
            </ul>
          </div>
        </div>
        <div className={style.lastHeader}>
          <Navbar />
        </div>
        <div className="mx-2">
          <div
            className={`${style.searchInput} md:hidden flex items-center justify-between py-2  `}
          >
            {/* <span className="sr-only">Search</span> */}

            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full  py-2 pr-3  focus:outline-none   sm:text-sm"
              placeholder="Medicine Search for anything..."
              type="text"
              name="search"
            />
            <p className="searchIcon">
              <AiOutlineSearch />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
