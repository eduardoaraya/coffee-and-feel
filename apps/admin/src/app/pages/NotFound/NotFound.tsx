import React from 'react';
import { Box, Container, ButtonProps, Button } from '@material-ui/core';
import LottieAnimation from '../../utility/LottieWrapper/LottieWrapper';
import animationData from '../../../assets/lotties/NotFoundLottie/data.json';
import { useNavigate } from 'react-router-dom';

export interface NotFoundPageProps {
  notFoundText?: string;
  ButtonProps?: ButtonProps;
}

const NotFound = ({
  notFoundText = 'Oops, parece que essa página não existe, clique abaixo para voltar à página principal',
  ButtonProps = {
    variant: 'contained',
    children: 'Voltar agora',
    color: 'primary',
  },
}: NotFoundPageProps) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', height: '100vh', fontSize: '1rem' }}>
      <Container sx={{ height: '100%' }} maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            gap: { xs: '2rem' },
            textAlign: 'center',
          }}
        >
          <LottieAnimation
            loop
            width={{ xs: '250px', sm: '450px', md: '550px' }}
            height={{ xs: '200px', sm: '300px', md: '450px' }}
            animationData={animationData}
          />
          <Box
            sx={{
              fontSize: 'clamp(2em, 5vw, 2.25em)',
            }}
            component="h1"
          >
            {notFoundText}
          </Box>

          <Button
            sx={{ fontSize: 'clamp(1em, 1.5vw, 1.15em)' }}
            onClick={() => navigate('/')}
            {...ButtonProps}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
