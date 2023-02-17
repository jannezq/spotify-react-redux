import { ListGroup, Button } from "react-bootstrap";

const SideBar = () => {
  return (
    <>
      <div className="navbar-custom d-none d-lg-block d-xl-block d-xxl-block">
        <ListGroup className="navbar-nav">
          <ListGroup.Item className="nav-item my-1">
            <div className="text-light heading d-flex align-items-center justify-content-flex-start mt-3">
              <i className="fa-brands fa-spotify mx-3 p-1"></i> Spotify
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="nav-item">
            <Button
              className=" w-100 h-50 py-md-2 text-light text-left d-flex align-items-center justify-content-around"
              style={{ height: "60px" }}
            >
              <i className="fa-solid fa-house mx-3"></i>
              <div className="w-75 d-flex">
                <a className="side-bar" href="#">
                  Home
                </a>
              </div>
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className="nav-item">
            <div
              className="searchArea w-100 h-50 py-md-2 px-md-2 text-light text-left d-flex align-items-center justify-content-around"
              style={{ height: "60px" }}
            >
              <div className="iconSearch">
                <i className="fa-solid fa-magnifying-glass mx-3"></i>
              </div>
              <div className="w-75 d-flex inputArea">
                <input
                  id="artist-input"
                  className="w-75"
                  type="text"
                  placeholder="Search artist"
                />
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="nav-item">
            <Button
              className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
              style={{ height: "60px" }}
            >
              <i className="fa-regListGroupar fa-bookmark mx-3"></i>
              <div className="w-75 d-flex">Your Library</div>
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className="nav-item margin-top">
            <Button
              className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
              style={{ height: "60px" }}
            >
              <i className="fa-solid fa-plus mx-2"></i>
              <div className="w-75 d-flex">Create Playlist</div>
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className="nav-item">
            <Button
              className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
              style={{ height: "60px" }}
            >
              <i className="fa-solid fa-heart mx-2"></i>
              <div className="w-75 d-flex">Liked Songs</div>
            </Button>
          </ListGroup.Item>
        </ListGroup>
        <div className="playlists mt-3">
          <ListGroup>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                Funky Heavy Bluesy
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                Your Top Songs 2020
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                In Love With You
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                This is Rod Steward
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                FRANCHISE ft Young Thug
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                Your Top Songs 2019
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                Pallegio
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                This Joe Bonamassa
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                Jun 19
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                Jack 30th Party 2<i className="fa-solid fa-user-group"></i>
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                Jack 30th Party<i className="fa-solid fa-user-group"></i>
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                This is Opeth
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                Metal Ballads
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                New Playlist{" "}
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                Your Top Songs 2018
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="nav-item-playlists">
              <a href="#" className="list">
                Jazz ClaclassNameics Blue Note
              </a>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div>
          <span className="m-3 download">
            <i className="fa-regListGroupar fa-circle-down mt-3"></i> Install
            App
          </span>
        </div>
      </div>
    </>
  );
};
export default SideBar;
