import { useState } from 'react';
import { Box } from '@material-ui/core';
import { ProductCatalogItem } from '../ProductCatalogItem/ProductCatalogItem';
import TabGroup, { TabOption } from '../TabGroup/TabGroup';
import { TableRowsRounded, GridViewRounded } from '@material-ui/icons';
import style from './style';
import { ProductInterface } from '../ProductCatalogRepresentation/ProductCatalogRepresentation';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CatalogRepresentationProps {
  className?: string;
  children?: React.ReactNode;
}

type VariantMode = 'grid' | 'list';

const dataProduct = [
  {
    id: 1,
    feelPoints: 70,
    name: 'Product test',
    plans: [
      {
        id: 1,
        name: 'Basic',
        priceTotal: 'R$ 17,90',
        price: 'R$ 24,90',
        porcent: 0.1,
      },
      {
        id: 2,
        name: 'Standard',
        priceTotal: 'R$ 37,90',
        price: 'R$ 49,90',
        porcent: 0.15,
      },
      {
        id: 3,
        name: 'Premium',
        priceTotal: 'R$ 53,90',
        price: 'R$ 60,90',
        porcent: 0.2,
      },
    ],
  },
] as ProductInterface[];

export const CatalogRepresentation: React.FC<CatalogRepresentationProps> = ({
  className,
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
        <Box className="representation-catalog-actions">
          <TabGroup tabs={tabs} />
        </Box>
        <Box
          className={`representation-catalog-grid representation-catalog-grid-mode-${mode}`}
        >
          {dataProduct.map((product, key) => (
            <ProductCatalogItem
              product={product}
              variantView={mode === 'grid' ? 'mobile' : 'desktop'}
              key={key}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CatalogRepresentation;
