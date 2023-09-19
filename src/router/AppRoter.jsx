import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRoter = () => {
  return (
    <Routes>
      {/* rutas para mi login y registro */}
      <Route path='/auth/*' element={ <AuthRoutes /> } />

      {/* rutas donde el usuario que ya esta autenticada podra trabajar JourmalApp */}
      <Route path='/*' element={ <JournalRoutes /> } />
    </Routes>
  )
}
