import NavBar from "./NavBar";
// import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import DisplaySongs from "./DisplaySongs";
import DisplaySearch from "./DisplaySearch";
import { ListGroup, Button, Form } from "react-bootstrap";

const MainPage = () => {
  const [songs, setSongs] = useState([]);
  const [podcast, setPodcast] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);

  const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

  const fetchAlbumList1 = async () => {
    try {
      let response = await fetch(url + "ariana");
      if (response.ok) {
        let musicDataRaw = await response.json();
        console.log("Here is fetch api !", musicDataRaw.data);
        setSongs(musicDataRaw.data);
      } else {
        console.log("ERROR IN FETCHING!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAlbumList3 = async () => {
    try {
      let response = await fetch(url + "podcast");
      if (response.ok) {
        let musicDataRaw = await response.json();
        console.log("Here is fetch api !", musicDataRaw.data);
        setPodcast(musicDataRaw.data);
      } else {
        console.log("ERROR IN FETCHING!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );
      if (response.ok) {
        const musicDataRaw = await response.json();
        setSearch(musicDataRaw.data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlbumList1();
    // eslint-disable-next-line array-callback-return
  }, []);

  useEffect(() => {
    handleSubmit();
    // eslint-disable-next-line array-callback-return
  }, []);

  useEffect(() => {
    fetchAlbumList3();
    // eslint-disable-next-line array-callback-return
  }, []);
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
                <Form onSubmit={handleSubmit}>
                  <Form.Control
                    type="search"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search"
                  />
                </Form>
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
      <main className="body">
        <NavBar />
        <section className="main-displa-area">
          <div className="container-fluid">
            <h2 id="morning-header" className="mt-4">
              Good Morning
            </h2>
            <div className="row gx-3" id="morning">
              {/* Here goes the first set of musics */}
              {}
              {search?.slice(0, 8).map((s) => {
                return <DisplaySearch key={s.id} searched={s} />;
              })}
            </div>
          </div>
        </section>
        <div className="container-fluid song-list">
          <div className="col-sm-12 recently-played">
            <h4>Recently played</h4>
            <div
              className="row row-cols-1 row-cols-md-3 row-cols-lg-5 gy-2 mt-4"
              id="recently"
            >
              {/* Here goes the second set of musics */}
              {songs?.slice(0, 8).map((songObj) => {
                return <DisplaySongs key={songObj.id} songs={songObj} />;
              })}
            </div>
          </div>
        </div>
        <div className="col-sm-12 shows">
          <h4>Shows to try</h4>
          <h6>Podcasts we think you'll get hooked on</h6>
          <div
            className="row row-cols-1 row-cols-md-3 row-cols-lg-5 gy-2 mt-4"
            id="shows"
          >
            {/* Here goes the third set of musics */}
            {podcast?.slice(0, 8).map((songObj) => {
              return <DisplaySongs key={songObj.id} songs={songObj} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
