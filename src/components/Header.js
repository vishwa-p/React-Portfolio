import React from "react";

class Header extends React.Component {
  
  render() {
    return (
      <header class="header">
      <div class="header__content">
        <div class="header__logo-container">
          <div class="header__logo-img-cont">
            <img
              src="./profile.JPG"               
              alt="VP profile pic"
              class="header__logo-img"
            />
          </div>
          <span class="header__logo-sub">Vishwa Patel</span>
        </div>
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
              <a href="" class="header__link">Home</a>
            </li>
            <li class="header__link-wrapper">
              <a href="#about" class="header__link">About</a>
            </li>
            <li class="header__link-wrapper">
              <a href="#projects" class="header__link">Projects</a>
            </li>
            <li class="header__link-wrapper">
              <a href="#skill" class="header__link">Skills</a>
            </li>
            <li class="header__link-wrapper">
              <a href="#contact" class="header__link">Contact</a>
            </li>
          </ul>
          <div class="header__main-ham-menu-cont">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/79e75114856a…d26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg"
              alt="alt1"
              class="header__main-ham-menu"
            />
            <img
              src="https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1…f158a686a0554/6a0ec/assets/svg/ham-menu-close.svg"
              alt="alt2"
              class="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div class="header__sm-menu">
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            <li class="header__sm-menu-link">
              <a href="" class="header__link">Home</a>
            </li>
            <li class="header__sm-menu-link">
              <a href="#about" class="header__link">About</a>
            </li>
            <li class="header__sm-menu-link">
              <a href="#projects" class="header__link">Projects</a>
            </li>
            <li class="header__link-wrapper">
              <a href="#skill" class="header__link">Skills</a>
            </li>
            <li class="header__sm-menu-link">
              <a href="#contact" class="header__link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
      // <header id="header" className="mb-auto">
      //   <div>
      //     <nav className="">
      //       <ul>              
      //         <li>
      //           <a href="#">About</a>
      //         </li>
      //         <li>
      //           <a href="#">Project</a>
      //         </li>
      //         <li>
      //           <a href="#">Contact</a>
      //         </li>
      //       </ul>
      //     </nav>
      //   </div>
      // </header>
    );
  }
}
export default Header;
