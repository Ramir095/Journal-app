import { AppRoter } from './router/AppRoter'
import { AppTheme } from './theme';

export const JournalApp = () => {
  return (
    // importamos el AppTheme. Podriamos hacerlo de igual forma en el archivo main pero para que no se haga un archivo muy largo lo hicimos aca
    <AppTheme>
      <AppRoter />
    </AppTheme>
  )
}
