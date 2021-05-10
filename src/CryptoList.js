import React from 'react';
import './CryptoList.css';

function CryptoList(props) {
    let cryptoList = props.cryptoList;

    let liElements = cryptoList.map((cryptoObj) => {

        return (
            <li key={cryptoObj.currency}>
                <span className="cryptoLabel">Last rate:</span>
                <span className={`CryptoRate ${cryptoObj.cssClass}`}>{cryptoObj.lastRate} {cryptoObj.htmlArray}</span>
                <span className="currencyTicker">{cryptoObj.currency}</span>
                <span className="currencySymbol">[{cryptoObj.symbol}]</span>
            </li>
        );
    })

    return (
        <div className="cryptoList">
            <ul className="theList">
                {liElements}
            </ul>
        </div>
    );
}

export default CryptoList;