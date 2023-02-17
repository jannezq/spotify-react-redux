const DisplaySearch = (props) => {
  return (
    <>
      <div class="morning-card col-sm-12 col-md-4 col-lg-3">
        <div class="card mb-3 d-flex flex-row">
          <div class="col-md-4 pl-0">
            <img
              src={props.searched.album.cover}
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8 pl-0 d-flex justify-content-start align-items-center morning-card-title">
            <a href="#">
              <p class="card-text">{props.searched.title}</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplaySearch;
