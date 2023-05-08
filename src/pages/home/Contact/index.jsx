import React from 'react'
import css from "./style.module.scss"

const Contact = () => {
  return (
    <div className={css.contactContainer}>
        <p className={css.contactTitle}>Get in touch</p>        
        <p className={css.contactMail}>mariacruzschena@gmail.com</p>
    </div>
  )
}

export default Contact