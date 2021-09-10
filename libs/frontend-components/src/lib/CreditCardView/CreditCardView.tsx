import React from 'react';
import { Box } from '@material-ui/core';
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
        width: '32.8em',
        height: '18.5em',
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
              gridTemplateColumns: '1fr',
              gridTemplateRows: '1fr 1fr',
              gap: 1,
              px: 3,
              pb: 1.5,
              justifyItems: 'center',
            }}
          >
            <CreditCardTextField
              fontSize="1.15em"
              label="Número do cartão"
              variant="standard"
              fullWidth
            />
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '75% 25%',
              }}
            >
              <CreditCardTextField
                fontSize="1.15em"
                label="Nome"
                variant="standard"
                fullWidth
                sx={{ pr: 5 }}
              />
              <CreditCardTextField
                fontSize="1.15em"
                label="Vencimento"
                variant="standard"
                fullWidth
              />
            </Box>
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
