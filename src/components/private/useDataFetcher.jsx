import axios from "axios";
import { useEffect, useState } from "react";


const useDataFetcher = () => {
    const API_URL = "https://api.github.com/users/fabpot/followers?per_page=6";
    const totalpages = 300;
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(() => {
        const fetchData = async() => {
            const page = Math.min(currentPage + 1, totalpages);
            const result = await axios.get(`${API_URL}6page=${page}`);
            setPages(result.data);
            console.log(result.data);
            setLoading(false);
        };
        fetchData();
        
    },[currentPage]);
    return {
        loading,
        pages,
        totalpages,
        currentPage,
        setCurrentPage,
};
};
export default useDataFetcher;