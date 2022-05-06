const footerElement = `
    <footer class="footer">
        <div class="nav container d-flex">
            <a href="#home" class="nav__logo">
                <span>Perfect</span>
                Wheels
            </a>
            <div class="nav__menu">
                <ul class="nav__list d-flex">
                    <li class="nav__item">
                        <a href="catalog.html" class="nav__link nav__link-hover">
                            Catalog
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link nav__link-hover">
                            Services
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link nav__link-hover">
                            Terms and Conditions
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link nav__link-hover">
                            Promotions
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link nav__link-hover">
                            About Us
                        </a>
                    </li>
                </ul>
            </div>
            <div class="nav__social">
                <ul class="nav__list d-flex">
                    <li class="nav__item">
                        <a href="https://github.com/trungtist" target="_blank" class="nav__link nav__link-hover">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="https://www.facebook.com/trungtit1208/" target="_blank"
                            class="nav__link nav__link-hover">
                            <i class="fa-brands fa-facebook-square"></i>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="https://www.instagram.com/t_r_u_n_g__t_i_t/" target="_blank"
                            class="nav__link nav__link-hover">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer__line container"></div>
        <div class="footer__subcribe container d-flex">
            <h2>
                Subscribe Now
            </h2>
            <form class="footer__email">
                <input type="email" name="email" placeholder="Your Email...">
                <button type="submit" class="button">
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </form>
        </div>
        <div class="footer__madeBy container">
            <div class="container d-flex">
                <a href="https://www.google.com/maps/place/Luong+The+Vinh+Middle+School+%26+High+School/@20.9725506,105.7985899,191m/data=!3m1!1e3!4m8!1m2!2m1!1sLK3!3m4!1s0x3135acdbeee8dbd7:0x58240a9dd46645d7!8m2!3d20.9725776!4d105.798993" target="_blank">
                    <i class="fa-solid fa-location-pin"></i>
                    Address : Số 18, Liền kề 3, Tổng Cục 5, Yên Xá, Tân Triều, Thanh Trì, Hà Nội 
                </a>
                <h4>
                    <i class="fa-solid fa-copyright"></i>
                    Made by Hoang Nghia Trung
                </h4>
            </div>
        </div>
    </footer>
`

class Footer extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = footerElement
    }
}

customElements.define('footer-component', Footer)