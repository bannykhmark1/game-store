import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io";

export default function Header() {
  return (
    <div className="">
      <div className="">SteamPay</div>
      <div>
        <RxHamburgerMenu className="w-23 h-16" />
      </div>
      <div>
        <ul>
          <li className="flex">
            <span>Каталог продукции</span>
            <RiArrowDownSFill className=" self-end" />
          </li>
          <li>Поддержка</li>
          <li>Мои покупки</li>
          <li>
            <IoSearchOutline />
            <span>Поиск игр</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
