import React from "react"

import Layout from "../components/layout"

import cloudOne from "../images/background/Cloud_1.svg"
import cloudTwo from "../images/background/Cloud_2.svg"
import cloudThree from "../images/background/Cloud_3.svg"
import cometOne from "../images/background/Comet_1(blue).svg"
import cometTwo from "../images/background/Comet_2(pink).svg"
import cometThree from "../images/background/Comet_3(orange).svg"
import Logo from "../images/logo/sagomini_logo.svg"
import Jack from "../images/characters/Character_Assets_Jack_Happy.png"
import JackSuprised from "../images/characters/Character_Assets_Jack_Surprised.png"
import Jinja from "../images/characters/Character_Assets_Jinja_Happy.png"
import JinjaSurprised from "../images/characters/Character_Assets_Jinja_Surprised.png"
import Harvey from "../images/characters/Character_Assets_Harvey_Happy.png"
import HarveySurprised from "../images/characters/Character_Assets_Harvey_Surprised.png"
import Robin from "../images/characters/Character_Assets_Robin_Happy.png"
import RobinSurprised from "../images/characters/Character_Assets_Robin_Surprised.png"
import MeteorOne from "../images/background/Meteor_1.svg"
import MeteorTwo from "../images/background/Meteor_2.svg"
import MeteorThree from "../images/background/Meteor_3.svg"
import MeteorFour from "../images/background/Meteor_4.svg"
import MeteorFive from "../images/background/Meteor_5.svg"
import MeteorSix from "../images/background/Meteor_6.svg"
import MeteorSeven from "../images/background/Meteor_7.svg"
import MeteorEight from "../images/background/Meteor_8.svg"
import MeteorNine from "../images/background/Meteor_9.svg"
import MeteorTen from "../images/background/Meteor_10.svg"
import Mars from "../images/background/Mars.svg"

import "../css/styles.css"
import "../css/styles-mobile.css"

