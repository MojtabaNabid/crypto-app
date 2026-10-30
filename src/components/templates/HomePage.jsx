import { useEffect, useState } from "react";

import { getCoinList } from "../../services/cryptoApi";
import TableCoins from "../modules/TableCoins";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // lifting state up, because we want to use this state both in pagination and in cryptoApi.js
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);
  
  
  useEffect(() => {
    setIsLoading(true); // every time that page loads, loading will show up again
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [page, currency]); // with this dependency, whenever page changed, it will fetch data again

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoins coins={coins} isLoading={isLoading} currency={currency} setChart={setChart}/>
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart}/>}
    </div>
  );
}

export default HomePage;
