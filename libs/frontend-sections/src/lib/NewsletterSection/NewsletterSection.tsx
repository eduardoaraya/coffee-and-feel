import { useState } from 'react';
import { Box, Button, Container, Typography } from '@material-ui/core';
import style from './style';

export const NewsletterSection: React.FC = (): JSX.Element => {
  return (
    <Box sx={style.root} component="section" className="section-newsletter">
      <Box className="content-newsletter">
        <div className="custom-shape-divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="custom-shape-divider-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <Container>
          <Box className="wrapper-newsletter">
            <figure className="cupofcoffee">
              <img src="/imgs/cupofcoffee.png" alt="Cup of offee" />
            </figure>
            <Box className="section-content">
              <Box>
                <Typography variant="h1" color="white">
                  Lorem ipsum dolor sit <br /> amet, consectetur.
                </Typography>
                <Box className="newsletter-action">
                  <Box
                    component="input"
                    type="email"
                    placeholder="Seu e-mail"
                  />
                  <Button size="medium" variant="contained">
                    Enviar
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NewsletterSection;
