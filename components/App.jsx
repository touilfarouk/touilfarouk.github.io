const { BrowserRouter, Route, Link, Routes, useLocation, Outlet, useParams } = ReactRouterDOM;
import Header from "./Header";
import Aside from "./Aside";
const App = () => {
  return (
    <>
        <BrowserRouter>

      <div id="main">
        <Header />
        <Aside />

         {/* <!-- wrapper  --> */}
      <div id="wrapper">
         {/* <!-- navigation menu--> */}
        <div class="nav-holder">
          <div class="nav-holder-wrap but-hol">
            <div class="nav-container fl-wrap">
               {/* <!-- nav --> */}
              <nav class="nav-inner" id="menu">
                <ul>
                  <li>
                    <a href="#" class="act-link">Home</a>
                     {/* <!--level 2 --> */}
                    <ul>
                      <li><a href="index.html" class="ajax">Slider</a></li>
                      <li><a href="index2.html" class="ajax">Carousel</a></li>
                      <li><a href="index3.html" class="ajax">Slideshow</a></li>
                      <li><a href="index4.html" class="ajax">Video</a></li>
                      <li><a href="index5.html" class="ajax">Image</a></li>
                    </ul>
                     {/* <!--level 2 end --> */}
                  </li>
                  <li><a href="about.html" class="ajax">About</a></li>
                  <li>
                    <a href="#">Portfolio</a>
                     {/* <!--level 2 --> */}
                    <ul>
                      <li>
                        <a href="portfolio.html" class="ajax">Horizonatal</a>
                      </li>
                      <li>
                        <a href="portfolio3.html" class="ajax"
                          >Fullscreen Grid
                        </a>
                      </li>
                      <li>
                        <a href="portfolio2.html" class="ajax">Column Grid</a>
                      </li>
                      <li>
                        <a href="portfolio4.html" class="ajax">Column Grid 2</a>
                      </li>
                      <li>
                        <a href="#">Single</a>
                         {/* <!--level 3 --> */}
                        <ul>
                          <li>
                            <a href="portfolio-single.html" class="ajax"
                              >Style 1</a
                            >
                          </li>
                          <li>
                            <a href="portfolio-single2.html" class="ajax"
                              >Style 2</a
                            >
                          </li>
                          <li>
                            <a href="portfolio-single3.html" class="ajax"
                              >Style 3</a
                            >
                          </li>
                          <li>
                            <a href="portfolio-single4.html" class="ajax"
                              >Style 4</a
                            >
                          </li>
                          <li>
                            <a href="portfolio-single5.html" class="ajax"
                              >Style 5</a
                            >
                          </li>
                        </ul>
                         {/* <!--level 3 end --> */}
                      </li>
                    </ul>
                     {/* <!--level 2 end --> */}
                  </li>
                  <li><a href="contacts.html" class="ajax">Contacts</a></li>
                  <li><a href="blog.html" class="ajax">Blog</a></li>
                </ul>
              </nav>
               {/* <!-- nav end--> */}
            </div>
            <div class="nav-footer">
              <span>&#169; Codacom 2023 / All rights reserved. </span>
            </div>
            <div class="nav-holder-wrap_line"></div>
            <div class="nav-holder-wrap_dec"></div>
          </div>
        </div>
        <div class="nav-overlay"></div>
         {/* <!-- navigation menu end  --> */}
         {/* <!-- content--> */}
        <div class="content full-height" data-pagetitle="Home slider">
          <div class="fl-wrap full-height hero-conatiner">
            <div class="hero-wrapper fl-wrap full-height hidden-item">
              <span class="hc_dec"></span>
               {/* <!-- fs-slider-wrap  --> */}
               {/* <!-- hero-slider-wrap --> */}
              <div
                class="hero-slider-wrap home-half-slider fl-wrap full-height"
              >
                <div class="hero-slider fs-gallery-wrap fl-wrap full-height">
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                       {/* <!-- swiper-slide--> */}
                      <div class="swiper-slide">
                        <div class="half-hero-wrap">
                          <div class="hhw_header">
                            Bienvenue sur mon site web
                          </div>
                          <h1>
                            Web Specialist - <br /><span
                              >Développeur d'applications web</span
                            >
                            expérimenté<br />
                            des Entreprises
                          </h1>
                          <h4>
                            Je suis un développeur web expérimenté, spécialisé
                            dans la conception et le développement de sites web
                            conviviaux et performants. J'ai une expertise dans
                            l'utilisation des dernières technologies pour créer
                            des expériences utilisateur exceptionnelles. Mon
                            objectif est de fournir des solutions web de haute
                            qualité, répondant aux besoins et aux attentes de
                            mes utilisateurs.
                          </h4>
                          <div class="clearfix"></div>
                          <a
                            href="portfolio.html"
                            class="btn ajax fl-btn color-bg"
                            ><span>Mon portfolio</span></a
                          >
                        </div>
                      </div>
                       {/* <!-- swiper-slide end--> */}
                       {/* <!-- swiper-slide--> */}
                      <div class="swiper-slide">
                        <div class="half-hero-wrap">
                          <div class="hhw_header">12 décembre 2020</div>
                          <h1>
                            Conception et développement <br />
                            d'applications mobiles <br />
                            innovantes
                          </h1>
                          <h4>
                            Je suis un développeur web expérimenté, spécialisé
                            dans la conception et le développement de sites web
                            conviviaux et performants. J'ai une expertise dans
                            l'utilisation des dernières technologies pour créer
                            des expériences utilisateur exceptionnelles. Mon
                            objectif est de fournir des solutions web de haute
                            qualité, répondant aux besoins et aux attentes de
                            mes utilisateurs.
                          </h4>
                          <div class="clearfix"></div>
                          <a
                            href="portfolio-single.html"
                            class="btn ajax fl-btn color-bg"
                            ><span>Voir le projet</span></a
                          >
                        </div>
                      </div>
                       {/* <!-- swiper-slide end--> */}
                       {/* <!-- swiper-slide--> */}
                      <div class="swiper-slide">
                        <div class="half-hero-wrap">
                          <div class="hhw_header">25 mai 2019</div>
                          <h1>
                            Expérience utilisateur <br />
                            optimisée pour les <br />
                            applications mobiles
                          </h1>
                          <h4>
                            Je suis un développeur web expérimenté, spécialisé
                            dans la conception et le développement de sites web
                            conviviaux et performants. J'ai une expertise dans
                            l'utilisation des dernières technologies pour créer
                            des expériences utilisateur exceptionnelles. Mon
                            objectif est de fournir des solutions web de haute
                            qualité, répondant aux besoins et aux attentes de
                            mes utilisateurs.
                          </h4>
                          <div class="clearfix"></div>
                          <a
                            href="portfolio.html"
                            class="btn ajax fl-btn color-bg"
                            ><span>Voir le projet</span></a
                          >
                        </div>
                      </div>
                       {/* <!-- swiper-slide end--> */}
                       {/* <!-- swiper-slide--> */}
                      <div class="swiper-slide">
                        <div class="half-hero-wrap">
                          <div class="hhw_header">12 avril 2020</div>
                          <h1>
                            Conception originale <br />
                            avec un code de haute <br />
                            qualité.
                          </h1>
                          <h4>
                            Je suis un développeur web expérimenté, spécialisé
                            dans la conception et le développement de sites web
                            conviviaux et performants. J'ai une expertise dans
                            l'utilisation des dernières technologies pour créer
                            des expériences utilisateur exceptionnelles. Mon
                            objectif est de fournir des solutions web de haute
                            qualité, répondant aux besoins et aux attentes de
                            mes utilisateurs.
                          </h4>
                          <div class="clearfix"></div>
                          <a href="about.html" class="btn ajax fl-btn color-bg"
                            ><span>À propos de moi</span></a
                          >
                        </div>
                      </div>
                       {/* <!-- swiper-slide end--> */}
                    </div>
                  </div>
                </div>
              </div>
               {/* <!-- hero-slider-wrap  end--> */}
               {/* <!-- hero-slider-img--> */}
              <div class="hero-slider-img hero-slider-wrap_halftwo hidden-item">
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                     {/* <!-- swiper-slide--> */}
                    <div class="swiper-slide">
                      <div
                        class="bg"
                        data-bg="images/bg/10.jpg"
                        data-swiper-parallax="20%"
                      ></div>
                      <div class="overlay"></div>
                    </div>
                     {/* <!-- swiper-slide end--> */}
                     {/* <!-- swiper-slide--> */}
                    <div class="swiper-slide">
                      <div
                        class="bg"
                        data-bg="images/bg/7.jpg"
                        data-swiper-parallax="20%"
                      ></div>
                      <div class="overlay"></div>
                    </div>
                     {/* <!-- swiper-slide end--> */}
                     {/* <!-- swiper-slide--> */}
                    <div class="swiper-slide">
                      <div
                        class="bg"
                        data-bg="images/bg/8.jpg"
                        data-swiper-parallax="20%"
                      ></div>
                      <div class="overlay"></div>
                    </div>
                     {/* <!-- swiper-slide end--> */}
                     {/* <!-- swiper-slide--> */}
                    <div class="swiper-slide">
                      <div
                        class="bg"
                        data-bg="images/bg/13.jpg"
                        data-swiper-parallax="20%"
                      ></div>
                      <div class="overlay"></div>
                    </div>
                     {/* <!-- swiper-slide end--> */}
                  </div>
                </div>
                <div class="hero-corner-dec"></div>
                <div class="hero-corner-dec2"></div>
              </div>
               {/* <!-- hero-slider-img  end--> */}
               {/* <!-- slider-controls --> */}
              <div class="slider-progress-bar">
                <span>
                  <svg class="circ" width="50" height="50">
                    <circle
                      class="circ2"
                      cx="25"
                      cy="25"
                      r="23"
                      stroke="rgba(255,255,255,0.4)"
                      stroke-width="1"
                      fill="none"
                    />
                    <circle
                      class="circ1"
                      cx="25"
                      cy="25"
                      r="23"
                      stroke="#fff"
                      stroke-width="2"
                      fill="none"
                    />
                  </svg>
                </span>
              </div>
              <div class="clone-counter">
                <div class="current">01</div>
              </div>
              <div class="swiper-counter hs_counter">
                <div class="current">01</div>
                <div class="total"></div>
              </div>
              <div class="hero-slider_control-wrap">
                <div class="hsc hsc-prev">
                  <span><i class="fal fa-angle-left"></i></span>
                </div>
                <div class="hsc hsc-next">
                  <span><i class="fal fa-angle-right"></i></span>
                </div>
              </div>
               {/* <!-- slider-controls end--> */}
              <a href="about.html" class="ajax start-btn"
                ><span>
                  Start explore <i class="fal fa-long-arrow-right"></i></span
              ></a>
              <div class="play-pause_slider hsc_pp auto_actslider">
                <i class="fas fa-play"></i>
              </div>
            </div>
             {/* <!-- hero-container end--> */}
            <div class="wrapper hero-decor-numb"></div>
            <div class="hero-slider-wrap_pagination"></div>
            <div class="hero-scroll-down-notifer">
              <div class="scroll-down-wrap">
                <div class="mousey">
                  <div class="scroller"></div>
                </div>
              </div>
              <i class="far fa-angle-down"></i>
            </div>
          </div>
        </div>
         {/* <!-- content end --> */}
         {/* <!-- share-wrapper--> */}
        <div class="share-wrapper">
          <div class="close-share-btn">
            <i class="fal fa-long-arrow-left"></i>
          </div>
          <div class="share-container fl-wrap isShare"></div>
        </div>
         {/* <!-- share-wrapper  end --> */}
      </div>
       {/* <!-- wrapper end --> */}
       {/* <!-- cursor--> */}
      <div class="element">
        <div class="element-item"></div>
      </div>
       {/* <!-- cursor end--> */}
    </div>
  

    </BrowserRouter>
    </>
  )
}

export default App;
