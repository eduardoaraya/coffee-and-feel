import { useState } from 'react';
import {
  TabGroup,
  WavyBackground,
  CounterInput,
  ProductInterface,
  InfoPrice,
  ProductAttribute,
  useProductPlansTabs,
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
import {
  Star,
  BarChart,
  BubbleChart,
  Room,
  KeyboardArrowDown,
} from '@material-ui/icons';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CatalogProductPageProps {
  product?: ProductInterface;
}

export interface ProductAttributeBoxProps {
  attribute: ProductAttribute;
}

const ProductAttributeBox: React.FC<ProductAttributeBoxProps> = ({
  attribute,
}) => {
  const attributesIcons: {
    [key: string]: () => JSX.Element;
  } = {
    points: () => <Star />,
    intensity: () => <BarChart />,
    type: () => <BubbleChart />,
    origin: () => <Room />,
  };

  return (
    <Box className="product-attribute-item-box">
      {attribute.attributeCode && attributesIcons[attribute.attributeCode]
        ? attributesIcons[attribute.attributeCode]()
        : ''}
      <Typography
        className="product-attribute-name"
        color="primary"
        variant="body1"
      >
        {attribute.label}
      </Typography>
      <Typography
        color="secondary"
        className={`product-attribute-value ${
          attribute.value.length > 3 ? `t-size-2` : `t-size-1`
        }`}
        variant="body1"
      >
        {attribute.value}
      </Typography>
    </Box>
  );
};

export const CatalogProductPage: React.FC<CatalogProductPageProps> = ({
  product,
}): JSX.Element => {
  const { tabs, isCurrentPlan } = useProductPlansTabs(product);
  const [amountProduct, setAmountProduct] = useState<number>(0);

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
            <Typography className="product-info-row product-title" variant="h1">
              {product?.name}
            </Typography>
            <TabGroup className="product-info-row" tabs={tabs} />
            <Box className="product-info-row product-price">
              <Box className="product-price-total">
                {InfoPrice({
                  product,
                  isActive: isCurrentPlan,
                  amount: amountProduct,
                })}
              </Box>
              <Box className="product-amount">
                <CounterInput change={(value) => setAmountProduct(value)} />
              </Box>
            </Box>
            <Box className="product-info-row product-actions">
              <Button variant="contained" size="medium" color="primary">
                <svg
                  width="33"
                  height="37"
                  viewBox="0 0 33 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3539 19.2923C20.1943 18.1327 18.5877 17.4062 16.8134 17.4062C15.039 17.4062 13.4324 18.1327 12.2728 19.2923C11.1132 20.4519 10.3867 22.0586 10.3867 23.8329C10.3867 25.6072 11.1132 27.2139 12.2728 28.3735C13.4324 29.533 15.039 30.2595 16.8134 30.2595C18.5877 30.2595 20.1943 29.533 21.3539 28.3735C22.5135 27.2139 23.24 25.6072 23.24 23.8329C23.226 22.0586 22.5135 20.4519 21.3539 19.2923ZM17.7494 21.9748C17.9869 22.9527 18.3362 23.9586 18.6156 24.9226C18.895 25.8866 19.1186 26.8087 19.1186 27.5911C19.1186 27.8565 19.0906 28.122 19.0347 28.3595C18.9789 28.569 18.909 28.7646 18.8112 28.9602C18.4759 29.0999 18.1127 29.1977 17.7494 29.2536C17.7913 29.1558 17.8472 29.0441 17.8752 28.9463C18.0288 28.5132 18.0847 28.0661 18.0847 27.605C18.0847 26.9764 17.9729 26.3337 17.8193 25.6771C17.5818 24.6991 17.2325 23.6932 16.9531 22.7292C16.6736 21.7652 16.4501 20.8431 16.4501 20.0747C16.4501 19.6975 16.506 19.3482 16.6038 19.0548C16.6876 18.8033 16.8134 18.5798 16.995 18.3702C17.2744 18.3842 17.5398 18.4122 17.8053 18.4541C17.7354 18.6078 17.6796 18.7614 17.6237 18.9151C17.5119 19.2923 17.47 19.6695 17.47 20.0747C17.484 20.6755 17.5957 21.3181 17.7494 21.9748ZM15.8633 25.6491C15.6258 24.6711 15.2766 23.6652 14.9971 22.7012C14.7177 21.7372 14.4942 20.8152 14.4942 20.0468C14.4942 19.7673 14.5221 19.5019 14.578 19.2644C14.6199 19.0688 14.6898 18.8872 14.7876 18.7195C15.1229 18.5798 15.4861 18.482 15.8633 18.4122C15.8214 18.51 15.7795 18.6078 15.7376 18.7055C15.5839 19.1247 15.528 19.5857 15.528 20.0328C15.528 20.6615 15.6398 21.3041 15.7935 21.9608C16.031 22.9387 16.3803 23.9447 16.6597 24.9087C16.9391 25.8726 17.1626 26.7947 17.1626 27.5771C17.1626 27.9543 17.1067 28.3036 17.009 28.611C16.9251 28.8624 16.7854 29.086 16.6178 29.3095C16.3383 29.2955 16.0729 29.2676 15.8074 29.2257C15.8773 29.072 15.9472 28.9043 15.9891 28.7507C16.1008 28.3735 16.1428 27.9823 16.1428 27.5911C16.1288 26.9624 16.017 26.3057 15.8633 25.6491ZM11.3088 23.8329C11.3088 22.3101 11.9235 20.9409 12.9155 19.935C13.139 19.7115 13.3765 19.5159 13.628 19.3342C13.5861 19.5578 13.5721 19.7953 13.5721 20.0328C13.5721 20.6615 13.6839 21.3041 13.8375 21.9608C14.0751 22.9387 14.4243 23.9447 14.7037 24.9087C14.9832 25.8726 15.2067 26.7947 15.2067 27.5771C15.2067 27.9124 15.1648 28.2058 15.0949 28.4852C15.039 28.6529 14.9832 28.8205 14.8854 28.9742C14.1449 28.6948 13.4743 28.2617 12.9155 27.7168C11.9235 26.7249 11.3088 25.3418 11.3088 23.8329ZM20.6973 27.7168C20.4737 27.9404 20.2362 28.1359 19.9848 28.3176C20.0267 28.0801 20.0406 27.8426 20.0406 27.5911C20.0406 26.9624 19.9289 26.3197 19.7752 25.6631C19.5377 24.6851 19.1884 23.6792 18.909 22.7152C18.6296 21.7512 18.406 20.8291 18.406 20.0607C18.406 19.7394 18.448 19.432 18.5178 19.1666C18.5737 18.9989 18.6296 18.8453 18.7134 18.6916C19.4539 18.971 20.1245 19.4041 20.6833 19.9629C21.6753 20.9549 22.29 22.324 22.29 23.8469C22.3039 25.3418 21.6892 26.7249 20.6973 27.7168Z"
                    fill="#FFF"
                  />
                  <path
                    d="M0.682932 35.8692C5.90342 36.6175 11.2224 37 16.5086 37C21.7783 37 27.1137 36.6175 32.3342 35.8692C32.761 35.8027 33.0565 35.4036 32.9909 34.9879L29.1658 7.93213C29.133 7.73258 29.0345 7.53303 28.8703 7.41663C28.7061 7.2836 28.4927 7.23371 28.2957 7.26697C27.1465 7.43326 25.9974 7.56629 24.8482 7.6827C24.6676 5.72045 23.8304 3.90787 22.435 2.49438C20.8426 0.881348 18.7412 0 16.5086 0C12.1417 0 8.5465 3.37573 8.1525 7.6827C7.00334 7.56629 5.85417 7.43326 4.70501 7.26697C4.50801 7.23371 4.29459 7.2836 4.13042 7.41663C3.96626 7.54966 3.85134 7.73258 3.83493 7.93213L0.00984998 34.9712C-0.0229833 35.1708 0.0262666 35.387 0.1576 35.5533C0.288933 35.7196 0.469516 35.836 0.682932 35.8692ZM16.4921 1.56315C18.3144 1.56315 20.0381 2.2782 21.3351 3.59191C22.4678 4.73933 23.1573 6.21933 23.3051 7.81573C18.7741 8.18157 14.2102 8.18157 9.69566 7.81573C10.024 4.3236 12.9462 1.56315 16.4921 1.56315ZM5.24676 8.91326C6.19892 9.04629 7.15109 9.14607 8.10325 9.24584V10.9254C7.59433 11.2081 7.23317 11.7569 7.23317 12.3888C7.23317 13.3034 7.97192 14.0517 8.87483 14.0517C9.77775 14.0517 10.5165 13.3034 10.5165 12.3888C10.5165 11.7569 10.1553 11.2081 9.64641 10.9254V9.3955C14.1938 9.76135 18.7741 9.76135 23.3215 9.3955V10.9254C22.8126 11.2081 22.4514 11.7569 22.4514 12.3888C22.4514 13.3034 23.1901 14.0517 24.0931 14.0517C24.996 14.0517 25.7347 13.3034 25.7347 12.3888C25.7347 11.7569 25.3735 11.2081 24.8646 10.9254V9.26247C25.8168 9.1627 26.769 9.06292 27.7211 8.92989L31.3328 34.4225C26.4242 35.0876 21.45 35.4369 16.4921 35.4369C11.5343 35.4369 6.56009 35.1043 1.65151 34.4225L5.24676 8.91326Z"
                    fill="#FFF"
                  />
                </svg>
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
              {product &&
                product.attributes?.map((item: ProductAttribute) => (
                  <Box key={item.id} className="separator">
                    <ProductAttributeBox attribute={item} />
                  </Box>
                ))}
            </Box>
          </Container>
          <figure className="plant right"></figure>
        </WavyBackground>
        <Container className="overflow-top">
          <Box className="product-attribute-accordion">
            {product &&
              product.contents?.map(({ title, content }, id) => (
                <Accordion className="accordion-item" key={id}>
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Box className="accordion-item-title">
                      <Typography>{title}</Typography>
                      <KeyboardArrowDown color="primary" />
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
