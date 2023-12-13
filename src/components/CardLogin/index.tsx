import { FC, ReactNode } from "react";
import { Card, CardBody, CardHeader, CardTitle } from "./styles";

interface CardLoginProps {
  children: ReactNode | ReactNode[];
  title: string;
}

export const CardLogin: FC<CardLoginProps> = ({ children, title }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};
