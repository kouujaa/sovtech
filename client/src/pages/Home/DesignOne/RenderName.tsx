import Typography from "@mui/material/Typography";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router";

const RenderName = (params: GridRenderCellParams) => {
  const navigate = useNavigate();
  return (
    <Typography
      onClick={() => {
        navigate(`/design-one/design-one-details/${params.row?.name}`);
      }}
      sx={{
        color: "#1976d2",
        cursor: "pointer",
      }}
    >
      {params.row?.name}
    </Typography>
  );
};

export default RenderName;
