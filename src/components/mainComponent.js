import React, { Component } from "react";
import Header from "./headerComponent";
import Footer from "./footerComponent";
import Logo from "../assets/images/logo.png";
import Album from "../assets/images/album.jpg";
import Tekashi from "../assets/images/tekashi.png";

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <section id="top-section">
          <div className="blurredbg"></div>
          <div className="floating-img">
            <div className="tekashi-img">
              <img src={Tekashi} />
            </div>
          </div>
        </section>
        <section id="bio">
          <div className="container">
            <p>
              Hernandez rose to prominence on social media due to a July 2017
              Instagram post that went viral on both Reddit and Twitter, where
              Hernandez's eccentric appearance (rainbow-dyed hair, a rainbow
              grill, and multiple versions of the number 69 tattooed on his
              body) turned him into an internet meme. Hernandez's commercial
              debut single "Gummo" was released on November 10, 2017 and
              eventually peaked at number 12 on the US Billboard Hot 100. It was
              certified platinum by the RIAA on March 5, 2018. His next single
              "Kooda" debuted at 61 on the Hot 100 the week of December 23,
              2017. On January 14, 2018, Hernandez released his third single
              "Keke" with Fetty Wap and A Boogie wit da Hoodie. Shortly
              afterwards, Hernandez announced his debut mixtape, Day69. The
              mixtape was released on February 23, 2018, and debuted at number
              four on the Billboard 200 album chart with 55,000 album-equivalent
              units, of which 20,000 were pure sales. According to Jon
              Caramanica of The New York Times, the tape was an outgrowth of the
              "SoundCloud rap explosion", and was notable for its willingness to
              deviate from hip-hop's norms and prevailing sound.
            </p>
            <div
              className="logo-centered"
              style={{
                display: "flex",
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 50px",
              }}
            >
              <img src={Logo} />
            </div>
          </div>
        </section>
        <section id="media">
          <div className="container">
            <div className="title">Latest Videos</div>
            <div className="videos">
              <div className="video">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/z5WrgDzNIZ0"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="video">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/ycV6cnK3SIs"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="video">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/RUTEVAdWTOY"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="video">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/VpaSoOlWKAc"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section id="music">
          <div className="blurredbg"></div>
          <div className="container">
            <div className="info">
              <div className="title">DAY 69</div>
              <div className="sub-title">6 top 100 singles</div>
              <ul className="singles">
                <li>Gummo</li>
                <li>Gotti</li>
                <li>Kooda</li>
                <li>Rondo</li>
                <li>Keeke</li>
                <li>Billy</li>
              </ul>
              <ul className="logos">
                <li>
                  <a href="https://tidal.com/browse/album/86968767">
                    <img src="https://b8dc26f18050b3315e3d-25699625cd604ffbdd1a1ecb34531b42.ssl.cf3.rackcdn.com/images/music-service_tidal.svg" />
                  </a>
                </li>
                <li>
                  <a href="https://music.apple.com/us/album/day69-graduation-day/1368721461">
                    <img src="https://b8dc26f18050b3315e3d-25699625cd604ffbdd1a1ecb34531b42.ssl.cf3.rackcdn.com/images/music-service_itunes.svg" />
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.com/Day69-Graduation-Day-Explicit-6Ix9Ine/dp/B07CF6YNVY/ref=sr_1_1?keywords=day69&qid=1575504223&s=dmusic&sr=1-1">
                    <img src="https://b8dc26f18050b3315e3d-25699625cd604ffbdd1a1ecb34531b42.ssl.cf3.rackcdn.com/images/music-service_amazonmp3.svg" />
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/music/listen?gclid=Cj0KCQiAz53vBRCpARIsAPPsz8WMpwVV7_pzJWSDlBLYN1vKiyQuSi0vKyWH-Gx3yvAGjNk3rGsJ1L8aAgxYEALw_wcB&gclsrc=aw.ds#/album/Bcad3yhyg2lzb5nzelds2udvc4a/6ix9ine/Day69%3A+Graduation+Day">
                    <img src="https://b8dc26f18050b3315e3d-25699625cd604ffbdd1a1ecb34531b42.ssl.cf3.rackcdn.com/images/music-service_google-play.svg" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="album-cover">
              <img src={Album} />
            </div>
          </div>
        </section>
        <section id="tour">
          <div className="top-img"></div>
          <div className="container">
            <div className="tourdates">
              <div className="title">Tour Dates</div>
              <ul className="dates">
                <li>
                  <span className="city">NYC</span>
                  <span className="location">Best Buy Center</span>
                  <span className="date">10/19</span>
                </li>
                <li>
                  <span className="city">NYC</span>
                  <span className="location">Best Buy Center</span>
                  <span className="date">10/19</span>
                </li>
                <li>
                  <span className="city">NYC</span>
                  <span className="location">Best Buy Center</span>
                  <span className="date">10/19</span>
                </li>
                <li>
                  <span className="city">NYC</span>
                  <span className="location">Best Buy Center</span>
                  <span className="date">10/19</span>
                </li>
                <li>
                  <span className="city">NYC</span>
                  <span className="location">Best Buy Center</span>
                  <span className="date">10/19</span>
                </li>
                <li>
                  <span className="city">NYC</span>
                  <span className="location">Best Buy Center</span>
                  <span className="date">10/19</span>
                </li>
                <li>
                  <span className="city">NYC</span>
                  <span className="location">Best Buy Center</span>
                  <span className="date">10/19</span>
                </li>
                <li>
                  <span className="city">NYC</span>
                  <span className="location">Best Buy Center</span>
                  <span className="date">10/19</span>
                </li>
                <li>
                  <span className="city">NYC</span>
                  <span className="location">Best Buy Center</span>
                  <span className="date">10/19</span>
                </li>
                <li>
                  <span className="city">NYC</span>
                  <span className="location">Best Buy Center</span>
                  <span className="date">10/19</span>
                </li>
                <li>
                  <span className="city">NYC</span>
                  <span className="location">Best Buy Center</span>
                  <span className="date">10/19</span>
                </li>
                <li>
                  <span className="city">NYC</span>
                  <span className="location">Best Buy Center</span>
                  <span className="date">10/19</span>
                </li>
                <li>
                  <span className="city">NYC</span>
                  <span className="location">Best Buy Center</span>
                  <span className="date">10/19</span>
                </li>
                <li>
                  <span className="city">NYC</span>
                  <span className="location">Best Buy Center</span>
                  <span className="date">10/19</span>
                </li>
                <li>
                  <span className="city">NYC</span>
                  <span className="location">Best Buy Center</span>
                  <span className="date">10/19</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Main;
