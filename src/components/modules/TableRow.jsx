import styles from "./TableCoins.module.css";

import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

function TableRow(props) {
  const {
    coin: {
      id,
      image,
      name,
      symbol,
      current_price,
      price_change_percentage_24h: price_change, //because its name is too long
      total_volume,
    },
    currency,
    setChart,
  } = props;

  const currencyHandle = (currency) => {
    if (currency === "usd") return "$";
    else if (currency === "eur") return "€";
    else if (currency === "jpy") return "¥";
  };

  const showHandler = () => {
    setChart(true)
  }

  return (
    <tr>
      <td>
        <div className={styles.symbol}  onClick={showHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currencyHandle(currency)}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {/* one of the coins' price_change is null, so I have to use "N/A" instead */}
        {price_change !== null ? price_change.toFixed(2) + "%" : "N/A"}
      </td>
      <td>
        {currencyHandle(currency)}
        {total_volume.toLocaleString()}
      </td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} />
      </td>
    </tr>
  );
}

export default TableRow;
