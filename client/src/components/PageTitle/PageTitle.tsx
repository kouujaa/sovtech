import { FC } from "react";
import { Wrapper, Title } from "./PageTitle.styles";

interface Props {
  title?: string;
  render?: React.ReactNode;
}

const PageTitle: FC<Props> = ({ title, render }) => {
  return (
    <Wrapper>
      {!!title && (
        <Title variant="h4" m={1}>
          {title}
        </Title>
      )}
      {render}
    </Wrapper>
  );
};

export default PageTitle;
