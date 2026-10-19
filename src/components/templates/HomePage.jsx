import { useEffect } from "react"

function HomePage() {
    useEffect(() => {
        fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&x_cg_demo_api_key=CG-Hzavwwm5QfMw8sWVPFPyzVfh"
        )
        .then(res => res.json())
        .then(json => console.log(json))
    }, []);


  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default HomePage
 