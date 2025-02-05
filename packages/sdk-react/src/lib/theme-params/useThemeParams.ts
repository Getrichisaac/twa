import {useComponent} from '../../provider';
import {useEventsTracking} from '../hooks';
import {ThemeParams} from './types';

/**
 * Returns ThemeParams component instance.
 */
export function useThemeParams(): ThemeParams {
  const theme = useComponent('themeParams');
  useEventsTracking(theme, ['change']);

  return theme;
}