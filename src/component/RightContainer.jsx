import React, { useRef, useState } from "react";
import Select from "react-select";
import img1 from "../Images/537635.jpg";
import img2 from "../Images/537844.jpg";
import img3 from "../Images/R (1).jpg";

export default function RightContainer() {
  const [dpd, setDpd] = useState("Quaterly");
  const [toggle,setToggle] = useState(false);
  const menuRef = useRef('');

  const toggleMenu = () =>{
    if(!toggle){
      setToggle(!toggle);
      menuRef.current.style.height = "250px";
    }else{
      setToggle(!toggle);
      menuRef.current.style.height = "0px";
    }
  }

  const options = [
    { value: "monthly", label: "Monthly" },
    { value: "quaterly", label: "Quaterly" },
    { value: "yearly", label: "Yearly" },
  ];

  return (
    <div className="lg:w-[calc(100vw-280px)] pb-10 lg:ml-[280px]">
      <div className="lg:p-8 p-5 flex justify-between w-full border-b relative">
        <h2 className="lg:ml-5 ml-0 font-bold text-xl">
          Hello, Vivek Kumar
        </h2>
        <input
          type="text"
          className="border border-slate-300 rounded-full placeholder:text-slate-400 placeholder:text-sm pl-5 outline-none text-sm h-[35px] w-[250px] hidden lg:block"
          placeholder="Search"
        />
        <div className="lg:hidden block cursor-pointer" onClick={toggleMenu}>
          {
            (!toggle)?<i className="fa fa-bars text-black"></i>:<i className="fa fa-close text-black text-lg"></i>
          }
          
        </div>
          <div className="absolute w-full bg-gradient-to-br from-indigo-700 to-indigo-400 text-white top-[69px] left-0 lg:hidden h-0 transition-all duration-700 overflow-hidden" ref={menuRef}>
          <ul className="ml-8 mt-8">
            <li className="my-2 text-slate-200 cursor-pointer hover:text-white"><i className="w-[20px] fa fa-tachometer mx-2"></i>Dashboard</li>
            <li className="my-2 text-slate-200 cursor-pointer hover:text-white"><i className="w-[20px] fa fa-cart-arrow-down mx-2"></i>Product</li>
            <li className="my-2 text-slate-200 cursor-pointer hover:text-white"><i className="w-[20px] fa fa-user-o mx-2"></i>Customer</li>
            <li className="my-2 text-slate-200 cursor-pointer hover:text-white"><i className="w-[20px] fa fa-credit-card mx-2"></i>Income</li>
            <li className="my-2 text-slate-200 cursor-pointer hover:text-white"><i className="w-[20px] fa fa-handshake-o  mx-2"></i>Promote</li>
            <li className="my-2 text-slate-200 cursor-pointer hover:text-white"><i className="w-[20px] fa fa-comment-o mx-2"></i>Help</li>
          </ul>
        </div>
        
      </div>

      <div className="flex lg:flex-row flex-col justify-evenly items-center w-full lg:mt-6 mt-3">
        <div className="flex justify-around items-center md:w-[260px] w-[300px] py-2 my-2">
          <div className="h-[100px] w-[100px] bg-gradient-to-tr from-[#e9fff3] to-[#dbfeec] rounded-full flex justify-center items-center">
            <i className="fa fa-money text-[#05a747] text-4xl"></i>
          </div>
          <div className="">
            <p className="text-slate-500 text-[12px]">Earning</p>
            <h3 className="text-[18px] font-medium">$198K</h3>
            <p className="">
              <span className="text-[green]">
                <i className="fa fa-long-arrow-up text-sm mx-1"></i>37.8%{" "}
              </span>
              this month
            </p>
          </div>
        </div>

        <div className="flex justify-around items-center md:w-[260px] w-[300px] py-2 my-2">
          <div className="h-[100px] w-[100px] bg-gradient-to-tr from-[#e7dbff] to-[#e7dbff] rounded-full flex justify-center items-center">
            <i className="fa fa-university text-[#a101fe] text-4xl"></i>
          </div>
          <div className="">
            <p className="text-slate-500 text-[12px]">Orders</p>
            <h3 className="text-[18px] font-medium">$2.8K</h3>
            <p className="">
              <span className="text-[red]">
                <i className="fa fa-long-arrow-down text-sm mx-1"></i>3.2%{" "}
              </span>
              this month
            </p>
          </div>
        </div>

        <div className="flex justify-around items-center md:w-[260px] w-[300px] py-2 my-2">
          <div className="h-[100px] w-[100px] bg-gradient-to-tr from-[#cef4ff] to-[#ccf2ff] rounded-full flex justify-center items-center">
            <i className="fa fa-credit-card text-[#2f74ca] text-4xl"></i>
          </div>
          <div className="">
            <p className="text-slate-500 text-[12px]">Balance</p>
            <h3 className="text-[18px] font-medium">$2.8K</h3>
            <p className="">
              <span className="text-[red]">
                <i className="fa fa-long-arrow-down text-sm mx-1"></i>7.8%{" "}
              </span>
              this month
            </p>
          </div>
        </div>

        <div className="flex justify-around items-center md:w-[260px] w-[300px] py-2 my-2">
          <div className="h-[100px] w-[100px] bg-gradient-to-tr from-[#fecced] to-[#ffadd6] rounded-full flex justify-center items-center">
            <i className="fa fa-line-chart text-[#d6030f] text-4xl"></i>
          </div>
          <div className="">
            <p className="text-slate-500 text-[12px]">Total Sales</p>
            <h3 className="text-[18px] font-medium">$98K</h3>
            <p className="">
              <span className="text-[green]">
                <i className="fa fa-long-arrow-up text-sm mx-1"></i>11%{" "}
              </span>
              this month
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#fafbfc] mt-10 py-10">
        <div className="flex lg:flex-row flex-col justify-around ">
          {/* OverView */}
          <div className="lg:w-[800px] w-full bg-white p-8">
            <div className="flex justify-between">
              <div className=" md:ml-8">
                <h3 className="text-lg font-semibold">Overview</h3>
                <p className="text-sm text-slate-500">Monthly Earning</p>
              </div>
              <Select
                value={dpd}
                onChange={setDpd}
                options={options}
                className="md:w-[200px] w-[150px] h-[30px]"
              />
            </div>
            <div className="flex justify-evenly w-full">
              <div className="mx-[2px] lg:mx-0">
                <div className="h-[300px] flex flex-col justify-end items-center">
                  <div className="h-[40%] lg:w-[40px] w-[20px] bg-[#f2efff] rounded-md"></div>
                </div>
                <p className="text-center">Jan</p>
              </div>
              <div className="mx-[2px] lg:mx-0">
                <div className="h-[300px] flex flex-col justify-end items-center">
                  <div className="h-[70%] lg:w-[40px] w-[20px] bg-[#f2efff] rounded-md"></div>
                </div>
                <p className="text-center">Feb</p>
              </div>
              <div className="mx-[2px] lg:mx-0">
                <div className="h-[300px] flex flex-col justify-end items-center">
                  <div className="h-[50%] lg:w-[40px] w-[20px] bg-[#f2efff] rounded-md"></div>
                </div>
                <p className="text-center">Mar</p>
              </div>
              <div className="mx-[2px] lg:mx-0">
                <div className="h-[300px] flex flex-col justify-end items-center">
                  <div className="h-[65%] lg:w-[40px] w-[20px] bg-[#f2efff] rounded-md"></div>
                </div>
                <p className="text-center">Apr</p>
              </div>
              <div className="mx-[2px] lg:mx-0">
                <div className="h-[300px] flex flex-col justify-end items-center">
                  <div className="h-[70%] lg:w-[40px] w-[20px] bg-[#f2efff] rounded-md"></div>
                </div>
                <p className="text-center">May</p>
              </div>
              <div className="mx-[2px] lg:mx-0">
                <div className="h-[300px] flex flex-col justify-end items-center">
                  <div className="h-[30%] lg:w-[40px] w-[20px] bg-[#f2efff] rounded-md"></div>
                </div>
                <p className="text-center">Jun</p>
              </div>
              <div className="mx-[2px] lg:mx-0">
                <div className="h-[300px] flex flex-col justify-end items-center">
                  <div className="h-[60%] lg:w-[40px] w-[20px] bg-[#f2efff] rounded-md"></div>
                </div>
                <p className="text-center">Jul</p>
              </div>
              <div className="mx-[2px] lg:mx-0">
                <div className="h-[300px] flex flex-col justify-end items-center">
                  <div className="h-[80%] lg:w-[40px] w-[20px] bg-[#5a32ea] rounded-md"></div>
                </div>
                <p className="text-center">Aug</p>
              </div>
              <div className="mx-[2px] lg:mx-0">
                <div className="h-[300px] flex flex-col justify-end items-center">
                  <div className="h-[50%] lg:w-[40px] w-[20px] bg-[#f2efff] rounded-md"></div>
                </div>
                <p className="text-center">Sep</p>
              </div>
              <div className="mx-[2px] lg:mx-0">
                <div className="h-[300px] flex flex-col justify-end items-center">
                  <div className="h-[45%] lg:w-[40px] w-[20px] bg-[#f2efff] rounded-md"></div>
                </div>
                <p className="text-center">Oct</p>
              </div>
              <div className="mx-[2px] lg:mx-0">
                <div className="h-[300px] flex flex-col justify-end items-center">
                  <div className="h-[20%] lg:w-[40px] w-[20px] bg-[#f2efff] rounded-md"></div>
                </div>
                <p className="text-center">Nov</p>
              </div>
              <div className="mx-[2px] lg:mx-0">
                <div className="h-[300px] flex flex-col justify-end items-center">
                  <div className="h-[60%] lg:w-[40px] w-[20px] bg-[#f2efff] rounded-md"></div>
                </div>
                <p className="text-center">Dec</p>
              </div>
            </div>
          </div>
          {/* Customers */}
          <div className="flex flex-col justify-center items-center h-auto lg:w-[300px] w-full p-5 bg-white">
            <div className="w-full">
              <h3 className="text-lg font-semibold">Customers</h3>
              <p className="text-sm text-slate-500">
                Customers that buy products
              </p>
            </div>
            <div className="h-[180px] w-[180px] rounded-full border-[10px] border-[coral] my-6 flex flex-col justify-center items-center text-4xl font-medium">
              65%{" "}
              <span className="text-sm text-center text-slate-500 mt-1">
                Total <br />
                New Customers
              </span>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              deleniti ducimus et quibusdam.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="mt-10 w-[90%]">
          <div className="flex lg:flex-row flex-col justify-between">
            <div className="">
              <h2 className="text-xl font-semibold">Product Sell</h2>
            </div>
            <div className="lg:flex hidden">
              <input
                type="text"
                className="border border-slate-300 rounded-md placeholder:text-slate-400 placeholder:text-sm pl-5 outline-none text-sm h-[38px] mx-3 "
                placeholder="Search"
              />
              <Select
                value={dpd}
                onChange={setDpd}
                options={options}
                className="w-[150px] h-[0px]"
              />
            </div>
          </div>
          <div className="lg:flex justify-between mt-5 hidden">
            <div className="w-[700px]">
              <p className="text-slate-500">Product Name</p>
            </div>
            <div className="flex justify-between">
              <p className="mx-2 w-[80px] text-slate-500">Stock</p>
              <p className="mx-2 w-[80px] text-slate-500">Price</p>
              <p className="mx-2 w-[80px] text-slate-500">Total Sales</p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between items-center my-10">
            <div className="lg:w-[700px] w-full flex">
              <img
                src={img1}
                alt=""
                className="h-[70px] w-[120px] rounded-lg"
              />
              <div className="px-4">
                <h4 className="text-[17px] font-medium">Abstract 3D</h4>
                <p className="text-slate-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, incidunt.
                </p>
              </div>
            </div>
            <div className="flex justify-between lg:w-auto w-full mt-2">
              <p className="mx-2 w-[80px] text-sm text-slate-500">
                32 in Stock
              </p>
              <p className="mx-2 w-[80px] text-sm font-medium">$ 49.55</p>
              <p className="mx-2 w-[80px] text-sm text-slate-500">20</p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between items-center my-10">
            <div className="lg:w-[700px] w-full flex">
              <img
                src={img2}
                alt=""
                className="h-[70px] w-[120px] rounded-lg"
              />
              <div className="px-4">
                <h4 className="text-[17px] font-medium">
                  Sarphens illustrations
                </h4>
                <p className="text-slate-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, incidunt.
                </p>
              </div>
            </div>
            <div className="flex justify-between lg:w-auto w-full mt-2">
              <p className="mx-2 w-[80px] text-sm text-slate-500">
                52 in stocks
              </p>
              <p className="mx-2 w-[80px] text-sm font-medium">$ 49.55</p>
              <p className="mx-2 w-[80px] text-sm text-slate-500">20</p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between items-center my-10">
            <div className="lg:w-[700px] w-full flex">
              <img
                src={img3}
                alt=""
                className="h-[70px] w-[120px] rounded-lg"
              />
              <div className="px-4">
                <h4 className="text-[17px] font-medium">
                  Dimensional Illustration
                </h4>
                <p className="text-slate-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, incidunt.
                </p>
              </div>
            </div>
            <div className="flex justify-between lg:w-auto w-full mt-2">
              <p className="mx-2 w-[80px] text-sm text-slate-500">
                32 in Stock
              </p>
              <p className="mx-2 w-[80px] text-sm font-medium">$ 49.55</p>
              <p className="mx-2 w-[80px] text-sm text-slate-500">20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
