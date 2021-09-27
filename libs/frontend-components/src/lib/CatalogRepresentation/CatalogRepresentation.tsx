import { useState } from 'react';
import { Box, Alert } from '@material-ui/core';
import { TableRowsRounded, GridViewRounded } from '@material-ui/icons';
import { ProductInterface } from '../ProductCatalogRepresentation/ProductCatalogRepresentation';
import { ProductCatalogItem } from '../ProductCatalogItem/ProductCatalogItem';
import TabGroup, { TabOption } from '../TabGroup/TabGroup';
import style from './style';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CatalogRepresentationProps {
  className?: string;
  children?: React.ReactNode;
  products?: ProductInterface[];
}

type VariantMode = 'grid' | 'list';

export const CatalogRepresentation: React.FC<CatalogRepresentationProps> = ({
  className,
  products,
}): JSX.Element => {
  const [mode, setMode] = useState<VariantMode>('list');
  const tabs: TabOption[] = [
    {
      id: 1,
      content: () => <GridViewRounded />,
      contentProps: { props: {} },
      active: mode === 'grid',
      handleClick: (_) => setMode('grid'),
    },
    {
      id: 2,
      content: () => <TableRowsRounded />,
      contentProps: { props: {} },
      active: mode === 'list',
      handleClick: (_) => setMode('list'),
    },
  ];

  return (
    <Box className={className} sx={style.root}>
      <Box className="representation-catalog-wrapper">
        {products && products.length !== 0 ? (
          <>
            <Box className="representation-catalog-actions">
              <TabGroup tabs={tabs} />
            </Box>
            <Box
              className={`representation-catalog-grid representation-catalog-grid-mode-${mode}`}
            >
              {products.map((product) => (
                <ProductCatalogItem
                  product={product}
                  variantView={mode === 'grid' ? 'mobile' : 'desktop'}
                  key={product.id}
                />
              ))}
            </Box>
          </>
        ) : (
          <>
            <Box className="representation-catalog-actions"></Box>
            <Alert severity="info">Nenhum produto encontrado</Alert>
          </>
        )}
      </Box>
    </Box>
  );
};

export default CatalogRepresentation;
