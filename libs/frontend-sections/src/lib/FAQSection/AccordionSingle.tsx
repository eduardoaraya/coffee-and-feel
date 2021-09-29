/* eslint-disable @typescript-eslint/no-empty-interface */
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

export interface AccordionSingleProps extends Omit<AccordionProps, 'children'> {
  title?: string;
  caption?: string;
  content?: string;
}

const AccordionSingle = ({
  expanded,
  title = 'Placeholder title',
  caption = 'This is a caption',
  content = 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
  sx,
  ...rest
}: AccordionSingleProps) => {
  return (
    <Accordion
      elevation={3}
      sx={{ ...styles.root, ...sx }}
      expanded={expanded}
      {...rest}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={styles.chevron} />}>
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.caption}>{caption}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={styles.content}>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionSingle;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },
  title: {
    width: '33%',
    flexShrink: 0,
    color: (theme) => theme.palette.primary.main,
    fontSize: { xs: '1.4em' },
  },
  caption: {
    color: 'text.secondary',
    fontSize: { xs: '1.2em' },
  },
  chevron: {
    fontSize: { xs: '2.5em' },
    fill: (theme) => theme.palette.primary.main,
  },
  content: {
    fontSize: { xs: '1.4em' },
    color: (theme) => theme.palette.grey[700],
  },
});
