import { Route, Routes } from 'react-router-dom'

import { PokedexPage } from '../pokedex/pages/PokedexPage'
import { Footer, NavBar } from '../ui/components'

export const AppRouter = () => {
  return (
    <>
        <NavBar />
        <Routes>
            <Route path="/" element={ <PokedexPage /> } />
        </Routes>
        <Footer />
    </>
  )
}
