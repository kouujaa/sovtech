import { useQuery } from "@apollo/client";
import { SEARCH_PEOPLE } from "../data/queries";

export interface ConversationCounts {
  id: number;
  rescom: number;
  leasing: number;
  other: number;
}

export interface MyInboxCount {
  id: number;
  claimed_id: number;
  count: number;
}

const useSearchData = (name) => {
  const { data, loading } = useQuery(SEARCH_PEOPLE, {
    variables: {
      name,
    },
  });
  const person = data?.searchPerson?.persons?.[0] || [];
  return { person, loading };
};

export default useSearchData;
