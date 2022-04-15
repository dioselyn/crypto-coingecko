import React from "react";



const CoinRow = ({coin, index}) => {
    const formatPrice = (price) =>
    new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(price);

    const formatDecimal = (price) =>
    new Intl.NumberFormat("en-EN", {
      style: "decimal",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(price);

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <img src={coin.image} alt={coin.name} style={{width: '30px'}} className="img-fluid me-4"/>
                <span>{coin.name}</span>
                <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
            </td>
            <td>{formatPrice(coin.current_price)}</td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>{coin.price_change_percentage_24h.toFixed(1)+'%'}</td>
            <td>${formatDecimal(coin.total_volume)}</td>
        </tr>
    )
}

export { CoinRow };