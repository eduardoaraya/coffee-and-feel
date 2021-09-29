import {
  ProductAttribute,
  ProductContent,
  ProductInterface,
} from '@atlascode/coffee-front-components';

export const plansData = [
  {
    id: 1,
    name: 'Basic',
    priceTotal: 'R$ 17,90',
    price: 'R$ 24,90',
    porcent: 0.1,
    // color: '#BBB',
  },
  {
    id: 2,
    name: 'Standard',
    priceTotal: 'R$ 37,90',
    price: 'R$ 49,90',
    porcent: 0.15,
    // color: '#704241',
  },
  {
    id: 3,
    name: 'Premium',
    priceTotal: 'R$ 53,90',
    price: 'R$ 60,90',
    porcent: 0.2,
    // color: '#362d26	',
  },
];

export const attributes = [
  {
    id: 1,
    attributeCode: 'points',
    label: 'Pontuação',
    value: '9.4',
  },
  {
    id: 2,
    attributeCode: 'intensity',
    label: 'Intensity',
    value: '9',
  },
  {
    id: 3,
    attributeCode: 'type',
    label: 'Tipo',
    value: 'Torrado e moído em cápsulas',
  },
  {
    id: 4,
    attributeCode: 'origin',
    label: 'Origem',
    value: 'Pedra Azul - ES',
  },
] as ProductAttribute[];

export const contents = [
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
] as ProductContent[];

export default [
  {
    id: 1,
    feelPoints: 70,
    name: 'Product test',
    plans: plansData,
    sku: 'product-test-1',
    contents,
    attributes,
  },
  {
    id: 2,
    feelPoints: 70,
    name: 'Product test',
    plans: plansData,
    sku: 'product-test-2',
    contents,
    attributes,
  },
  {
    id: 3,
    feelPoints: 70,
    name: 'Product test',
    plans: plansData,
    sku: 'product-test-3',
    contents,
    attributes,
  },
  {
    id: 4,
    feelPoints: 70,
    name: 'Product test',
    plans: plansData,
    sku: 'product-test-4',
    contents,
    attributes,
  },
] as ProductInterface[];
