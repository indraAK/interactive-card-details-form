import { createContext, useState, useContext } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [card, setCard] = useState({
    cardholderName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: 123,
  });

  const value = { card, setCard };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export const useCard = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("useCard must be used within a CardProvider");
  }

  return context;
};
