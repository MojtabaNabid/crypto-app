import styles from "./TableCoins.module.css";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

import { InfinitySpin } from "react-loader-spinner";

function TableCoins({ coins, isLoading }) {
  //   console.log(coins);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <InfinitySpin width="200" color="#3874ff" />
      ) : (
        // <p>is Loading ...</p>
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
              <TableRow coin={coin} key={coin.id} /> // to make code cleaner, TableRow is created
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoins;

function TableRow({
  // this component will only be used in this component, that is the reason I defined it inside of its parent
  coin: {
    // destructuring props
    id, // destructuring again the coin object
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h: price_change, //because its name is too long
    total_volume,
  },
}) {
  return (
    <tr>
      <td>
        <div className={styles.symbol}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      {/* for seperating price numbers toLocaleString() used */}
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>${total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} />
      </td>
    </tr>
  );
}
