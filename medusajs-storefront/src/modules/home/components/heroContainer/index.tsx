// import { Github } from "@medusajs/icons"
// import { Button, Heading } from "@medusajs/ui"

// import Hero from "@modules/home/components/Hero"
import Hero from "@modules/home/components/hero";

const HeroContainer = () => {
  return (
    <div className=" h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <Hero />
        {/* <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Well done! You have successfully deployed your Medusa store on Railway!
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Need help customizing your store?
          </Heading>
        </span>
        <a
          href="https://funkyton.com/tutorial-customize-your-medusajs-webshop-storefron/"
          target="_blank"
        >
          <h1 style={{ textDecoration: "underline" }}>
            Visit the tutorial
          </h1>
        </a> */}
      </div>
    </div>
  )
}

export default HeroContainer;
