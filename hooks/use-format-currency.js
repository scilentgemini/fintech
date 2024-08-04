import { useMemo } from "react";

export const useFormatCurrency = (amount) => {
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-NP", {
      style: "currency",
      currency: "NPR",
    }).format(amount);

    return useMemo(
        () => formatCurrency(amount),
        [amount]
    )
};