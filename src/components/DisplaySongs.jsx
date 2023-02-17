const DisplaySongs = (props) => {
  return (
    <>
      <div className="col mb-4">
        <div className="card px-3 py-3 song-card">
          <img
            className="song-img card-img-top"
            src={props.songs.album.cover}
            alt="..."
          />
          <div className="card-body px-0">
            <a href="#">
              <h6 className="card-title">{props.songs.name}</h6>
            </a>
            <a href="#">
              <p className="card-text">{props.songs.title}</p>
            </a>
          </div>
          <div id="card-${list.preview}" className="play-button-outer">
            <div
              onclick="playControls(event)"
              className="play-button"
              id="${list.preview}"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplaySongs;
