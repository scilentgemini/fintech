import { useFormatCurrency } from "@/hooks/use-format-currency";
import {
  HandCoins,
  Landmark,
  LucideLandmark,
  PiggyBank,
  Wallet,
  Wallet2,
} from "lucide-react";

export default function TransactionItem({
  type,
  category,
  description,
  amount,
}) {
  const typesMap = {
    Income: {
      icon: HandCoins,
      colors: "text-green-500 dark:text-green-400",
    },
    Expenses: {
      icon: Wallet,
      colors: "text-red-500 dark:text-red-400",
    },
    Savings: {
      icon: PiggyBank,
      colors: "text-indigo-500 dark:text-indigo-400",
    },
    Investments: {
      icon: Landmark,
      colors: "text-yellow-500 dark:text-yellow-400",
    },
  };

  const IconComponenet = typesMap[type].icon;
  const colors = typesMap[type].colors;

  const formattedAmount = useFormatCurrency(amount);

  return (
    <div className="w-full flex items-center">
      <div className="flex items-center mr-4 grow">
        <IconComponenet className={`${colors} mr-2 w-4 h-4 hidden sm:block`} />
        <span>{description}</span>
      </div>
      <div className="min-w-[150px] items-center hidden md:flex">
        {category && (
          <div className="rounded-md text-xs bg-gray-700 dark:bg-gray-100 text-gray-100 dark:text-black px-2 py-0.5">
            {category}
          </div>
        )}
      </div>
      <div className="min-w-[70px] text-right">{formattedAmount}</div>
      <div className="min-w-[50px] flex justify-end">...</div>
    </div>
  );
}
