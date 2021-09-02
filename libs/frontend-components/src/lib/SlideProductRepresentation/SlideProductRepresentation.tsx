import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';
import style from './style';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Image from 'next/image';
import Button from '@material-ui/core/Button';

/* eslint-disable-next-line */
export interface SlideProductRepresentationProps {}

export function SlideProductRepresentation(
  props: SlideProductRepresentationProps
) {
  return (
    <Box component="div" sx={style.wrapperSlide}>
      <IconButton className="left" size="large" color="primary">
        <ChevronLeftIcon />
      </IconButton>
      <Box sx={style.gridProduct}>
        <Box className="product-image">
          <figure>
            <Image
              src="/imgs/product-sample.png"
              alt="Product name"
              layout="intrinsic"
              width="300px"
              height="300px"
            />
          </figure>
        </Box>
        <Box className="product-info">
          <Box component="ul" sx={style.dotsList}>
            <li>
              <FiberManualRecordIcon />
            </li>
            <li>
              <FiberManualRecordIcon color="primary" />
            </li>
            <li>
              <FiberManualRecordIcon />
            </li>
            <li>
              <FiberManualRecordIcon />
            </li>
            <li>
              <FiberManualRecordIcon />
            </li>
          </Box>
          <Typography color="white" variant="h1">
            Edição Adsumus Conillon
          </Typography>
          <Typography color="white" variant="body1">
            Acumule
            <Typography color="primary" variant="body1" component="span">
              {' 70 '}
            </Typography>
            Feel Points
          </Typography>
          <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
      </Box>
      <IconButton className="right" size="large" color="primary">
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}

export default SlideProductRepresentation;
