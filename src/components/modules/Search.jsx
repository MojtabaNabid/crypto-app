import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

import styles from "./Search.module.css"
import { searchCoin } from "../../services/cryptoApi";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setCoins([]);
    if (!text) {
      setLoading(false);
      return;
    }

    const search = async () => {
      try {
        const res = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        const json = await res.json(); 

        if (json.coins) {
          setLoading(false);
          setCoins(json.coins);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") alert(error.message);
      }
    };
    setLoading(true);
    search();
    // console.log(coins);
    return () => controller.abort();
  }, [text]);

  return (
    <div className={styles.searchBox} >
      <input
        type="text"
        placeholder="search"
        name="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        id="search"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {(!!coins.length || loading) && (
        <div className={styles.searchResult} >
        {loading && (
          <RotatingLines
            height="50"
            width="50"
            color="#3874ff"
            strokeWidth="2"
          />
        )}
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              <img src={coin.thumb} />
              <p>{coin.name}</p>
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
}

export default Search;
