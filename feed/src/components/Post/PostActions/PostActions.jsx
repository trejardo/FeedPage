import { Box, Typography, IconButton } from '@mui/material';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';

import { styles } from './PostActions.styles';

const PostActions = ({ likes, onLike, liked, toggleShowAllComments, totalComments }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.countsContainer}>
        <Box sx={styles.likesWrapper}>
          <AiOutlineLike size={16} style={{ color: 'blue' }} />
          <Typography variant="body2">{likes}</Typography>
        </Box>
        <Typography variant="body2" onClick={toggleShowAllComments} sx={styles.commentsCount}>
          {totalComments} Comments
        </Typography>
      </Box>

      <Box sx={styles.actionsContainer}>
        <IconButton onClick={onLike}>
          {liked ? <AiFillLike /> : <AiOutlineLike />} <Typography variant="body2">Like</Typography>
        </IconButton>
        <IconButton onClick={toggleShowAllComments}>
          <BiCommentDetail /> <Typography variant="body2">Comment</Typography>
        </IconButton>
      </Box>
    </Box>
  );
};

export default PostActions;
