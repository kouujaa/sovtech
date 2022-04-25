import Typography from "@mui/material/Typography";
import { useParams } from "react-router";
import { ReactComponent as StarWarsIcon } from "src/assets/images/star-wars-4.svg";
import { BackButton, PageLoadingOverlay, PageTitle } from "src/components";
import { ROUTES } from "src/helpers";
import useSearchData from "../../hooks/useSearchData";
import {
  DetailBoxWrapper,
  DetailCardContentWrapper,
  DetailCardWrapper,
  DetailContentWrapper,
  DetailFlexDivWrapper,
  DetailMainWrapper,
  DetailOptionWrapper,
  DetailOverlayWrapper,
  EmptyMessageWrapper,
} from "./DesignOneDetails.style";

const DesignOneDetails = () => {
  const { name } = useParams();
  const { person, loading } = useSearchData(name);
  return (
    <DetailMainWrapper>
      <PageTitle
        render={
          <BackButton
            link={ROUTES.DESIGN_ONE}
            parent="Design-one /"
            child={"Details"}
          />
        }
      />
      <DetailContentWrapper>
        {loading ? (
          <DetailOverlayWrapper>
            <PageLoadingOverlay open={loading} />
          </DetailOverlayWrapper>
        ) : (
          <DetailCardWrapper>
            <DetailBoxWrapper>
              <DetailCardContentWrapper>
                <div style={{ display: "flex", width: "100%" }}>
                  <DetailOptionWrapper variant="h4">Name:</DetailOptionWrapper>
                  <Typography variant="h4" color="text.secondary">
                    {person.name}
                  </Typography>
                </div>
                <DetailFlexDivWrapper>
                  <DetailOptionWrapper variant="h4">Mass:</DetailOptionWrapper>

                  <Typography variant="h4" color="text.secondary">
                    {person.mass}
                  </Typography>
                </DetailFlexDivWrapper>
                <DetailFlexDivWrapper>
                  <DetailOptionWrapper variant="h4">
                    Gender:
                  </DetailOptionWrapper>

                  <Typography variant="h4" color="text.secondary">
                    {person.gender}
                  </Typography>
                </DetailFlexDivWrapper>

                <DetailFlexDivWrapper>
                  <DetailOptionWrapper variant="h4">
                    Height:
                  </DetailOptionWrapper>

                  <Typography variant="h4" color="text.secondary">
                    {person.height}
                  </Typography>
                </DetailFlexDivWrapper>
                <DetailFlexDivWrapper>
                  <DetailOptionWrapper variant="h4">
                    Home World:
                  </DetailOptionWrapper>

                  <Typography variant="h4" color="text.secondary">
                    {person.homeworld}
                  </Typography>
                </DetailFlexDivWrapper>
              </DetailCardContentWrapper>
            </DetailBoxWrapper>
          </DetailCardWrapper>
        )}
        <EmptyMessageWrapper>
          <StarWarsIcon />
        </EmptyMessageWrapper>
      </DetailContentWrapper>
    </DetailMainWrapper>
  );
};

export default DesignOneDetails;
