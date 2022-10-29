import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
const isTablet = breakpoints.between('sm', 'md');
const isMobile = breakpoints.smaller('md');
const isLarge = breakpoints.greater('lg');
const isTabletOrDesktop = breakpoints.greater('md');

export function useResponsive() {
  return {
    isMobile,
    isLarge,
    isTablet,
    isTabletOrDesktop,
  };
}

export default useResponsive;
