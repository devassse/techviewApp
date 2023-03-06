import "./topBar.css";

export default function topBar() {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <a href="#home">
                        <img src="assets/imgs/techview-logo-medium.png" alt="" />
                    </a>
                </div>
                <ul className="links">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#news">News</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contacts">Contacts</a>
                    </li>
                    <li className="social">
                        <a href="#facebook"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#youtube"><i class="fa-brands fa-square-youtube"></i></a>
                    </li>
                </ul>
                <a href="#btn" className="action_btn">
                    Register
                </a>
                <div className="toggle_btn">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </nav>
        </header>
    );

    // const toggleBtn = document.querySelector('.toggle_btn')
    // const toggleBtnIcon = document.querySelector('.toggle_btn i')
    // const dropDownMenu = document.querySelector('.dropdown_menu')

    // toggleBtn.onClick = function () {
    //     dropDownMenu.classList.toggle('open')
    //     const isOpen = dropDownMenu.classList.contains('open')

    //     toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
    // }
}
