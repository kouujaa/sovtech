import { useParams } from "react-router";
import { BackButton, PageLoadingOverlay, PageTitle } from "src/components";
import { ROUTES } from "src/helpers";
import useSearchData from "../../hooks/useSearchData";
import {
  CardMainWrapper,
  CardSubWrapper,
  EntryText,
  FlexWrapper,
  MainWrapper,
  PageOverlayWrapper,
  SubWrapper,
  TitleText,
} from "./DesignTwoDetails.style";

const DesignTwoDetails = () => {
  const { name } = useParams();
  const { person, loading } = useSearchData(name);

  return (
    <MainWrapper>
      <PageTitle
        render={
          <BackButton
            link={ROUTES.DESIGN_TWO}
            parent="Design-two /"
            child={"Details"}
          />
        }
      />
      <SubWrapper>
        {loading ? (
          <PageOverlayWrapper>
            <PageLoadingOverlay open={loading} />
          </PageOverlayWrapper>
        ) : (
          <CardMainWrapper>
            <CardSubWrapper>
              <FlexWrapper
                initial={{ opacity: 0, x: -1000, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <TitleText variant="h4">Name:</TitleText>
                <EntryText variant="h4">{person.name}</EntryText>
              </FlexWrapper>
              <FlexWrapper
                initial={{ opacity: 0, x: -1000, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <TitleText variant="h4">Mass:</TitleText>
                <span>
                  <EntryText variant="h4">{person.mass}</EntryText>
                </span>
              </FlexWrapper>
              <FlexWrapper
                initial={{ opacity: 0, x: -1000, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <TitleText variant="h4">Gender:</TitleText>
                <span>
                  <EntryText variant="h4">{person.gender}</EntryText>
                </span>
              </FlexWrapper>

              <FlexWrapper
                initial={{ opacity: 0, x: -1000, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <TitleText variant="h4">Height:</TitleText>
                <span>
                  <EntryText variant="h4">{person.height}</EntryText>
                </span>
              </FlexWrapper>
              <FlexWrapper
                initial={{ opacity: 0, x: -1000, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <TitleText variant="h4">Home World:</TitleText>
                <span>
                  <EntryText variant="h4">{person.homeworld}</EntryText>
                </span>
              </FlexWrapper>
            </CardSubWrapper>
          </CardMainWrapper>
        )}
      </SubWrapper>
    </MainWrapper>
  );
};

export default DesignTwoDetails;
