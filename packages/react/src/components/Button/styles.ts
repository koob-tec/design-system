import styled, { css } from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';
import {
	colors,
	fontFamily,
	borderRadius,
	fontWeight,
	fontSizes,
	opacity,
	borderWidth,
} from '@koob-jobs-ui/tokens';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
}

export const ButtonStyled = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${colors['primary-pure']};
  border: 0;
  border-radius: ${borderRadius.sm};
  padding: 12px 24px;
  cursor: pointer;

  font-weight: ${fontWeight.medium};
  color: ${colors['high-pure']};
  font-size: ${pxToRem(fontSizes.xs)};
  text-align: center;
  transition: 0.2s;
  /* font-family: ${fontFamily.base}; */
  font-family: Poppins;

  :disabled {
    background-color: ${colors['high-medium']};
    color: ${colors['low-light']};
    cursor: not-allowed;
  }

  ${props => props.variant === 'primary' && css`
    :not(:disabled):hover {
      opacity: ${opacity.semiopaque};
    }
  `}

  ${(props) =>
		props.variant === 'secondary' &&
    css`
      background-color: transparent;
      color: ${colors['primary-pure']};
      border: ${borderWidth.thin} solid ${colors['primary-pure']};

      :disabled {
        border: none;
      }

      :not(:disabled):hover {
        background-color: ${colors['high-light']};
      }
    `};

  ${(props) =>
		props.variant === 'tertiary' &&
    css`
      background-color: transparent;
      color: ${colors['high-pure']};
      border: ${borderWidth.thin} solid ${colors['high-pure']};

      :disabled {
        border: none;
        opacity: ${opacity.light};
      }
    `};
`;
