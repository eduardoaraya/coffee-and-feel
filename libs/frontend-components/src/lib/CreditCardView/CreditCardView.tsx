import React from 'react';
import { Box, TextField } from '@material-ui/core';
import CreditCardChipSVG from './CreditCardChipSVG';
import CreditCardTextField from './CreditCardTextField';

/* eslint-disable-next-line */
export interface CreditCardViewProps {}

export function CreditCardView(props: CreditCardViewProps) {
  return (
    <Box
      sx={{
        // Change fontsize to scale entire component
        fontSize: '10px',
        bgcolor: '#333',
        width: '26.8em',
        height: '16.5em',
        borderRadius: '9px',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: '30% 70%',
          overflow: 'hidden',
          height: '100%',
        }}
      >
        <CreditCardChipSVG
          sx={{ width: '3.1em', height: '2em', alignSelf: 'center', ml: 2 }}
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridAutoFlow: 'row',
            gap: 1,
            columnGap: 5,
            px: 2,
            pb: 1.5,
            justifyItems: 'center',
          }}
        >
          <CreditCardTextField
            fontSize="1em"
            label="Número do cartão"
            variant="standard"
          />
          <CreditCardTextField fontSize="1em" label="Nome" variant="standard" />
          <CreditCardTextField
            fontSize="1em"
            label="Vencimento"
            variant="standard"
          />
          <CreditCardTextField fontSize="1em" label="CVV" variant="standard" />
        </Box>
      </Box>
    </Box>
  );
}

export default CreditCardView;
