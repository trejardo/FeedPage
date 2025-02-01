import { useState, useEffect } from 'react';

import useFetch from '../../apiCalls/useFetch';
import { API_ENDPOINTS } from '../../constants/api';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const usePost = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [elementRef, isVisible] = useIntersectionObserver();

  useEffect(() => {
    if (isVisible && !shouldFetch) {
      setShouldFetch(true);
    }
  }, [isVisible]);

  const { data: comments = [], loading: commentsLoading } = useFetch(
    shouldFetch ? API_ENDPOINTS.POST_COMMENTS(post.id) : null,
  );

  const [likesCount, setLikesCount] = useState(Math.floor(Math.random() * 1000));

  const handleLikeToggle = () => {
    setLiked(prev => !prev);
    setLikesCount(prev => (liked ? prev - 1 : prev + 1));
  };

  const handleAddComment = async comment => {
    try {
      const newComment = {
        body: comment,
        postId: post.id,
        id: Math.random() * 1000,
      };
      return newComment;
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  };

  const toggleShowAllComments = () => {
    setShowAllComments(prev => !prev);
  };

  const visibleComments = showAllComments ? comments : comments?.slice(0, 2);

  return {
    elementRef,
    liked,
    likesCount: likesCount || 0,
    handleLikeToggle,
    comments: visibleComments,
    totalComments: comments?.length || 'Loading ',
    loading: commentsLoading,
    handleAddComment,
    showAllComments,
    toggleShowAllComments,
  };
};

export default usePost;
