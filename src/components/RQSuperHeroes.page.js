import { React } from 'react';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';
import { Link } from 'react-router-dom'

const RQSuperHeroesPage = () => {
    const onSuccess = (data) => {
        console.log('Perform side effects after successful fetching');
    }

    const onError = (error) => {
        console.log('Perform side effects after encountering error while fetching');
    }

    const { isLoading, data, isError, error, refetch, isFetching} = useSuperHeroesData(onSuccess, onError);

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>RQ Super Heroes Page</h2>
            <button onClick={refetch}>Fetch Heroes</button>
            {
                data?.data.map(hero => {
                    return (
                      <div key={hero.id}>
                        <Link to={`/rq-super-heroes/${hero.id}`}>
                          {hero.id} {hero.name}
                        </Link>
                      </div>
                    )
                })
            }
        </>
    );
}

export default RQSuperHeroesPage;