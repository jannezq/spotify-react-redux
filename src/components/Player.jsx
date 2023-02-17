const Player = () => {
  return (
    <>
      <section className="player-section fixed-bottom">
        <div className="music-player d-flex justify-content-between">
          <div className="song-info d-flex">
            <div className="col-md-4">
              <img
                src="https://img.huffingtonpost.com/asset/5badb5be200000e500ff1775.jpeg?ops=scalefit_720_noupscale"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 pl-0 d-flex justify-content-center align-items-center flex-column">
              <h6 className="card-title">Song Title goes here</h6>
              <p className="card-text ">Artist name here</p>
            </div>
            <div className="icons-area d-flex justify-content-center align-items-center">
              <i className="bi bi-heart"></i>
              <i className="bi bi-pip"></i>
            </div>
          </div>

          <div className="play-info-area d-flex flex-column  align-items-center">
            <div className="icons-area">
              <i className="bi bi-shuffle"></i>
              <i className="bi bi-skip-start-fill"></i>
              <i className="bi bi-play-circle-fill play-pause-btn"></i>
              <i className="bi bi-skip-end-fill"></i>
              <i className="bi bi-arrow-repeat"></i>
            </div>
            <div className="progress-area">
              <span>0:47</span>
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
              <span>3:20</span>
            </div>
          </div>

          <div className="other-feature-area mr-3">
            <i className="bi bi-music-note-list"></i>
            <i className="bi bi-speaker-fill"></i>
            <div className="volume-area">
              <i className="bi bi-volume-up"></i>
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Player;
