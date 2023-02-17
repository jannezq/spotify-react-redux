import NavBar from "./NavBar";
import SideBar from "./SideBar";

const MainPage = () => {
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
            <div className="row gx-3" id="morning"></div>
          </div>
        </section>
        <div className="container-fluid song-list">
          <div className="col-sm-12 recently-played">
            <h4>Recently played</h4>
            <div
              className="row row-cols-1 row-cols-md-3 row-cols-lg-5 gy-2 mt-4"
              id="recently"
            ></div>
          </div>
        </div>
        <div className="col-sm-12 shows">
          <h4>Shows to try</h4>
          <h6>Podcasts we think you'll get hooked on</h6>
          <div
            className="row row-cols-1 row-cols-md-3 row-cols-lg-5 gy-2 mt-4"
            id="shows"
          ></div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
