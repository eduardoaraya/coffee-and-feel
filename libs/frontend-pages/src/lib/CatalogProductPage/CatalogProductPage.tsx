import { LayoutEcommerce, TabGroup } from '@atlascode/coffee-front-components';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import getDefaultStyle from './style';
import StarIcon from '@material-ui/icons/Star';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CatalogProductPageProps {}

export const CatalogProductPage: React.FC<CatalogProductPageProps> = (
  props: CatalogProductPageProps
): JSX.Element => (
  <LayoutEcommerce>
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
              Edição Adsumus Conillon
            </Typography>
            <TabGroup
              className="product-info-row"
              tabs={[
                {
                  id: 1,
                  content: 'Basic',
                  active: true,
                },
                {
                  id: 2,
                  content: 'Standard',
                  active: false,
                },
                {
                  id: 3,
                  content: 'Premium',
                  active: false,
                },
              ]}
            />
            <Box className="product-info-row product-price">
              <Box className="product-amount">+ 1 -</Box>
              <Box className="product-price-total">R$ 17,50</Box>
            </Box>
            <Box className="product-info-row product-actions">
              <Button variant="contained" color="primary">
                Adicionar à Sacola
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="product-attributes">
          <Box className="product-attribute-row">
            <Paper elevation={3}>
              <StarIcon />
              <Typography color="primary" variant="body1">
                Pontuação
              </Typography>
              <Typography className="product-attribute-value" variant="body1">
                9.4
              </Typography>
            </Paper>
            <Paper elevation={3}>
              <StarIcon />
              <Typography color="primary" variant="body1">
                Pontuação
              </Typography>
              <Typography className="product-attribute-value" variant="body1">
                9.4
              </Typography>
            </Paper>
            <Paper elevation={3}>
              <StarIcon />
              <Typography color="primary" variant="body1">
                Pontuação
              </Typography>
              <Typography className="product-attribute-value" variant="body1">
                9.4
              </Typography>
            </Paper>
            <Paper elevation={3}>
              <StarIcon />
              <Typography color="primary" variant="body1">
                Pontuação
              </Typography>
              <Typography className="product-attribute-value" variant="body1">
                9.4
              </Typography>
            </Paper>
            <Paper elevation={3}>
              <StarIcon />
              <Typography color="primary" variant="body1">
                Pontuação
              </Typography>
              <Typography className="product-attribute-value" variant="body1">
                9.4
              </Typography>
            </Paper>
          </Box>
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
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{content}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  </LayoutEcommerce>
);
