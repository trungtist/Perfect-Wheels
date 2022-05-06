// HTML header
const headerHTML = `
    <header class="header">
        <div class="nav container d-flex">
            <a href="index.html" class="nav__logo">
                <span>Perfect</span>
                Wheels
            </a>
            <div class="nav__menu">
                <ul class="nav__list d-flex">
                    <li class="nav__item">
                        <a href="catalog.html" class="nav__link nav__link-hover d-flex">
                            Catalog
                            <i class="fa-solid fa-sort-down nav__link-icon"></i>
                        </a>
                        <ul class="sub__nav">
                            <li class="sub__navItem sub__navItem-hover">
                                <a href="#" class="d-flex">
                                    Economy
                                    <i class="fa-solid fa-angle-right"></i>
                                </a>
                                <ul class="sub__nav sub__nav-item">
                                    <li class="sub__navItem sub__navItem-hover sub__navItem-item"><a href="#">Hatchback Cars</a></li>
                                    <li class="sub__navItem sub__navItem-hover sub__navItem-item"><a href="#">Subcompact Cars</a></li>
                                    <li class="sub__navItem sub__navItem-hover sub__navItem-item"><a href="#">Compact Cars</a></li>
                                    <li class="sub__navItem sub__navItem-hover sub__navItem-item"><a href="#">Roadsters/Sports Cars</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="sub__navItem sub__navItem-hover">
                                <a href="#" class="d-flex">
                                    Standard
                                    <i class="fa-solid fa-angle-right"></i>
                                </a>
                                <ul class="sub__nav sub__nav-item">
                                    <li class="sub__navItem sub__navItem-hover sub__navItem-item"><a href="#">Full-Size Sedans</a></li>
                                    <li class="sub__navItem sub__navItem-hover sub__navItem-item"><a href="#">Premium Cars</a></li>
                                    <li class="sub__navItem sub__navItem-hover sub__navItem-item"><a href="#">Hybrid Cars</a></li>
                                </ul>
                            </li>
                            <li class="sub__navItem sub__navItem-hover">
                                <a href="#" class="d-flex">
                                    Minivans
                                </a>
                            </li>
                            <li class="sub__navItem sub__navItem-hover">
                                <a href="" class="d-flex">
                                    Luxury Cars
                                </a>
                            </li>
                            <li class="sub__navItem sub__navItem-hover">
                                <a href="" class="d-flex">
                                    Best Rentals
                                </a>
                            </li>
                            <li class="sub__navItem sub__navItem-hover">
                                <a href="" class="d-flex">
                                    Sales Off
                                    <i class="fa-solid fa-star-half"></i>
                                </a>
                            </li>
                        </ul>
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
            <div class="nav__connect d-flex">
                <div class="button button-hover">
                    <a href="" class="nav__link">
                        Login
                    </a>
                </div>
                <div class="button button-hover">
                    <a href="" class="nav__link">
                        Register
                    </a>
                </div>
            </div>
        </div>
    </header>
`

class Header extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = headerHTML
    }


}

// Create element header-component ~ header
customElements.define('header-component', Header)

handleActiveLinks()

// ===== Active current link ===== 

function handleActiveLinks() {
    const links = document.querySelectorAll('.nav__link-hover')
    // console.log(links);

    links.forEach((link, index) => {
        link.addEventListener('click', () => {
            const linked =
                document.querySelector('.nav__link-hover.active')
            console.log(linked); //null

            if (linked != null) {
                linked.classList.remove('active')
                linked.style.opacity = '.6'
            }

            link.classList.add('active')
            link.style.opacity = '1'

        })
    })

}

// const headerElement = document.querySelector('.header')
// // console.log(headerElement);
// let headerHtml = `
//     <div class="nav container d-flex">
//         <a href="#home" class="nav__logo">
//             <span>Perfect</span>
//             Wheels
//         </a>
//         <div class="nav__menu">
//             <ul class="nav__list d-flex">
//                 <li class="nav__item">
//                     <a href="#" class="nav__link nav__link-hover">
//                         Catalog
//                     </a>
//                 </li>
//                 <li class="nav__item">
//                     <a href="#" class="nav__link nav__link-hover">
//                         Services
//                     </a>
//                 </li>
//                 <li class="nav__item">
//                     <a href="#" class="nav__link nav__link-hover">
//                         Terms and Conditions
//                     </a>
//                 </li>
//                 <li class="nav__item">
//                     <a href="#" class="nav__link nav__link-hover">
//                         Promotions
//                     </a>
//                 </li>
//                 <li class="nav__item">
//                     <a href="#" class="nav__link nav__link-hover">
//                         About Us
//                     </a>
//                 </li>
//             </ul>
//         </div>
//         <div class="nav__connect d-flex">
//             <div class="button button-hover">
//                 <a href="" class="nav__link">
//                     Login
//                 </a>
//             </div>
//             <div class="button button-hover">
//                 <a href="" class="nav__link">
//                     Register
//                 </a>
//             </div>
//         </div>
//     </div>
// `

// headerElement.innerHTML = headerHtml
