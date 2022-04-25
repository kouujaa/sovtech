import Typography from "@mui/material/Typography";
import { GridEnrichedColDef } from "@mui/x-data-grid";
import { useEffect, useMemo, useState } from "react";
import { SearchBar, DesignOneTable } from "src/components";
import usePeopleData from "../hooks/usePeopleData";
import {
  DesignOneMainWrapper,
  RightToolBarWrapper,
  SearchDivWrapper,
} from "./DesignOne.styles";
import RenderName from "./RenderName";

const DesignOne = () => {
  const { people, loading, count, refetch } = usePeopleData(1);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {}, []);
  const rows = useMemo(() => {
    return people?.map((person) => {
      return {
        ...person,
        id: person?.name?.split(" ").pop() + person?.height + person?.mass,
      };
    });
  }, [people]);
  const columns: GridEnrichedColDef[] = useMemo(
    () => [
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        disableColumnMenu: true,
        sortable: false,
        renderCell: RenderName,
      },
      {
        field: "height",
        headerName: "Height",
        flex: 0.4,
        disableColumnMenu: true,
        sortable: false,
      },
      {
        field: "mass",
        headerName: "Mass",
        flex: 0.4,
        disableColumnMenu: true,
        sortable: false,
      },
      {
        field: "gender",
        headerName: "Gender",
        flex: 1,
        disableColumnMenu: true,
        sortable: false,
      },
      {
        field: "homeworld",
        headerName: "Homeworld",
        flex: 1.5,
        disableColumnMenu: true,
        sortable: false,
      },
    ],
    []
  );

  const take = 10;

  const onChangePagination = (page: number) => {
    refetch({
      page: page || 1,
    });
    setPage(page);
  };

  return (
    <DesignOneMainWrapper>
      <Typography variant="h2">Design One</Typography>
      <DesignOneTable
        columns={columns}
        rows={rows || []}
        rightToolBar={
          <RightToolBarWrapper>
            <SearchDivWrapper>
              <SearchBar width="100%" handleSearch={(e) => {}} />
            </SearchDivWrapper>
          </RightToolBarWrapper>
        }
        pagination
        pageSize={take}
        rowCount={count || 1}
        loading={loading}
        paginationMode="server"
        onPageChange={onChangePagination}
        rowsPerPageOptions={[take]}
        page={page}
      />
    </DesignOneMainWrapper>
  );
};

export default DesignOne;
