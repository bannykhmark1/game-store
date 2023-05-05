import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <div className="wrapper">
      <div className="flex border text-sm uppercase">
        <div className="flex items-center mr-8 ml-4">Steam Pay</div>
        <div className="flex w-16 h-16 bg-neutral-100 border items-center justify-center">
          <RxHamburgerMenu className="w-6 h-8" />
        </div>
        <div className="flex items-center">
          <ul className="flex ml-8">
            <li className="flex ml-4">
              <span>Каталог продукции</span>
              <RiArrowDownSFill className="flex self-center -mt-1 ml-1 w-5 h-5 fill-neutral-300" />
            </li>
            <li className="ml-4">Поддержка</li>
            <li className="ml-4">Мои покупки</li>
            <li className=" flex ml-4">
              <AiOutlineSearch className="flex -mt-2 w-6 h-8 fill-orange-600 mr-4" />
              <span className="">Поиск игр</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
