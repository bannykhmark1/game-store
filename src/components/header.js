import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCurrencyRuble } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
export default function Header() {
  return (
    <>
      <div className="flex justify-between text-sm uppercase font-bold mx-80">
        <div className="flex">
          <div className="cursor-pointer flex items-center mr-8 ml-8">
            Steam Pay
          </div>
          <div className="transition flex w-16 h-16  bg-neutral-100 border items-center justify-center ">
            <RxHamburgerMenu className=" cursor-pointer w-6 h-8" />
          </div>
          <div className="flex items-center">
            <ul className="flex ml-8">
              <li className="cursor-pointer flex ml-4">
                <span className="cursor-pointer bg-clip-text hover:bg-gradient-to-br hover:text-red-500 transition-all">
                  Каталог продукции
                </span>
                <RiArrowDownSFill className="cursor-pointer flex self-center -mt-1 ml-1 w-5 h-5 fill-neutral-300 " />
              </li>
              <li className="ml-4 cursor-pointer">Поддержка</li>
              <li className="ml-4 cursor-pointer">Мои покупки</li>
              <li className="flex ml-4">
                <div className="flex self-center cursor-pointer">
                  <AiOutlineSearch className="flex self-center fill-orange-400 mr-4" />
                  <span className="">Поиск игр</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end items-center mr-8">
          <div className="transition hover:fill-neutral-100 h-full flex justify-center items-center mr-4 cursor-pointer">
            <MdCurrencyRuble className=" w-6 h-8" />
            <RiArrowDownSFill className="flex self-center -mt-1 w-5 h-5 fill-neutral-300" />
          </div>
          <div>
            <RiShoppingCartLine className="w-6 h-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}
