import styled from '@emotion/styled';
import { useSelectCoin } from '../hooks/useSelectCoin';

import { coins } from '../data/coins';

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

export const Form = () => {
  const [coin, SelectCoins] = useSelectCoin('Elige tu moneda', coins);

  return (
    <form>
      <SelectCoins />
      <InputSubmit type="submit" value="cotizar" />
    </form>
  );
};
