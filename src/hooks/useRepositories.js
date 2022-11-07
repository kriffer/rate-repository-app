
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {

  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });


  let repositories = data ? data.repositories : ''

  return { repositories };
};

export default useRepositories;