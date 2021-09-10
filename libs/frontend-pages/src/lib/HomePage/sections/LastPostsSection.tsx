import { Box, Button, Container, Typography } from '@material-ui/core';
import style from '../style';
import Image from 'next/image';
import { AccessTime } from '@material-ui/icons';

export default function LastPostsSection() {
  return (
    <Box component="section" sx={style.lastPostsSection}>
      <Container>
        <Box className="section-wrapper">
          <Box className="section-cat">
            <Box className="section-cat-content">
              <Typography variant="h1">
                Acompanhe nossas postagens sobre a comunidade barista
              </Typography>
              <Button size="large" variant="contained" color="primary">
                Ver mais postagens
              </Button>
            </Box>
          </Box>
          <Box className="post-list">
            <Box className="post-item">
              <figure className="post-image">
                <Image src="/imgs/coffee.png" alt="" layout="fill" />
              </figure>
              <Box className="post-info">
                <Typography
                  className="post-info-time"
                  variant="body2"
                  component="span"
                >
                  <AccessTime />
                  10 min de leitura
                </Typography>
                <Typography
                  className="post-info-title"
                  variant="body1"
                  component="h3"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
                <Typography
                  className="post-info-tag"
                  variant="body2"
                  component="span"
                >
                  #Drinks
                </Typography>
              </Box>
            </Box>
            <Box className="post-item">
              <figure className="post-image">
                <Image src="/imgs/coffee.png" alt="" layout="fill" />
              </figure>
              <Box className="post-info">
                <Typography
                  className="post-info-time"
                  variant="body2"
                  component="span"
                >
                  <AccessTime />
                  10 min de leitura
                </Typography>
                <Typography
                  className="post-info-title"
                  variant="body1"
                  component="h3"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
                <Typography
                  className="post-info-tag"
                  variant="body2"
                  component="span"
                >
                  #Drinks
                </Typography>
              </Box>
            </Box>
            <Box className="post-item">
              <figure className="post-image">
                <Image src="/imgs/coffee.png" alt="" layout="fill" />
              </figure>
              <Box className="post-info">
                <Typography
                  className="post-info-time"
                  variant="body2"
                  component="span"
                >
                  <AccessTime />
                  10 min de leitura
                </Typography>
                <Typography
                  className="post-info-title"
                  variant="body1"
                  component="h3"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
                <Typography
                  className="post-info-tag"
                  variant="body2"
                  component="span"
                >
                  #Drinks
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