const IndexPage = () => (
  <Layout>
    <div className="main-body">
      <div className="clouds-comets">
        <div className="cloud">
          <img src={cloudTwo} alt="" />
        </div>
        <div className="cloud cloud-2">
          <img src={cloudOne} alt="" />
        </div>
        <div className="cloud cloud-3">
          <img src={cloudThree} alt="" />
        </div>
        <div className="cloud cloud-4">
          <img src={cloudTwo} alt="" />
        </div>
        <div className="cloud cloud-5">
          <img src={cloudThree} alt="" />
        </div>
        <div className="cloud cloud-6">
          <img src={cloudOne} alt="" />
        </div>
        <div className="cloud cloud-7">
          <img src={cloudTwo} alt="" />
        </div>
        <div className="cloud cloud-8">
          <img src={cloudOne} alt="" />
        </div>
        <div className="cloud cloud-9">
          <img src={cloudThree} alt="" />
        </div>
        <div className="cloud cloud-10">
          <img src={cloudOne} alt="" />
        </div>
        <div className="cloud cloud-11">
          <img src={cloudTwo} alt="" />
        </div>

        <div className="comet">
          <img src={cometOne} alt="" />
        </div>
        <div className="comet comet-1">
          <img src={cometTwo} alt="" />
        </div>
        <div className="comet comet-2">
          <img src={cometThree} alt="" />
        </div>
        <div className="comet comet-3">
          <img src={cometTwo} alt="" />
        </div>
        <div className="comet comet-4">
          <img src={cometThree} alt="" />
        </div>
        <div className="comet comet-5">
          <img src={cometTwo} alt="" />
        </div>
        <div className="comet comet-6">
          <img src={cometThree} alt="" />
        </div>
        <div className="comet comet-7">
          <img src={cometTwo} alt="" />
        </div>
        <div className="comet comet-8">
          <img src={cometThree} alt="" />
        </div>
        <div className="comet comet-9">
          <img src={cometThree} alt="" />
        </div>
        <div className="comet comet-10">
          <img src={cometTwo} alt="" />
        </div>
        <div className="comet comet-11">
          <img src={cometThree} alt="" />
        </div>
      </div>

      <div className="logo">
        <div className="container">
          <div className="row">
            <div className="col">
              <a href="#">
                <img src={Logo} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="info-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>The Red Planet</h1>

              <p>
                Since Mars was first discovered over <span id="years">400</span>{" "}
                years ago, we've been smitten with our big red neighbour. But
                how much do we really know about Mars?
              </p>

              <p>
                Ahead, <span id="facts">10 facts</span> about Mars that are
                perfect for kids (and if you've lapsed on your planetary
                know-how like we have, perfect for adults, too
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="characters">
        <div className="container">
          <div className="character-row row">
            <div className="col">
              <div className="circle">
                <div className="circle-align">1</div>
              </div>
              <div className="bubble bubble-bottom-left">Tap me!</div>

              <img src={Jack} alt="" />
              <img className="meteor meteor-1" src={MeteorOne} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p id="text1">
                A year on Mars is almost twice as long as a year on Earth! As
                the planet is further from the sun, it takes
                <span id="years">687</span> Earth days to complete a year on
                Mars.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="characters">
        <div className="container">
          <div className="character-row row">
            <div className="col">
              <div className="circle">
                <div className="circle-align">2</div>
              </div>
              <div className="bubble-reverse bubble-bottom-right">Tap me!</div>

              <img src={Jinja} alt="" />
              <img className="meteor meteor-2" src={MeteorTwo} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p id="text2">
                Mars looks pretty far away, but it must look big up close,
                right? Yes, but Mars is actually only half the size of Earth and
                the <span id="years">second smallest planet</span> in the solar
                system.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="characters">
        <div className="container">
          <div className="character-row row">
            <div className="col">
              <div className="circle">
                <div className="circle-align">3</div>
              </div>
              <div className="bubble bubble-bottom-left">Tap me!</div>
              <img src={Harvey} alt="" />
              <img className="meteor meteor-3" src={MeteorThree} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p id="text3">
                The fourth planet from the sun has many nicknames, including the
                Red Planet. But it is officially named after the Roman god of
                war AND guardian of gardens, <span id="years">Mars.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="characters">
        <div className="container">
          <div className="character-row row">
            <div className="col">
              <div className="circle">
                <div className="circle-align">4</div>
              </div>
              <div className="bubble-reverse bubble-bottom-right">Tap me!</div>
              <img src={Robin} alt="" />
              <img className="meteor meteor-4" src={MeteorFour} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p id="text4">
                If you ever go to Mars, pack a jacket. (And also, bring us with
                you!) Temperatures on the Red Planet can drop as low as{" "}
                <span id="years">-220°F.</span> By comparison, penguins only
                have to put up with
                <span id="years">-129°F</span> in Antarctica. Other than Earth,
                Mars is the only planet with polar ice caps.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="characters">
        <div className="container">
          <div className="character-row row">
            <div className="col">
              <div className="circle">
                <div className="circle-align">5</div>
              </div>
              <div className="bubble bubble-bottom-left">Tap me!</div>
              <img src={JackSuprised} alt="" />
              <img className="meteor meteor-5" src={MeteorFive} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p id="text5">
                While Earth only has one moon, Mars has two to show off! The
                bigger moon is named
                <span id="years">Phobos</span>
                and the smaller one is known as <span id="years">
                  Deimos,
                </span>{" "}
                both named after characters from Greek mythology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="characters">
        <div className="container">
          <div className="character-row row">
            <div className="col">
              <div className="circle">
                <div className="circle-align">6</div>
              </div>
              <div className="bubble-reverse bubble-bottom-right">Tap me!</div>
              <img src={JinjaSurprised} alt="" />
              <img className="meteor meteor-6" src={MeteorSix} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p id="text6">
                Because Mars is so much smaller than Earth, it has much weaker
                gravity. That means you can jump{" "}
                <span id="years">three times higher</span> on Mars than you can
                back home. (Note: bring basketball and hoop on our next Mars
                trip.)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="characters">
        <div className="container">
          <div className="character-row row">
            <div className="col">
              <div className="circle">
                <div className="circle-align">7</div>
              </div>
              <div className="bubble bubble-bottom-left">Tap me!</div>
              <img src={HarveySurprised} alt="" />
              <img className="meteor meteor-7" src={MeteorSeven} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p id="text7">
                Mars gets its famous red color from a material known as{" "}
                <span id="years">iron oxide,</span> which covers its surface.
                This is also known as rust, so the surface of Mars is covered in
                the same stuff as a paint can that’s been left in the backyard!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="characters">
        <div className="container">
          <div className="character-row row">
            <div className="col">
              <div className="circle">
                <div className="circle-align">8</div>
              </div>
              <div className="bubble-reverse bubble-bottom-right">Tap me!</div>
              <img src={RobinSurprised} alt="" />
              <img className="meteor meteor-8" src={MeteorEight} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p id="text8">
                You should{" "}
                <span id="years">never look directly at the sun.</span>
                But if you took a peek at it from Mars it would only look half
                the size it does from Earth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="characters">
        <div className="container">
          <div className="character-row row">
            <div className="col">
              <div className="circle">
                <div className="circle-align">9</div>
              </div>
              <div className="bubble bubble-bottom-left">Tap me!</div>
              <img src={Jack} alt="" />
              <img className="meteor meteor-9" src={MeteorNine} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p id="text9">
                Climbers would love Mars because it’s home to the{" "}
                <span id="years">highest mountain in the solar system.</span>
                The volcano Olympus Mons is 72,000 feet high, which is three
                times the size of Mount Everest.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="characters">
        <div className="container">
          <div className="character-row row">
            <div className="col">
              <div className="circle">
                <div className="circle-align">10</div>
              </div>
              <div className="bubble-reverse bubble-bottom-right">Tap me!</div>
              <img src={Jinja} alt="" />
              <img className="meteor meteor-10" src={MeteorTen} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p id="text10">
                While <span id="years">no human has traveled to Mars yet,</span>{" "}
                robots have made the trip for us. As early as 1976 scientists
                sent machines including the Sojourner Rover to Mars to help with
                important research.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="planet">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={Mars} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="logo logo-bottom">
        <div className="container">
          <div className="row">
            <div className="col">
              <a href="#">
                <img src={Logo} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
