import React from "react"

import mainTheme from "../../theme/mainTheme.module.css"
import heroStyles from "./hero.module.css"

import HeroBackground from "../../assets/elements/hero_background.svg"
import HeroImage from "../../assets/elements/monitor.svg"
import HeroDecor from "../../assets/elements/hero_decor.svg"

function HomepageHero() {
  return (
    <section className={heroStyles.Wrapper}>
      <div className={heroStyles.heroImageContainer}>
        <img
          src={HeroImage}
          alt="Vector Monitor"
          className={heroStyles.heroImage}
        />
      </div>
      <div className={heroStyles.heroContentContainer}>
        <div className={heroStyles.heroText}>
          <h1>
            Don't waste time
            <br />
            on boring things
          </h1>
        </div>
        <button
          className={`${mainTheme.buttonPrimary} ${heroStyles.heroButton}`}
        >
          GO EXPLORE
        </button>
        <img src={HeroDecor} className={heroStyles.heroDecor} />
      </div>
      <img src={HeroBackground} className={heroStyles.heroBackground} />
    </section>
  )
}

export default HomepageHero
