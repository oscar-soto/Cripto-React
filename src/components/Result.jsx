import styled from '@emotion/styled';

// Styles
const ResultDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
  color: #fff;
  font-family: 'Lato', sans-serif;
`;
const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Price = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;
const Image = styled.img`
  display: block;
  width: 150px;
`

export const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;

  return (
    <ResultDiv>
      <Image 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt="imagen cripto" 
      />

      <div>
        <Price>
          El precio es de: <span>{PRICE}</span>
        </Price>
        <Text>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Precio más bajo del día: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Variación: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Última Actualización: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </ResultDiv>
  );
};
