import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header id="header" className="mb-auto">
        <div>
          <nav className="">
            <ul>              
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;
