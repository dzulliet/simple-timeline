import styled from "styled-components";

export function DayView() {
  return <Wrapper>tady bude timeline</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  border: ${({ theme }) => theme.color.electricBlue} solid 1px;
  border-radius: 8px;
`;
