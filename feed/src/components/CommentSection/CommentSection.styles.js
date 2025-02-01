export const styles = {
  container: {
    m: 2,
    p: 2,
  },
  comment: {
    py: 1.5,
    '&:not(:last-child)': {
      borderBottom: '1px solid #f0f0f0',
    },
  },
  commentContent: {
    color: 'text.primary',
    fontSize: '0.875rem',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    ml: 5,
  },
  commentForm: {
    m: 2,
    gap: 1,
  },
  submitButton: {
    alignSelf: 'flex-end',
    textTransform: 'none',
    px: 3,
  },
};
