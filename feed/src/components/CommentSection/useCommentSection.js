import { useState } from 'react';

const useCommentSection = postId => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAddComment = async comment => {
    setLoading(true);
    const newComment = { body: comment, postId, id: Math.random() * 1000 };
    setComments(prevComments => [...prevComments, newComment]);
    setLoading(false);
    return newComment;
  };

  return { comments, handleAddComment, loading };
};

export default useCommentSection;
