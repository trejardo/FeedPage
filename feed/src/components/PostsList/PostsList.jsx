import { CircularProgress, Stack } from '@mui/material';
import React from 'react';

import Post from '../Post/Post';

import usePostList from './usePostList';

const PostList = () => {
  const { posts, loading } = usePostList();

  if (loading)
    return (
      <Stack alignItems="center" justifyContent="center" height="100vh">
        <CircularProgress />
      </Stack>
    );

  return (
    <Stack spacing={2} sx={{ mt: 10, p: 2 }}>
      {posts?.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </Stack>
  );
};

export default PostList;
