import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Typography } from '@material-ui/core';

type Image = {
  src: string;
  alt?: string;
};

/* eslint-disable-next-line */
export interface AboutUsHistorySectionProps extends BoxProps {
  title: string;
  text: string;
  photo?: Image;
}

export function AboutUsHistorySection({
  sx,
  title,
  text,
  photo = {
    src: 'https://via.placeholder.com/1500',
    alt: 'Alternative text',
  },
  ...rest
}: AboutUsHistorySectionProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.container}>
        <Box sx={styles.textContainer}>
          <Typography sx={styles.title}>Nossa história</Typography>
          <Typography sx={styles.text}>
            Nas margens do Rio Pinheiros, um senhor de nome Inácio, construiu um
            dos primeiros lotes territoriais da terra da garoa, uma casa de
            Taipa e Pilão, que resgata lembranças de casinhas típicas do século
            XX. Passado algumas estações, esse velho ancião largou tudo que
            havia edificado para ir em busca do que realmente acreditava: o amor
            pelo café.
            <br />
            No estado do café, a bebida do encontro ultrapassou gerações. Assim,
            é brotado o nosso primeiro grão.
            <br />
            Citar Coffee And Feel sem resgatar o passado é como deixar vago um
            pedaço da nossa história. A curiosidade de um bisavô, fez o bisneto,
            décadas depois ir em busca do mesmo aroma e sensação.
            <br />
            Unimos as raízes do passado com a tecnologia do, aqui e agora, para
            levar a sua xícara um sabor inconfundível de um café totalmente
            colhido a mão. Cada grão que adentrou nossas cápsulas vem de base
            familiar, registros de imigrantes, regiões cafeeiras, paixão,
            ensinada de pais para filhos, uma produção que percorreu gerações.
            Atrelamos, produtividade, cultivos e identidade de uma bebida para
            lá de especial. Criamos não só café, resgatamos memórias.
            <br />
            Falar de café é falar de amor, tradição, e sensação de lar, quem
            nunca sentiu aquele aroma de café no ambiente e pensou em um
            registro com algum momento da sua jornada? Foi pela nossa trajetória
            que produzimos o propósito de fazer parte da sua. Vamos juntos
            ressignificar as relações?
          </Typography>
        </Box>

        <Box sx={styles.photoContainer}>
          <Box
            sx={styles.photo}
            component="img"
            src={photo.src}
            alt={photo.alt}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUsHistorySection;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },
  container: {
    display: 'flex',
    justifyContent: { lg: 'flex-end' },
    columnGap: { lg: '8em' },
    flexDirection: { xs: 'column', lg: 'row' },
    rowGap: { xs: '3em' },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: { xs: '1.5em', lg: '4em' },
    px: { xs: '2.7em' },
  },
  title: {
    fontSize: { xs: '2em', lg: '4em' },
    fontWeight: 800,
    color: '#323232',
  },
  text: {
    fontSize: { xs: '1.6em' },
    color: (theme) => theme.palette.grey[600],
    maxWidth: { lg: '75ch' },
  },
  photoContainer: {
    width: { xs: 'auto', lg: '55.6em' },
    height: { xs: '28.6em', sm: '50em', lg: '70em' },
  },
  photo: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
});
