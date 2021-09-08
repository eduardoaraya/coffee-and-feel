import { Box } from '@material-ui/core';

export interface RightSideGridProps {
  backgroundImage?: {
    src: string;
    alt: string;
  };
}

export const RightSideGrid = ({
  backgroundImage = {
    src: 'https://via.placeholder.com/1500',
    alt: 'This is a placeholder alt message to provide better acessibility performance, change me',
  },
}: RightSideGridProps) => {
  return (
    <Box
      sx={{
        display: { xs: 'none', lg: 'flex' },
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        {...backgroundImage}
        component="img"
        sx={{ objectFit: 'cover', height: '100%', width: '100%' }}
      />
    </Box>
  );
};

export default RightSideGrid;
