import { Metadata } from "next"

// import Footer from "@modules/layout/templates/footer"
import Footer from "@modules/layout/templates/footer";
// import Nav from "@modules/layout/templates/nav"
import TopBar from "@modules/layout/components/TopBar"
import CartButton from '@modules/layout/components/cart-button';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <TopBar variant="white"> 
        <CartButton />
      </TopBar>
      {props.children}
      <Footer />
    </>
  )
}
