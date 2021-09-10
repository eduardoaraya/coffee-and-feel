import React from 'react';
import { Box, TextField } from '@material-ui/core';
import CreditCardChipSVG from './CreditCardChipSVG';
import CreditCardTextField from './CreditCardTextField';

/* eslint-disable-next-line */
export interface CreditCardViewProps {
  flip?: boolean;
}

export function CreditCardView({ flip = false }: CreditCardViewProps) {
  return (
    <Box
      sx={{
        // Change fontsize to scale entire component
        bgcolor: 'transparent',
        fontSize: '10px',
        width: '26.8em',
        height: '16.5em',
        perspective: '1000px',
        cursor: 'pointer',
      }}
    >
      <Box
        id="card-inner"
        sx={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          width: '100%',
          position: 'relative',
          height: '100%',
          ...(flip && { transform: 'rotateY(180deg)' }),
        }}
      >
        <Box
          id="card-front"
          sx={{
            position: 'absolute',
            bgcolor: '#333',
            display: 'grid',
            borderRadius: '9px',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '30% 70%',
            overflow: 'hidden',
            height: '100%',
            backfaceVisibility: 'hidden',
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
            <CreditCardTextField
              fontSize="1em"
              label="Nome"
              variant="standard"
            />
            <CreditCardTextField
              fontSize="1em"
              label="Vencimento"
              variant="standard"
            />
            <CreditCardTextField
              fontSize="1em"
              label="CVV"
              variant="standard"
            />
          </Box>
        </Box>

        <Box
          id="card-back"
          sx={{
            position: 'absolute',
            backfaceVisibility: 'hidden',
            width: '100%',
            height: '100%',
            borderRadius: '9px',
            bgcolor: 'blue',
            transform: 'rotateY(180deg)',
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default CreditCardView;
