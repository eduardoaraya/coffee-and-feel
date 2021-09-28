import {
  TabGroup,
  WavyBackground,
  CounterInput,
  ProductInterface,
} from '@atlascode/coffee-front-components';
import {
  Container,
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import getDefaultStyle from './style';
import { Star, BarChart, BubbleChart, Room } from '@material-ui/icons';
import { useProductPlansTabs } from '@atlascode/coffee-frontend-hooks';
import InfoPrice from 'libs/frontend-components/src/lib/ProductCatalogRepresentation/InfoPrice';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CatalogProductPageProps {
  product?: ProductInterface;
}

export interface ProductAttributeBoxProps {
  id: number;
  name: string;
  value: string;
  icon: CallableFunction;
}

const ProductAttributeBox: React.FC<ProductAttributeBoxProps> = ({
  name,
  value,
  icon,
}) => (
  <Box className="product-attribute-item-box">
    {icon()}
    <Typography
      className="product-attribute-name"
      color="primary"
      variant="body1"
    >
      {name}
    </Typography>
    <Typography
      color="secondary"
      className={`product-attribute-value ${
        value.length > 3 ? `t-size-2` : `t-size-1`
      }`}
      variant="body1"
    >
      {value}
    </Typography>
  </Box>
);

export const CatalogProductPage: React.FC<CatalogProductPageProps> = ({
  product,
}): JSX.Element => {
  const { tabs, isCurrentPlan, userPlan } = useProductPlansTabs(product);

  return (
    <Box className="page page-catalog-product" sx={getDefaultStyle()}>
      <Container>
        <Box className="product">
          <Box className="product-image">
            <figure>
              <img src="/imgs/product-sample1.png" alt="product" />
            </figure>
          </Box>
          <Box className="product-info">
            <Typography className="product-info-row" variant="h1">
              {product?.name}
            </Typography>
            <TabGroup className="product-info-row" tabs={tabs} />
            <Box className="product-info-row product-price">
              <Box className="product-price-total">
                {InfoPrice({ product, isCurrentPlan })}
              </Box>
              <Box className="product-amount">
                <CounterInput />
              </Box>
              {/* <Typography color="primary" className="product-price-total">
                R$ 17,50
              </Typography> */}
            </Box>
            <Box className="product-info-row product-actions">
              <Button variant="contained" size="medium" color="primary">
                Adicionar à Sacola
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box className="product-attributes">
        <WavyBackground className="product-attributes-bg">
          <figure className="plant left"></figure>
          <Container className="overflow-top">
            <Box className="product-attribute-row">
              {[
                {
                  id: 1,
                  icon: () => <Star />,
                  name: 'Pontuação',
                  value: '9.4',
                },
                {
                  id: 2,
                  icon: () => <BarChart />,
                  name: 'Intensidade',
                  value: '9',
                },
                {
                  id: 3,
                  icon: () => <BubbleChart />,
                  name: 'Tipo',
                  value: 'Torrado e moído em cápsulas',
                },
                {
                  id: 4,
                  icon: () => <Room />,
                  name: 'Origem',
                  value: 'Pedra Azul - ES',
                },
              ].map((item: ProductAttributeBoxProps) => (
                <Box key={item.id} className="separator">
                  <ProductAttributeBox {...item} />
                </Box>
              ))}
            </Box>
          </Container>
          <figure className="plant right"></figure>
        </WavyBackground>
        <Container className="overflow-top">
          <Box className="product-attribute-accordion">
            {[
              {
                title: 'Descrição do produto',
                content: `Produzir café é produzir amor.
                Por esta razão, nossa proposta é levar do Brasil para o mundo, o café que possui a cultura mais sustentável do planeta. Em 1925 um alemão chamado Rudolf Steiner criou um modelo chamado Biodinâmica, um passo à frente do procedimento orgânico, é o verdadeiro café sem agrotóxicos.
                Mas, não paramos aí, o café Orgânico Biodinâmico percorre a astronomia, são cultivos, plantios e colheitas que permeiam as fases da lua e dos planetas. Para que esse mecanismo funcione, os cafeeiros são tratados por homeopatia, respeitando todos os ciclos da natureza. Esse café tem cultivo orgânico, com plantações dentro da floresta, compostos altamente naturais e redução de pragas, mesmo que não haja o uso de venenos.
                É o verdadeiro impulso inovador, altamente sustentável, natural e com o objetivo de preservar as nossas matas nativas. Sem contar com o sabor inconfundível de um café puro, com baixa oxidação, doçura, orgânico e de uma característica extremamente intensa. Que tal desfrutar sabor e saúde em uma mesma cápsula?
                `,
              },
              {
                title: 'Dica da Barista',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo
                lobortis eget. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.`,
              },
              {
                title: 'FAQ',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo
                lobortis eget. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.`,
              },
            ].map(({ title, content }: any) => (
              <Accordion className="accordion-item">
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Box className="accordion-item-title">
                    <Typography>{title}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails className="accordion-item-content">
                  <Typography>{content}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
