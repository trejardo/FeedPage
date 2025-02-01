import { Typography, TextField, Button, Stack, Avatar } from '@mui/material';
import React, { useState } from 'react';

import { ADD_COMMENT_PLACEHOLDER, POST_BUTTON_TEXT } from '../../constants/constants';

import { styles } from './CommentSection.styles';
import useCommentSection from './useCommentSection';

const CommentSection = ({ postId, comments, showAll }) => {
  const [newComment, setNewComment] = useState('');
  const { handleAddComment } = useCommentSection(postId);

  const handleSubmit = async () => {
    if (!newComment.trim()) return;
    const addedComment = await handleAddComment(newComment);
    if (addedComment) {
      comments.push(addedComment);
      setNewComment('');
    }
  };

  const visibleComments = showAll ? comments : comments?.slice(0, 2);

  return (
    <Stack sx={styles.container}>
      {visibleComments?.map(comment => (
        <Stack key={comment.id} sx={styles.comment}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar src={comment.email[0]} alt={comment.email} />
            <Typography variant="subtitle2" color="text.secondary">
              {comment.email || 'Anonymous'}
            </Typography>
          </Stack>
          <Typography variant="body2" sx={styles.commentContent}>
            {comment.body}
          </Typography>
        </Stack>
      ))}

      <Stack direction="column" sx={styles.commentForm}>
        <TextField
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          placeholder={ADD_COMMENT_PLACEHOLDER}
          multiline
          rows={2}
          width="60%"
          size="small"
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!newComment.trim()}
          sx={styles.submitButton}
        >
          {POST_BUTTON_TEXT}
        </Button>
      </Stack>
    </Stack>
  );
};

export default CommentSection;
