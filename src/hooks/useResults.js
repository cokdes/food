import { useEffect, useState } from 'react';
import zomato from "../api/zomato";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try{
            const response = await zomato.get('/search', {
                params: {
                    entity_id: 170,
                    entity_type: 'city',
                    sort:'rating',
                    order:'desc',
                    q : searchTerm,
                }
            });
            setResults(response.data.restaurants);
        }catch(err){
            setErrorMessage("Something went wrong, please try again later");
        }
    }

    //call API when component first rendered
    useEffect(() => {
        searchApi()
    }, [])

    return [searchApi, results, errorMessage];
}