import React from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { formatCardNumber, formatUSDAmount } from "@/utils";
import ChipIcon from "@/assets/icons/chip.svg?react";

type CreditCardProps = {
  id: number;
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  theme: "dark" | "light";
};

export const CreditCard: React.FC<CreditCardProps> = ({
  id,
  balance,
  cardHolder,
  validThru,
  cardNumber,
  theme,
}) => {
  const isDark = theme === "dark";
  const accentTextClass = isDark ? "" : "text-text-accent";

  const navigate = useNavigate();

  const handleCreditCardClick = () => {
    navigate(`/credit-cards/${id}`);
  };

  return (
    <div
      className={`transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex flex-col justify-between size-full rounded-3xl overflow-hidden cursor-pointer font-lato pt-4 sm:pt-6 ${
        isDark ? "bg-card-gradient text-white" : "bg-white text-text border"
      }`}
      onClick={handleCreditCardClick}
    >
      <div className="flex justify-between pl-[20px] sm:pl-[26px] pr-5 sm:pr-6">
        <div>
          <p className="text-xs">Balance</p>
          <p className={`text-base text-xl font-bold ${accentTextClass}`}>
            <CountUp
              start={0}
              end={balance}
              duration={1.5}
              separator=","
              prefix="$"
              formattingFn={formatUSDAmount}
            />
          </p>
        </div>
        <ChipIcon
          className={`max-sm:w-[29px] mt-1 ${
            isDark ? "fill-white" : "fill-gray-700"
          }`}
        />
      </div>
      <div className="flex pl-[20px] sm:pl-[26px] pr-6">
        <div>
          <p className={`text-xs ${isDark ? "opacity-70" : ""}`}>CARD HOLDER</p>
          <p className={`font-semibold ${accentTextClass}`}>{cardHolder}</p>
        </div>
        <div className="mx-auto">
          <p className={`text-xs ${isDark ? "opacity-70" : ""}`}>VALID THRU</p>
          <p className={`font-semibold ${accentTextClass}`}>{validThru}</p>
        </div>
      </div>

      <div
        className={`h-[50px] sm:h-[70px] pl-[26px] pr-6 py-5 mt-1 flex justify-between items-center bg-card-gradient-bottom ${
          isDark ? "" : "border-t"
        }`}
      >
        <div
          className={`text-xl sm:text-2xl font-mono font-semibold tracking-wide ${accentTextClass}`}
        >
          {formatCardNumber(cardNumber)}
        </div>
        <div className="flex justify-end">
          <div
            className={`size-[20px] sm:size-[30px] rounded-full opacity-50 ${
              isDark ? "bg-white" : "bg-[#9199AF]"
            } flex items-center justify-center`}
          ></div>
          <div
            className={`size-[20px] sm:size-[30px] ml-[-11px] sm:ml-[-16px] rounded-full opacity-50 ${
              isDark ? "bg-white" : "bg-[#9199AF]"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
