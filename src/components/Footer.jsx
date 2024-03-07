import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-6 flex gap-3 flex-col">
      <ul className="flex justify-between text-sm py-8">
        <li className="flex flex-col gap-4">
          <h3 className="font-semibold">Biz haqimizda</h3>
          <span className="text-gray-400">Topshirish punktlari</span>
          <span className="text-gray-400">Vakansiyalar</span>
        </li>
        <li className="flex flex-col gap-4">
          <h3 className="font-semibold">Foydalanuvchilarga</h3>
          <span className="text-gray-400">Biz bilan bog'laning</span>
          <span className="text-gray-400">Savol-Javob</span>
        </li>
        <li className="flex flex-col gap-4">
          <h3 className="font-semibold">Tadbirkorlarga</h3>
          <span className="text-gray-400">Uzumda soting</span>
          <span className="text-gray-400">Sotuvchi kabenitiga kirish</span>
        </li>
        <li className="flex flex-col gap-4">
          <h3 className="font-semibold">Ilovani yuklab olish</h3>
          <div className="flex gap-2">
            <div className="flex gap-1 items-center">
              <FaApple size={25} />
              <span className="font-medium">AppStore</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaGooglePlay size={25} />
              <span className="font-medium">Google Play</span>
            </div>
          </div>
        </li>
      </ul>
      <div>
        <hr className="mb-2" />
        <div className="flex justify-between text-sm">
          <div className="flex gap-4 font-semibold text-sm">
            <span>Maxfiylik kelishuvi</span>
            <span>Foydalanuvchi kelishuvi</span>
          </div>
          <p className="text-[11px] text-gray-400">
            «2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
            himoyalangan»
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
