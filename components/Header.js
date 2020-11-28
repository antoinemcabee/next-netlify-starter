import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_QUERY = gql`
  query GetOrgById($orgId: ID!){
    getOrgById(orgId: $orgId) {
      orgId
      name
    }
  }
`;

export default function Header({ title }) {

  const { loading, error, data } = useQuery(GET_QUERY, {
    variables: {
      orgId: 2
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  const org = data.getOrgById
  return (
    <>
      <h1>{org.name}</h1>
      {org.events.map(event => (
        <>
          <h3>{event.name}</h3>
          {event.positions.map(pos => (
            <p key={event.name}>{pos.posId}</p>
          ))}
        </>
      ))}
    </>
  )
}
