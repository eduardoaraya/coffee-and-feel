import { useState } from 'react';
import { Box, Button, Container, Typography } from '@material-ui/core';
import style from './style';

export const NewsletterSection: React.FC = (): JSX.Element => {
  return (
    <Box sx={style.root} component="section" className="section-newsletter">
      <Box className="content-newsletter">
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
