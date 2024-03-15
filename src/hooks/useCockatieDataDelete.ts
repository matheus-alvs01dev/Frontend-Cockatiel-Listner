
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CockatielData } from '../interface/CockatielData';

const API_URL='http://localhost:8080/';

export function useCockatielDataDelete({id}: CockatielData){
    const [status, setStatus] = useState('');

    useEffect(() => {
        axios.delete(`${API_URL}cockatiel/${id}`)
            .then(() => setStatus('Delete successful'));
            
    }, []);

    return status;
};



