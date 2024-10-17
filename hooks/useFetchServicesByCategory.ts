import { useState, useEffect } from 'react';
import axios from 'axios';
import { getServices } from '@/utils/ApiCalls';

const useFetchServicesByCategory = (categoryId: string, initialPage = 1, pageSize = 10) => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(initialPage); // Page state
  const [hasMore, setHasMore] = useState(true);  // To track if more data is available

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchServices = async () => {
      setLoading(true);
      try {

        const response = await getServices(categoryId, signal)

        console.log('getSErvices res ',response)
        // const response = await axios.get(`http://your-api-url.com/services`, {
        //   params: {
        //     categoryId,
        //     page,          // Pass page number
        //     pageSize,      // Page size (number of items per page)
        //   },
        //   signal: controller.signal,
        // });
        
        if (response.data.length < pageSize) {
          setHasMore(false); // If fewer items than pageSize, no more data
        }
        
        setServices((prevServices) => [...prevServices, ...response.data]); // Append new data
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError('Failed to fetch services');
        }
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchServices();
    }

    return () => {
      controller.abort(); // Cleanup on unmount or new request
    };
  }, [categoryId, page]);

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage((prevPage) => prevPage + 1); // Increase page number
    }
  };

  return { services, loading, error, loadMore, hasMore };
};

export default useFetchServicesByCategory;
