import { motion } from "framer-motion"; // Import Framer Motion for animations
import CardIcon from "@/assets/icons/card.svg?react";
import TransferIcon from "@/assets/icons/transfer.svg?react";
import PaypalIcon from "@/assets/icons/paypal.svg?react";
import { formatUSDAmount, formatDate } from "@/utils";
import { useStore } from "@/store/useStore";
import { TransactionType } from "@/types";

export const RecentTransactions = () => {
  const transactions = useStore((state) => state.transactions);

  const colorMapping: Record<TransactionType, string> = {
    [TransactionType.CARD]: "yellow",
    [TransactionType.TRANSFER]: "teal",
    [TransactionType.PAYPAL]: "blue",
  };

  const getColorByType = (type: TransactionType): string => {
    return colorMapping[type] || "yellow"; // Fallback to yellow if type is invalid
  };

  const getIconByType = (type: TransactionType): React.ReactElement => {
    const colorClass = `fill-${getColorByType(type)}`;
    switch (type) {
      case TransactionType.CARD:
        return <CardIcon className={colorClass} />;
      case TransactionType.TRANSFER:
        return <TransferIcon className={colorClass} />;
      case TransactionType.PAYPAL:
        return <PaypalIcon className={colorClass} />;
      default:
        return <CardIcon className={colorClass} />;
    }
  };

  const getAmountColor = (amount: number): string => {
    return amount < 0 ? "red" : "green";
  };

  const getTitle = (
    type: TransactionType,
    amount: number,
    recipient?: string
  ): string => {
    switch (type) {
      case TransactionType.CARD:
        return `Card ${amount < 0 ? "Withdrawal" : "Deposit"}`;
      case TransactionType.TRANSFER:
        return recipient || "Unknown";
      case TransactionType.PAYPAL:
        return `PayPal ${amount < 0 ? "Withdrawal" : "Deposit"}`;
      default:
        return "Transaction";
    }
  };

  // Define animation variants for the list and list items
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of child elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly shifted down
    visible: { opacity: 1, y: 0 }, // Animate to visible and original position
  };

  return (
    <div className="relative size-full py-4 sm:py-[19px]">
      <div className="max-h-full overflow-y-auto hide-scrollbar">
        <motion.ul
          className="flex flex-col w-full"
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          {transactions?.map((transaction, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-4 bg-white rounded-lg py-[5px] px-[18px] sm:px-[25px]"
              variants={itemVariants}
              whileHover={{
                scale: 1.03, // Slightly enlarge on hover
                transition: { duration: 0.2 },
              }}
            >
              <div className="relative flex-shrink-0 rounded-full w-14 h-14 flex items-center justify-center">
                <div
                  className={`absolute inset-0 rounded-full bg-${getColorByType(
                    transaction.type
                  )} opacity-15`}
                ></div>
                <div className="relative z-10">
                  {getIconByType(transaction.type)}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="font-medium text-accent leading-4">
                  {getTitle(
                    transaction.type,
                    transaction.amount,
                    transaction.recipient
                  )}
                </p>
                <p className="text-sm">{formatDate(transaction.date)}</p>
              </div>
              <span
                className={`ml-auto font-medium text-${getAmountColor(
                  transaction.amount
                )}`}
              >
                {formatUSDAmount(transaction.amount, true)}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default RecentTransactions;
