import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import style from '../style';
import Image from 'next/image';

export default function NewslatterSection() {
  return (
    <Box component="section" sx={style.newslatterSection}>
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
                Lorem ipsum dolor sit amet, consectetur.
              </Typography>
              <Button size="large" variant="contained" color="primary">
                Saiba Mais
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
