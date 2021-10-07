import { Button, Container, Typography } from '@material-ui/core';
import Box from '@material-ui/system/Box';
import { useRouter } from 'next/router';
import style from './style';

export interface SubscriptionClubAboutSectionProps {
  sectionTitle: string;
  cardsContent: {
    title: string;
    description: string;
  }[];
  backgroundImage: {
    mobile: string;
    desktop: string;
  };
}

export const SubscriptionClubAboutSection: React.FC<SubscriptionClubAboutSectionProps> =
  ({ sectionTitle, cardsContent, backgroundImage }): JSX.Element => {
    const router = useRouter();

    return (
      <Box
        component="section"
        sx={{
          ...style.root,
          backgroundImage: {
            md: backgroundImage.desktop,
            xs: backgroundImage.mobile,
          },
        }}
      >
        <Container>
          <Box className="wrapper">
            <div className="section-info">
              <Typography className="section-title" variant="h1">
                {sectionTitle}
              </Typography>
              <div className="section-cards">
                {cardsContent.map(({ title, description }, key) => (
                  <div className="card" key={key}>
                    <Typography variant="body1" color="primary">
                      {title}
                    </Typography>
                    <div className="card-description">
                      <Typography variant="body1">{description}</Typography>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                size="large"
                onClick={() => router.push('/plans')}
                variant="contained"
                color="primary"
              >
                Conheça o clube
              </Button>
            </div>
          </Box>
        </Container>
      </Box>
    );
  };

export default SubscriptionClubAboutSection;
