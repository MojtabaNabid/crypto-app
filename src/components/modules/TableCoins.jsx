import styles from "./TableCoins.module.css";
import TableRow from "./TableRow";

import { RotatingLines } from "react-loader-spinner";

function TableCoins({ coins, isLoading, currency, setChart }) {

  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines height="96" width="96" color="#3874ff" strokeWidth="4" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} currency={currency} setChart={setChart}/> // to make code cleaner, TableRow is created
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoins;
