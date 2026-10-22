import { useEffect, useState } from "react";

import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // lifting state up, because we want to use this state both in pagination and in cryptoApi.js
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true); // every time that page loads, loading will show up again
    const getData = async () => {
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };

    getData();
  }, [page]); // with this dependency, whenever page changed, it will fetch data again

  return (
    <div>
      <TableCoins coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
