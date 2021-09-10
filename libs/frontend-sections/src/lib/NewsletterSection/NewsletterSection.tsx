import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import style from '../../../../frontend-pages/src/lib/HomePage/style';
import Image from 'next/image';

export const NewsletterSection: React.FC = (): JSX.Element => {
  return (
    <Box component="section" sx={style.newsletterSection}>
      <Container>
        <Box className="wrapper-newslatter">
          <figure className="cupofcoffee">
            <Image
              src="/imgs/cupofcoffee.png"
              layout="fill"
              alt="Cup of offee"
            />
          </figure>
          <Box className="section-content">
            <Box>
              <Typography variant="h1" color="white">
                Lorem ipsum dolor sit <br /> amet, consectetur.
              </Typography>
              <Box sx={style.newsletterInputSubscription}>
                <Box component="input" type="email" placeholder="Seu e-mail" />
                <Button size="medium" variant="contained">
                  Enviar
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsletterSection;
