import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import DisplaySongs from "./DisplaySongs";

const MainPage = () => {
  const [songs, setSongs] = useState([]);

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

  useEffect(() => {
    fetchAlbumList1();
    // eslint-disable-next-line array-callback-return
  }, []);
  return (
    <>
      <SideBar />
      <main className="body">
        <NavBar />
        <section className="main-displa-area">
          <div className="container-fluid">
            <h2 id="morning-header" className="mt-4">
              Good Morning
            </h2>
            <div className="row gx-3" id="morning">
              {/* Here goes the first set of musics */}
              {songs?.slice(0, 8).map((songObj) => {
                return <DisplaySongs key={songObj.id} songs={songObj} />;
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
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
