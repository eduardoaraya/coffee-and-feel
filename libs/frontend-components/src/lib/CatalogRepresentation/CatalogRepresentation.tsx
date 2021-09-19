import { ProductCatalogItem } from '../ProductCatalogItem/ProductCatalogItem';
import { Box } from '@material-ui/core';
import TabGroup, { TabOption } from '../TabGroup/TabGroup';
import style from './style';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CatalogRepresentationProps {
  className?: string;
  children?: React.ReactNode;
}

export const CatalogRepresentation: React.FC<CatalogRepresentationProps> = ({
  className,
}): JSX.Element => {
  const tabs: TabOption[] = [
    {
      id: 1,
      title: 'Grid',
      active: false,
    },
    {
      id: 2,
      title: 'List',
      active: true,
    },
  ];

  return (
    <Box className={className} sx={style.root}>
      <Box className="representation-catalog-wrapper">
        <Box className="representation-catalog-actions">
          <TabGroup tabs={tabs} />
        </Box>
        <Box className="representation-catalog-grid">
          {Array.from({ length: 10 }).map((_, key) => (
            <ProductCatalogItem key={key} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CatalogRepresentation;
