import "./Header.scss";

import React from 'react'
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Coin from "../../assets/coin.png"

const MyLink = ({isHome, href, to, children, className, offset, onClick }) => {
  if (isHome) {
    return <AnchorLink href={href} offset={offset} className={className} onClick={onClick}>{children}</AnchorLink>
  }

  return <Link to={to} offset={offset} className={className}>{children}</Link>
}

export default function Header() {
  return (
    <header className="header_wrapper">
      <Container maxWidth="lg">
        <div className="header_content-wrapper">
          
            <nav className="header__navigation header__navigation--desktop">
              <ul className="header__navigation-list">
                <li className="header__navigation-item">
                  <Link to="/" offset='60' className="header__navigation-link">На главную</Link>
                </li>

                <li className="header__navigation-item">
                  <Link to="/marketplace" offset='60' className="header__navigation-link">Маркетплейс</Link>
                </li>

                <li className="header__navigation-item">
                  <Link to="/marketplace" offset='60' className="header__navigation-link">Курсы</Link>
                </li>

                <li className="header__navigation-item">
                  <Link to="/marketplace" offset='60' className="header__navigation-link">История транзакций</Link>
                </li>
              </ul>
            </nav>

          
            <div className="header_buttons">
              <Link className="header_nickname" to="/userCabinet">
                <span className="desktop-only">Daniil Chistyakov</span>
                {/* <AccountCircleIcon /> */}
              </Link>
              <span>30</span>
              <img src={Coin} width="30" alt="coins"></img>
              <Button
                Button
                //onClick={onClickLogout}
                variant="contained"
                color="error"
                className="header__button desktop-only"
              >
                Выйти
              </Button>
            </div>
          
        </div>
      </Container>
    </header>
  )
}
