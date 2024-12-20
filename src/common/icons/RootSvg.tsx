import { styled, Theme } from '@mui/material/styles';
import { SxProps } from '@mui/material';

export type RootSvgProps<P = unknown> = Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
  sx?: SxProps<Theme>;
  ref?: React.Ref<SVGSVGElement>;
} & P;

const Svg = styled('svg')({
  verticalAlign: 'bottom',
});

export default Svg;
