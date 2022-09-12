import { Footer } from './Footer'
import { Header } from './Header'
import { Navbar } from './Navbar/Navbar'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
