import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img src="images/paypal.svg" alt="" />
          </Link>
          <div className="links">
            <ul className="main-menu">
              <li>
                <a href="#">Personal</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Developer</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <Link to="/login">
              <button className="login">Login</button>
            </Link>
            <Link to="/signup">
              <button className="signup">Signup</button>
            </Link>
            <Link to="/signup">
              <button className="logout">Log Out</button>
            </Link>
            <img
              src="images/user.svg"
              alt=""
              style={{ maxWidth: "2.5rem", margin: "auto" }}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
