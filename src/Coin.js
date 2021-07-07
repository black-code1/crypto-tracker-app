

const Coin = ({name,currentPrice,symbol,marketCap,totalVolume,image,priceChangePercentage24h}) => 
{
  
  return (
    <div>
      <div>
        <img src={image} alt={name + " image"} />
        <h1>{name}</h1>
        <p>{symbol}</p>  
      </div>    
      <div>
        <p>${currentPrice}</p>
        <p>${totalVolume}</p>

        {priceChangePercentage24h < 0 ? (
          <p>{priceChangePercentage24h.toFixed(2)}%</p>
        ) : (
          <p>{priceChangePercentage24h.toFixed(2)}%</p>
        )}

        <p>${marketCap}</p>

      </div>
    </div>
  )
}

export default Coin
