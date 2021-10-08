import { InternationalCurrency } from './currency';
import { InternationalLocales } from './locales';

export const formatToCurrency = (
  locale: InternationalLocales,
  currency: InternationalCurrency,
  value: number
): string => {
  const formatter = new Intl.NumberFormat(locale, {
    currency: currency,
    style: 'currency',
  });

  const result = formatter.format(value);

  return result;
};

export default formatToCurrency;
