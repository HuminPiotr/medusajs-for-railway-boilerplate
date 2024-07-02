import "./styles.scss";

import { getCategoriesList} from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image";
import Link from "next/link";


import Logo from "@modules/layout/components/Logo";

export default async function Footer() {
    const { product_categories } = await getCategoriesList(0, 6);

    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__container container">
                    <div className="footer__logo"><Logo /></div>
                    <div className="footer__info">
                        <h4 className="footer__header">Kontakt</h4>
                        <div className="footer__info-contact">
                            <p>ul. Narutowicza 7</p>
                            <p>21-500 Biała Podlaska</p>
                            <a href="tel:+48501322769">501-322-769</a>
                            <a href="mailto:hollandstyle-eco@gmai.com">hollandstyle-eco@gmai.com</a>
                        </div>
                   
                        <div className="footer__info-hours">
                            <h4 className="footer__header footer__header--small">Godziny otwarcia</h4>
                            <p>Pon. - Pt. | 10:00 - 17:00</p>
                            <p>Sobota | 10:00 - 14:00</p>
                        </div>
                    </div>

                    <div className="footer__menu">
                        <h4 className="footer__header">Sklep</h4>
                        <nav className="footer__menu-nav">
                            <ul className="grid grid-cols-1 gap-2">
                                {product_categories?.slice(0,6).map((item) => {
                                    if(item.parent_category) return;
                                
                                
                                return (
                                    <li key={item.id}>
                                        <LocalizedClientLink href={`/categories/${item.handle}`}>
                                            {item.name}
                                        </LocalizedClientLink>
                                    </li>
                                )
                                })}
                            </ul>
                        </nav>
                        <Link className="footer__facebook" href="https://www.facebook.com/profile.php?id=100063476384927" target="_blank">
                            <Image src="/images/icons/facebook.svg" alt="Icon Facebook Hollandstyle" width={32} height={32} className="footer__facebook-icon"  />
                        </Link>
                    </div>
                </div>
                <Image 
                    src="/images/ornament_footer.png"
                    alt="Footer ornament" 
                    className="footer__background"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                />
            </div>

            <div className="footer__bottom">
                <div className=" footer__container content-container">
                © {new Date().getFullYear()} Eco Hollandstyle. Wszelkie prawa zastrzeżone.
                </div>
            </div>
                        
        </footer>
    )
}