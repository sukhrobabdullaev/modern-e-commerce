import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-6 md:mb-0 smm:mb-10 flex gap-3 flex-col">
      <div className="flex md:gap-10 smm:justify-between md:flex-row text-sm py-8">
        <div className="flex smm:flex-col md:flex-row">
          <div className="flex flex-col md:gap-4 smm:gap-2">
            <h3 className="font-semibold">Biz haqimizda</h3>
            <span className="text-gray-400">Topshirish punktlari</span>
            <span className="text-gray-400">Vakansiyalar</span>
          </div>
          <div className="flex flex-col md:gap-4 smm:gap-2">
            <h3 className="font-semibold">Foydalanuvchilarga</h3>
            <span className="text-gray-400">Biz bilan bog'laning</span>
            <span className="text-gray-400">Savol-Javob</span>
          </div>
        </div>
        <div className="flex smm:flex-col md:flex-row">
          <div className="flex flex-col md:gap-4 smm:gap-2">
            <h3 className="font-semibold">Tadbirkorlarga</h3>
            <span className="text-gray-400">Uzumda soting</span>
            <span className="text-gray-400">Sotuvchi kabenitiga kirish</span>
          </div>
          <div className="flex flex-col md:gap-4 smm:gap-2">
            <h3 className="font-semibold">Ilovani yuklab olish</h3>
            <div className="flex smm:flex-col md:flex-row gap-2">
              <div className="flex gap-1 items-center">
                <FaApple size={25} />
                <span className="font-medium">AppStore</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaGooglePlay size={25} />
                <span className="font-medium">Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr className="mb-2" />
        <div className="flex md:justify-between md:flex-row smm:flex-col smm:justify-center smm:items-center text-sm smm:gap-2 smm:text-center">
          <div className="flex md:gap-4 md:flex-row smm:flex-col smm:gap-2 font-semibold text-sm">
            <span>Maxfiylik kelishuvi</span>
            <span>Foydalanuvchi kelishuvi</span>
          </div>
          <p className="text-[11px] text-gray-400 smm:text-center">
            «2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
            himoyalangan»
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
