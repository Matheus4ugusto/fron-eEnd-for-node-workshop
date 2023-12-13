import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.black.pure};
  padding: 16px;
  border-radius: 6px;
  width: 350px;
`;

export const CardHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.pure};
  width: 100%;
  padding: 4;
`;

export const CardTitle = styled.h2``;

export const CardBody = styled.div``;
