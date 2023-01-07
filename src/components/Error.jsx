import styled from "@emotion/styled"

const Text = styled.div`
  padding: 15px;
  color: #FFF;
  font-size: 22px;
  font-family: 'Lasto', sans-serif;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  background-color: #B7322C;
`

export const Error = ({children}) => {
  return (
    <Text>
      {children}
    </Text>
  )
}
