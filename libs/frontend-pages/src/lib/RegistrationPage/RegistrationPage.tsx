import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { alpha } from '@material-ui/system';
import React from 'react';

/* eslint-disable-next-line */
export interface RegistrationPageProps {
  onIndexChange?: (index: number) => void;
}

const MAX_INDEX = 2;

const onIndexChangeDefault = (index: number) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Active index is:' + index);
  }
};

export function RegistrationPage({
  onIndexChange = onIndexChangeDefault,
}: RegistrationPageProps) {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const handleForward = () => {
    if (activeIndex < MAX_INDEX) {
      setActiveIndex((prevState) => prevState + 1);
    }
  };

  const handleBackward = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevState) => prevState - 1);
    }
  };

  React.useEffect(() => {
    onIndexChange(activeIndex);
  }, [activeIndex, onIndexChange]);

  return (
    <Box id="root-grid">
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: { xs: 'none', lg: '50% 50%' },
          gridTemplateRows: { xs: '1fr', lg: 'none' },
        }}
      >
        <LeftSideGrid activeIndex={activeIndex} />
        <RightSideGrid />
      </Box>
    </Box>
  );
}

export default RegistrationPage;

interface LeftSideGridProps {
  activeIndex?: number;
  onForwardButtonClick?: (...args: unknown[]) => void;
  onBackwardButtonClick?: (...args: unknown[]) => void;
}

const LeftSideGrid = ({
  activeIndex,
  onForwardButtonClick = () => {
    if (process.env.NODE_ENV === 'development')
      console.log('Forward button click');
  },
  onBackwardButtonClick = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Backward button click');
    }
  },
}: LeftSideGridProps) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: '10% 60% 20% 10%',
        gridTemplateColumns: '1fr',
        alignItems: 'center',
        py: 5,
        px: { xs: 4, lg: 10 },
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: (theme) => theme.palette.grey[500] }}
      >
        Faça seu cadastro em três passos.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <TextField
          placeholder="placeholder"
          variant="outlined"
          label="placeholder"
        />
        <TextField
          placeholder="placeholder"
          variant="outlined"
          label="placeholder"
        />
        <TextField
          placeholder="placeholder"
          variant="outlined"
          label="placeholder"
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', lg: 'space-evenly' },
        }}
      >
        <Button variant="outlined" children="Voltar" />
        <Button variant="contained" children="Avançar" />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
        <Dot index={0} value={activeIndex} />
        <Dot index={1} value={activeIndex} />
        <Dot index={2} value={activeIndex} />
      </Box>
    </Box>
  );
};

interface DotProps {
  index?: number;
  value?: number;
}

const Dot = ({ index, value }: DotProps) => {
  return (
    <Box
      sx={{
        width: 12,
        height: 12,
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        boxShadow: (theme) => theme.shadows[5],
        backgroundColor: (theme) =>
          value === index
            ? theme.palette.primary.main
            : alpha(theme.palette.primary.main, 0.4),
      }}
    />
  );
};

interface RightSideGridProps {
  backgroundImage?: {
    src: string;
    alt: string;
  };
}

const RightSideGrid = ({
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
