import { Avatar, Card, CardContent, Stack, Typography, Box } from '@mui/material';

import CommentSection from '../CommentSection/CommentSection';

import { styles } from './Post.styles';
import PostActions from './PostActions/PostActions';
import usePost from './usePost';

const Post = ({ post }) => {
  const {
    elementRef,
    liked,
    likesCount,
    handleLikeToggle,
    comments,
    totalComments,
    handleAddComment,
    showAllComments,
    toggleShowAllComments,
  } = usePost({
    post,
  });

  return (
    <Card sx={styles.card} ref={elementRef}>
      <CardContent sx={styles.content}>
        <Stack direction="row" sx={styles.userInfo}>
          <Avatar />
          <Typography variant="h6">{post?.user?.name}</Typography>
        </Stack>
        <Typography variant="h6">{post?.title}</Typography>
        <Typography variant="body2">{post?.body}</Typography>
      </CardContent>

      <PostActions
        liked={liked}
        likes={likesCount}
        comments={comments}
        totalComments={totalComments}
        onLike={() => handleLikeToggle(post?.id)}
        onComment={() => handleAddComment(post?.id)}
        toggleShowAllComments={toggleShowAllComments}
      />
      {showAllComments && (
        <Box sx={styles.commentsSection}>
          <CommentSection postId={post?.id} comments={comments} showAll={showAllComments} />
        </Box>
      )}
    </Card>
  );
};

export default Post;
