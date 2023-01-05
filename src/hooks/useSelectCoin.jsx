import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
  display: block;
  margin: 15px 0;
  color: #FFF;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
`
const Select = styled.select`
  width: 100%;
  padding: 14px;
  font-size: 18px;
  border-radius: 10px;
`
export const useSelectCoin = (label, options) => {

  const [state, setState] = useState('') 
  const SelectCoins = () => (
    <>
      <Label>{label}</Label>
      <Select 
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value="">Seleccione</option>
        {
          options.map(op => 
              <option 
                key={op.id} 
                value={op.id}
              >
                {op.name}
              </option>
            )
        }
      </Select>
    </>
  );

  return [state, SelectCoins];
};
