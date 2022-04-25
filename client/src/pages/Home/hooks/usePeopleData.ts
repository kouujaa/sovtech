import { useQuery } from "@apollo/client";
import { GET_PEOPLE } from "../data/queries";

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

const usePeopleData = (page) => {
  const { data, loading, refetch } = useQuery(GET_PEOPLE, {
    variables: {
      page,
    },
  });

  const people = data?.people?.persons;
  const count = data?.people?.count;
  const next = data?.people?.next;
  const previous = data?.people?.previous;
  return { people, loading, count, next, previous, refetch };
};

export default usePeopleData;
