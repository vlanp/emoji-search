const Line = ({ title, symbol }: { title: string; symbol: string }) => {
  const handleClick = () => {
    navigator.clipboard.writeText(symbol);
  };

  return (
    <p className="line" onClick={handleClick}>
      {symbol} {title}
    </p>
  );
};

export default Line;
