function TableCoins({ coins }) {
  console.log(coins);
  return (
    <div>
      {coins.map((coin) => (
        <p key={coin.id}>{coin.id}</p>
      ))}
    </div>
  );
}

export default TableCoins;
