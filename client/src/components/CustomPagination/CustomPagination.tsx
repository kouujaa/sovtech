import React from "react";
import useStyles, { StyledPagination } from "./CustomPagination.styles";

export interface Props {
  onNext: (e: React.ChangeEvent<any>, page: number) => any;
  length: number;
  page: number;
}

const CustomPagination: React.FC<Props> = ({ onNext, length, page }) => {
  const classes = useStyles();
  return (
    <div data-testid="paginationComp">
      <StyledPagination
        shape="rounded"
        onChange={onNext}
        className={classes.root}
        count={length}
        page={page}
      />
    </div>
  );
};

export default CustomPagination;
