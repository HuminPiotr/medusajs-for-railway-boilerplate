'use client';

import './styles.scss';

import React, {useState, useEffect} from 'react';
import { usePathname } from 'next/navigation';

import { Suspense } from "react"

// import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SideMenu from "@modules/layout/components/side-menu"
import Logo from "@modules/layout/components/Logo"



export interface TopBarProps  {
  variant?: "default" | "white";
  children: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({children, variant = "default"})  =>{
  const [menuIsOpen, setMenu] = useState(false);
  const [isAboveHero, setIsAboveHero] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenu(false);
  },[pathname]);

  useEffect(() => {
    const heroSection = document.querySelector('.hero'); 
  
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAboveHero(true);
        } else {
          setIsAboveHero(false);
        }
      },
      { rootMargin: '0px 0px 0px 0px' } // Możesz dostosować rootMargin, aby lepiej pasował do twojego layoutu
    );
  
    if (heroSection) observer.observe(heroSection);
  
    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, [pathname]);

  return (
    <div className={variant === "default" || menuIsOpen || !isAboveHero ? `topbar` : `topbar topbar--white` }>
      <div className="topbar__panel">
        <div className="container">
          <div className="topbar__panel-leftMenu">
            {/* <Hamburger action={() => setMenu(!menuIsOpen)} color={!menuIsOpen && isAboveHero ? variant : "default"}/> */}
            <SideMenu regions={null} color={!menuIsOpen && isAboveHero ? variant : "default"}/>
            <nav className="topbar__panel-navigation">
              <ul>
                <li className="topbar__panel-navigation-link">
                  <LocalizedClientLink href="/sklep">Sklep</LocalizedClientLink>
                </li>
                <li className="topbar__panel-navigation-link">
                  <LocalizedClientLink href="/kontakt">Kontakt</LocalizedClientLink>
                </li>
              </ul>
            </nav>
          </div>
          <Logo variant={!menuIsOpen && isAboveHero ? variant : "default"}/>
          {/* <CartButton 
            color={!menuIsOpen && isAboveHero ? variant : "default"}  
          /> */}
          <div className="topbar__panel-rightMenu">
            <LocalizedClientLink
                className=""
                href="/account"
              >
                Konto
            </LocalizedClientLink>
            <Suspense fallback={<LocalizedClientLink className="" href="/cart">Koszyk (0)</LocalizedClientLink>}>
              {children}
            </Suspense>
            </div>

        </div>
      </div>


      <div className={menuIsOpen ? "topbar__menu topbar__menu--open" : "topbar__menu"}>
        <div className="container">
          <div className="topbar__menu-left">
            <div className="topbar__menu-column">
              <LocalizedClientLink className="topbar__menu-link topbar__menu-link--main " href="/">
                Strona główna
              </LocalizedClientLink>
              <LocalizedClientLink className="topbar__menu-link" href="/o-nas">
                O nas
              </LocalizedClientLink>
              <LocalizedClientLink className="topbar__menu-link" href="/polityka-prywatności">
                Polityka prywatności
              </LocalizedClientLink>
            </div>
            <div className="topbar__menu-column">
              <LocalizedClientLink className="topbar__menu-link topbar__menu-link--main " href="/sklep">
                Sklep
              </LocalizedClientLink>
              <LocalizedClientLink className="topbar__menu-link" href="/sklep/krzesla">
                Krzesła
              </LocalizedClientLink>
              <LocalizedClientLink className="topbar__menu-link" href="/sklep/stoly">
                Stoły
              </LocalizedClientLink>
              <LocalizedClientLink className="topbar__menu-link" href="/sklep/szafy">
                Szafy
              </LocalizedClientLink>
              <LocalizedClientLink className="topbar__menu-link" href="/sklep/komody">
                Komody
              </LocalizedClientLink>
              <LocalizedClientLink className="topbar__menu-link" href="/sklep/obrazy">
                Obrazy
              </LocalizedClientLink>
              <LocalizedClientLink className="topbar__menu-link" href="/sklep/dekoracje">
                Dekoracje
              </LocalizedClientLink>
            </div>
            <div className="topbar__menu-column">
              <LocalizedClientLink className="topbar__menu-link topbar__menu-link--main" href="/kontakt">
                Kontakt
              </LocalizedClientLink>
              {/* <p>{CONTACT.street} </p>
              <p>{CONTACT.city}</p>
              <a href={`tel:${CONTACT.phone}`}></a>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> */}
              {/* <FacebookButton /> */}
            </div>
          </div>
          
          <div className="tobar__menu-right">
            {/* <Searcher placeholder="SZUKAJ"/> */}
          </div>
        </div>
      </div>
    </div>
  );



  // const regions = await listRegions().then((regions) => regions)

  // return (
  //   <div className="navigation sticky top-0 inset-x-0 z-50 group">
  //     <header className="header relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
  //       <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
  //         <div className="flex-1 basis-0 h-full flex items-center">
  //           <div className="h-full">
  //             <SideMenu regions={null} />
  //           </div>
  //         </div>

  //         <div className="flex items-center h-full">
  //           {/* <LocalizedClientLink
  //             href="/"
  //             className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
  //           > */}
  //             <Logo />
  //           {/* </LocalizedClientLink> */}
  //         </div>

  //         <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
  //           <div className="hidden small:flex items-center gap-x-6 h-full">
  //             {process.env.FEATURE_SEARCH_ENABLED && (
  //               <LocalizedClientLink
  //                 className="hover:text-ui-fg-base"
  //                 href="/search"
  //                 scroll={false}
  //               >
  //                 Search
  //               </LocalizedClientLink>
  //             )}
  //             <LocalizedClientLink
  //               className="hover:text-ui-fg-base"
  //               href="/account"
  //             >
  //               Konto
  //             </LocalizedClientLink>
  //           </div>
  //           <Suspense
  //             fallback={
  //               <LocalizedClientLink
  //                 className="hover:text-ui-fg-base flex gap-2"
  //                 href="/cart"
  //               >
  //                 Cart (0)
  //               </LocalizedClientLink>
  //             }
  //           >
  //             <CartButton />
  //           </Suspense>
  //         </div>
  //       </nav>
  //     </header>
  //   </div>
  // )
  
}
export default TopBar;
