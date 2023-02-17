import { Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <nav className="navbar sticky-top mb-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex"></div>
          <i className="fa-solid fa-chevron-left chevrons"></i>
          <i className="fa-solid fa-chevron-right chevrons"></i>
        </div>

        <div className="d-flex align-items-center" id="rightnav">
          <div className="dropdown">
            <Button
              className="btn btn-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              User
            </Button>
            {/* <ListGroup
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton1"
            >
              <ListGroup.Item>
                <a className="dropdown-item " href="#">
                  Acount
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  className="dropdown-item"
                  href="https://www.spotify.com/de/premium/"
                >
                  Upgrade{" "}
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a className="dropdown-item" href="#">
                  Private Session
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <hr className="dropdown-divider" />
              </ListGroup.Item>
              <ListGroup.Item>
                <a className="dropdown-item" href="./login.html">
                  Log out
                </a>
              </ListGroup.Item>
            </ListGroup> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
