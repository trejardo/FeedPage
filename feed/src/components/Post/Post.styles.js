export const styles = {
  card: {
    m: 2,
    borderRadius: '0 0 8px 8px',
    boxShadow: theme =>
      theme.palette.mode === 'dark'
        ? '2px 3px 6px -1px rgba(255,255,255,0.1)'
        : '2px 3px 6px -1px rgba(0,0,0,0.2)',
    '&:hover': {
      boxShadow: theme =>
        theme.palette.mode === 'dark'
          ? '3px 4px 8px -1px rgba(255,255,255,0.1)'
          : '3px 4px 8px -1px rgba(0,0,0,0.2)',
      transition: 'box-shadow 0.3s ease-in-out',
    },
  },
  content: {
    p: 5,
  },
  userInfo: {
    alignItems: 'center',
    gap: 2,
  },
};
