import { motion } from "framer-motion"; // Import Framer Motion for animations
import CardIcon from "@/assets/icons/card.svg?react";
import TransferIcon from "@/assets/icons/transfer.svg?react";
import PaypalIcon from "@/assets/icons/paypal.svg?react";
import { formatUSDAmount, formatDate } from "@/utils";

export const RecentTransactions = () => {
  enum TransactionType {
    CARD = "card",
    TRANSFER = "transfer",
    PAYPAL = "paypal",
  }

  interface Transaction {
    type: TransactionType;
    date: number; // Timestamp format
    amount: number;
    recipient?: string; // For PAYPAL and TRANSFER
  }

  const transactions: Transaction[] = [
    {
      type: TransactionType.CARD,
      date: 1611792000000, // 28 January 2021
      amount: -850,
    },
    {
      type: TransactionType.PAYPAL,
      date: 1611532800000, // 25 January 2021
      amount: 2500,
      recipient: "John Doe",
    },
    {
      type: TransactionType.TRANSFER,
      date: 1611187200000, // 21 January 2021
      amount: 5400,
      recipient: "Jane Smith",
    },
  ];

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
    return amount < 0 ? "negative" : "positive";
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
    <motion.ul
      className="p-4 sm:p-6 flex flex-col justify-between size-full"
      initial="hidden"
      animate="visible"
      variants={listVariants}
    >
      {transactions.map((transaction, index) => (
        <motion.li
          key={index}
          className="flex items-center gap-4 bg-white rounded-lg"
          variants={itemVariants}
          whileHover={{
            scale: 1.03, // Slightly enlarge on hover
            transition: { duration: 0.2 },
          }}
        >
          <div className="relative flex-shrink-0 rounded-full size-[55px] flex items-center justify-center">
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
            <p className="text-sm text-gray-500">
              {formatDate(transaction.date)}
            </p>
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
  );
};

export default RecentTransactions;
