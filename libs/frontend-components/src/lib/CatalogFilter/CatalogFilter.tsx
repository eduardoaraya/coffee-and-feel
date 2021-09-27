import { Box } from '@material-ui/core';
import style from './style';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CatalogFilterProps {
  className?: string;
  children?: React.ReactNode;
}

export const CatalogFilter: React.FC<CatalogFilterProps> = ({
  className,
}): JSX.Element => {
  return <Box className={className} sx={style.root}></Box>;
};

export default CatalogFilter;
