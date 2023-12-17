'use client';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import StyledComponentsRegistry from '../../../lib/registry';
import GlobalStyles from '../../../styles/globalStyles';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        {props.children} 
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers