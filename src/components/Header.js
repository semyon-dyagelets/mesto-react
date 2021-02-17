import headerLogo from '../images/logo-white.svg';

function Header() {
    return (
        <header className="header">
            <a href="/#" target="_self">
                <img className="header__logo" src={headerLogo} alt="Место-логотип" />
            </a>
        </header>
    )
}

export default Header;