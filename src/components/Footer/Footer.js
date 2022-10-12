import "./Footer.scss"

import React from 'react'
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <div className="footer__top">
          <div className="header_logo">
            <Link className="header__logo-link" to="/">
              <span className="mobile-only">Digital Ruble</span>
            </Link>
          </div>

          <nav className="header__navigation">
            {/* <ul className="header__navigation-list">
              <li className="header__navigation-item">
                <AnchorLink href="#how-we-are" offset='60' className="header__navigation-link">Кто проводит</AnchorLink>
              </li>

              <li className="header__navigation-item">
                <AnchorLink href="#for-whom" offset='60' className="header__navigation-link">Для кого</AnchorLink>
              </li>

              <li className="header__navigation-item">
                <AnchorLink href="#stages" offset='60' className="header__navigation-link">Этапы</AnchorLink>
              </li>

              <li className="header__navigation-item">
                <AnchorLink href="#faq" offset='60' className="header__navigation-link">F.A.Q.</AnchorLink>
              </li>

              <li className="header__navigation-item">
                <AnchorLink href="#contacts" offset='66' className="header__navigation-link">Контакты</AnchorLink>
              </li>
            </ul> */}
          </nav>

          <ul className="footer__social-menu">
            <li className="footer__social-item">
              <a className="footer__social-link" href="https://vk.com/unigine" target="_blank" rel="noreferrer">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0ZM21.9083 27.1549C21.6772 27.3942 21.226 27.4425 21.226 27.4425H19.7318C19.7318 27.4425 16.4353 27.6335 13.5313 24.7195C10.3643 21.5402 7.56791 15.2324 7.56791 15.2324C7.56791 15.2324 7.40651 14.8186 7.58136 14.6194C7.77822 14.3942 8.31501 14.3801 8.31501 14.3801L11.8867 14.3577C11.8867 14.3577 12.2229 14.4107 12.4638 14.5817C12.6631 14.7231 12.7744 14.986 12.7744 14.986C12.7744 14.986 13.3515 16.3935 14.1157 17.6666C15.6087 20.1527 16.3032 20.6962 16.8095 20.4298C17.548 20.0419 17.3267 16.9157 17.3267 16.9157C17.3267 16.9157 17.3401 15.7817 16.955 15.276C16.6566 14.8846 16.0942 14.7703 15.8459 14.7384C15.6442 14.7125 15.9743 14.2622 16.4023 14.0606C17.0455 13.7577 18.1802 13.74 19.5215 13.7529C20.567 13.7636 20.8678 13.826 21.2762 13.9215C22.224 14.142 22.1944 14.8487 22.1306 16.3739C22.1115 16.83 22.0893 17.3593 22.0893 17.9707C22.0893 18.1081 22.0851 18.2546 22.0809 18.4053C22.0587 19.1866 22.0333 20.0814 22.5674 20.4144C22.8413 20.5842 23.5101 20.4392 25.1841 17.6996C25.9776 16.4006 26.5719 14.874 26.5719 14.874C26.5719 14.874 26.7027 14.6017 26.9045 14.485C27.1111 14.3659 27.3899 14.4025 27.3899 14.4025L31.1487 14.3801C31.1487 14.3801 32.2785 14.2492 32.4607 14.742C32.6526 15.2571 32.0388 16.4619 30.503 18.4352C29.0476 20.3058 28.3386 20.9957 28.4022 21.6049C28.4487 22.0511 28.9096 22.4541 29.7951 23.2459C31.6412 24.8984 32.136 25.7677 32.2549 25.9766C32.2647 25.9939 32.272 26.0067 32.2773 26.015C33.1051 27.3388 31.359 27.4425 31.359 27.4425L28.0196 27.4873C28.0196 27.4873 27.3031 27.6241 26.3591 26.9993C25.8647 26.6723 25.3815 26.1382 24.9212 25.6295C24.2184 24.8527 23.5691 24.135 23.0149 24.3045C22.0844 24.5898 22.1125 26.5219 22.1125 26.5219C22.1125 26.5219 22.1199 26.9356 21.9083 27.1549Z" fill="white"/>
                </svg>
              </a>
            </li>

            <li>
              <a className="footer__social-link" href="https://t.me/cpp_internship" target="_blank" rel="noreferrer">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM26.5404 28.8682L29.9359 12.9565V12.9573C30.2372 11.5542 29.4288 11.0056 28.5046 11.3498L8.54414 18.9914C7.18275 19.5208 7.20284 20.2795 8.31269 20.6237L13.4159 22.2113L25.2698 14.7941C25.8268 14.4243 26.3347 14.6296 25.9176 14.9985L16.3292 23.608L15.9571 28.8435C16.4899 28.8435 16.7205 28.6143 16.997 28.3395L19.4932 25.9534L24.6671 29.7418C25.6162 30.2705 26.2841 29.991 26.5404 28.8682Z" fill="white"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
            
        </div>
      </Container>
    </footer>
  )
}
