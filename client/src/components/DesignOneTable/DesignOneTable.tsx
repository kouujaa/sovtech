import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { FC } from "react";
import {
  DataGridWrapper,
  MainWrapper,
  RightToolBarWrapper,
  ToolBarWrapper,
} from "./DesignOneTable.styles";

const DEFAULT_NO_OF_ROWS = 10;
interface DesignOneTableProps extends DataGridProps {
  rightToolBar?: React.ReactNode;
  disableSelectionOnClick?: boolean;
  bgColor?: string;
  enableExport?: boolean;
}
const DesignOneTable: FC<DesignOneTableProps> = ({
  rightToolBar,
  disableSelectionOnClick,
  bgColor,
  enableExport,
  ...rest
}) => {
  return (
    <MainWrapper>
      {rightToolBar && (
        <ToolBarWrapper>
          <RightToolBarWrapper>{rightToolBar}</RightToolBarWrapper>
        </ToolBarWrapper>
      )}
      <DataGridWrapper bgColor={bgColor}>
        <DataGrid
          {...rest}
          style={{ border: "none" }}
          pageSize={DEFAULT_NO_OF_ROWS}
          disableSelectionOnClick={disableSelectionOnClick ?? true}
        />
      </DataGridWrapper>
    </MainWrapper>
  );
};

export default DesignOneTable;
