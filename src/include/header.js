import s from "./css/header.module.css"

function Header() {
    return(
        <header className={s.header}>
            <div className={s.logo}><img src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg" alt=""/></div>

        </header>
    );
}
export default Header