import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useSelectCoin } from '../hooks/useSelectCoin';

import { coins } from '../data/coins';
import { Error } from './error';

const InputSubmit = styled.input`
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #9497ff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

export const Form = ({setCoins}) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  const [coin, SelectCoins] = useSelectCoin('Elige tu Moneda', coins);
  const [cryptoCurrency, SelectCryptoCurrencys] = useSelectCoin(
    'Elige tu Ciptomoneda',
    cryptos
  );

  useEffect(() => {
    const requesAPI = async () => {
      const URL = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const resp = await fetch(URL);
      const result = await resp.json();

      const CryptoArray = result.Data.map((crypto) => {
        const obj = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };
        return obj;
      });

      setCryptos(CryptoArray);
    };

    requesAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validated without empty
    if ([coin, cryptoCurrency].includes('')) {
      setError(true);
      return;
    }

    setError(false);
    setCoins({
      coin,
      cryptoCurrency
    })
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}

      <form onSubmit={handleSubmit}>
        <SelectCoins />
        <SelectCryptoCurrencys />
        <InputSubmit type="submit" value="cotizar" />
      </form>
    </>
  );
};
