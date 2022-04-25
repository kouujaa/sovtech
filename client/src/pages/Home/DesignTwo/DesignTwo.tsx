import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { CustomPagination, PageLoadingOverlay } from "src/components";
import usePeopleData from "../hooks/usePeopleData";
import {
  DesignTwoBoxWrapper,
  DesignTwoCardContentWrapper,
  DesignTwoCardFlexedWrapper,
  DesignTwoCardWrapper,
  DesignTwoMainWrapper,
  DesignTwoOptionTitleWrapper,
  DesignTwoThemeWrapper,
} from "./DesignTwo.styles";

const label = { inputProps: { "aria-label": "Switch demo" } };
const DesignTwo = () => {
  const navigate = useNavigate();
  const { people, loading, count, refetch } = usePeopleData(1);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [page, setPage] = useState<number>(1);

  const pageTheme = createTheme({ palette: { mode: theme } });
  const rows = useMemo(() => {
    return people?.map((person) => {
      return {
        ...person,
        id: person?.name?.split(" ").pop() + person?.height + person?.mass,
      };
    });
  }, [people]);

  const length = Math.floor(count / 10);

  const onChangePagination = (e: React.ChangeEvent<any>, page: number) => {
    refetch({
      page: page || 1,
    });
    setPage(page);
  };

  return (
    <DesignTwoMainWrapper>
      <Typography variant="h2">Design Two</Typography>
      <DesignTwoThemeWrapper>
        <Typography>Light Theme</Typography>
        <Switch
          {...label}
          defaultChecked
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        <Typography>Dark Theme</Typography>
      </DesignTwoThemeWrapper>

      <motion.div initial={{ x: 250 }} animate={{ x: 0 }}>
        {[pageTheme].map((theme, index) => (
          <Grid item xl={8} key={index}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  p: 2,
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(auto-fit, minmax(200px, 1fr))",
                    md: "repeat(auto-fit, minmax(300px, 1fr))",
                    lg: "1fr 1fr 1fr 1fr 1fr",
                    xl: "1fr 1fr 1fr 1fr 1fr",
                  },
                  gap: 8,
                }}
              >
                {loading ? (
                  <div
                    style={{
                      height: "50vh",
                    }}
                  >
                    <PageLoadingOverlay open={loading} />
                  </div>
                ) : (
                  rows?.map((person) => (
                    <DesignTwoCardWrapper
                      onClick={() => {
                        navigate(
                          `/design-two/design-two-details/${person?.name}`
                        );
                      }}
                    >
                      <DesignTwoBoxWrapper
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                        initial={{ x: 250 }}
                        animate={{ x: 0 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <DesignTwoCardContentWrapper>
                          <div style={{ display: "flex", width: "100%" }}>
                            <DesignTwoOptionTitleWrapper>
                              Name:
                            </DesignTwoOptionTitleWrapper>
                            <Typography
                              variant="subtitle2"
                              color="text.secondary"
                            >
                              {person?.name}
                            </Typography>
                          </div>
                          <DesignTwoCardFlexedWrapper>
                            <DesignTwoOptionTitleWrapper>
                              Mass:
                            </DesignTwoOptionTitleWrapper>

                            <Typography
                              variant="subtitle2"
                              color="text.secondary"
                            >
                              {person?.mass}
                            </Typography>
                          </DesignTwoCardFlexedWrapper>
                          <DesignTwoCardFlexedWrapper>
                            <DesignTwoOptionTitleWrapper>
                              Gender:
                            </DesignTwoOptionTitleWrapper>

                            <Typography
                              variant="subtitle2"
                              color="text.secondary"
                            >
                              {person?.gender}
                            </Typography>
                          </DesignTwoCardFlexedWrapper>

                          <DesignTwoCardFlexedWrapper>
                            <DesignTwoOptionTitleWrapper>
                              Height:
                            </DesignTwoOptionTitleWrapper>

                            <Typography
                              variant="subtitle2"
                              color="text.secondary"
                            >
                              {person?.height}
                            </Typography>
                          </DesignTwoCardFlexedWrapper>
                          <DesignTwoCardFlexedWrapper>
                            <DesignTwoOptionTitleWrapper>
                              Home World:
                            </DesignTwoOptionTitleWrapper>

                            <Typography
                              variant="subtitle2"
                              color="text.secondary"
                            >
                              {person?.homeworld}
                            </Typography>
                          </DesignTwoCardFlexedWrapper>
                        </DesignTwoCardContentWrapper>
                      </DesignTwoBoxWrapper>
                    </DesignTwoCardWrapper>
                  ))
                )}
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </motion.div>
      <CustomPagination
        length={length}
        page={page}
        onNext={onChangePagination}
      />
    </DesignTwoMainWrapper>
  );
};

export default DesignTwo;
