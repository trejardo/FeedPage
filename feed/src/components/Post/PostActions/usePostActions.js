import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { POST_COMMENT_API } from '../constants';

const usePostActions = (postId, initialLikes, initialComments) => {
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState(initialComments);
  const { fetchData } = useFetch();

  const handleLike = async () => {
    const updatedLikes = likes + 1;
    setLikes(updatedLikes);
  };

  const handleAddComment = async newComment => {
    const response = await fetchData(`${POST_COMMENT_API}/${postId}`, 'POST', newComment);
    if (response.ok) {
      setComments([...comments, newComment]);
    }
  };

  return { likes, comments, handleLike, handleAddComment };
};

export default usePostActions;
