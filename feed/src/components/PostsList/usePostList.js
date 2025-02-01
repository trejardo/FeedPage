import { useEffect, useState } from 'react';

import useFetch from '../../apiCalls/useFetch';
import { API_ENDPOINTS } from '../../constants/api';

import { adaptPosts } from './postAdapter';

const usePostList = () => {
  const { data: postsData, loading: postsLoading } = useFetch(API_ENDPOINTS.POSTS_API);
  const { data: usersData, loading: usersLoading } = useFetch(API_ENDPOINTS.USERS_API);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (postsData && usersData) {
      setPosts(adaptPosts(postsData, usersData));
    }
  }, [postsData, usersData]);

  return { posts, loading: postsLoading || usersLoading };
};

export default usePostList;
