import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts);
    const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2);
  return (
    <>
      <h2>Your Balance</h2>
      <h3>${total}</h3>
    </>
  );
};

export default Balance;
