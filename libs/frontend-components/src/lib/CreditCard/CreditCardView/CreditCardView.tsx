import React from 'react';
import {
  Box,
  InputBase,
  Typography,
  InputBaseProps,
  TypographyProps,
} from '@material-ui/core';
import CreditCardChipSVG from './CreditCardChipSVG';
import CreditCardTextField, {
  CreditCardTextFieldProps,
} from './CreditCardTextField';
import { Property } from 'csstype';
import { ResponsiveStyleValue } from '@material-ui/system';

/* eslint-disable-next-line */
export interface CreditCardViewProps {
  flip?: boolean;
  CardNumberFieldProps?: CreditCardTextFieldProps;
  CardNameFieldProps?: CreditCardTextFieldProps;
  CardExpiryDateFieldProps?: CreditCardTextFieldProps;
  CardCVVFieldProps?: InputBaseProps;
  BackNameProps?: TypographyProps;
  fontSize?: ResponsiveStyleValue<Property.FontSize>;
}

export function CreditCardView({
  flip = false,
  CardNameFieldProps,
  CardNumberFieldProps,
  CardExpiryDateFieldProps,
  CardCVVFieldProps,
  BackNameProps,
  fontSize = '10px',
}: CreditCardViewProps) {
  return (
    <Box
      sx={{
        // Change fontsize to scale entire component
        bgcolor: 'transparent',
        fontSize: fontSize,
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
              {...CardNumberFieldProps}
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
                {...CardNameFieldProps}
                fontSize="1.15em"
                label="Nome"
                variant="standard"
                fullWidth
                sx={{ pr: 4 }}
              />
              <CreditCardTextField
                {...CardExpiryDateFieldProps}
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
            bgcolor: (theme) => theme.palette.grey[800],
            transform: 'rotateY(180deg)',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              width: '100%',
              height: '100%',
              gridTemplateColumns: '1fr',
              gridTemplateRows: '30% 50% 20%',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '3.5em',
                bgcolor: (theme) => theme.palette.grey[900],
                alignSelf: 'flex-end',
              }}
            />

            <Box
              sx={{
                width: '100%',
                height: '2.75em',
                alignSelf: 'center',
                px: 4,
              }}
            >
              <Box
                sx={{
                  borderRadius: '4px',
                  width: '100%',
                  height: '100%',
                  bgcolor: (theme) => theme.palette.grey[500],
                  display: 'grid',
                  gridTemplateColumns: '80% 20%',
                }}
              >
                <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                  <Typography
                    {...BackNameProps}
                    sx={{ p: 0, m: 0, px: 0.5, fontSize: '1.1em' }}
                    fontFamily="cursive"
                    noWrap={true}
                  ></Typography>
                </Box>
                <Box
                  sx={{
                    borderTopRightRadius: '4px',
                    borderBottomRightRadius: '4px',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    px: 0.5,
                    bgcolor: (theme) => theme.palette.grey[600],
                  }}
                >
                  <Box
                    {...CardCVVFieldProps}
                    component={InputBase}
                    sx={{
                      p: 0,
                      color: (theme) => theme.palette.grey[300],
                      fontSize: '1.15em !important',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CreditCardView;
