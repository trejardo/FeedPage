export const adaptPosts = (posts, users) => {
  return posts.map(post => {
    const user = users.find(u => u.id === post.userId) || {};
    return {
      id: post.id,
      title: post.title,
      body: post.body,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      likes: 0,
      comments: [],
    };
  });
};
