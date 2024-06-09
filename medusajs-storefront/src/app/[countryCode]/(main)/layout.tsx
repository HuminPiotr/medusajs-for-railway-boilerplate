import { Metadata } from "next"

// import Footer from "@modules/layout/templates/footer"
import Footer from "@modules/layout/templates/footer_new";
// import Nav from "@modules/layout/templates/nav"
import Nav from "@modules/layout/components/nav"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  )
}
