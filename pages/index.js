import { ApolloProvider, useQuery, useMutation } from "@apollo/react-hooks";
import {client} from '../clients/index'
import Header from '../components/Header'

const App = ({ data }) => {

  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>NextJS GraphQL Apollo App</h1>
      </div>
    </ApolloProvider>
  );
};

export default App;
