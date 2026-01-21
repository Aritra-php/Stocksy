const Summary = () => {
  return (
    <div className="summary">
      <div className="username">
        <h6>
          <i className="fa-solid fa-user"></i> Hi, User!
        </h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <i className="fa-solid fa-chart-line section-icon"></i>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p className="hover-underline">
              Margins used <span>0</span>
            </p>
            <p className="hover-underline">
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <i className="fa-solid fa-briefcase section-icon"></i>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>
            </h3>
            <p>P&amp;L</p>
          </div>
          <hr />

          <div className="second">
            <p className="hover-underline">
              Current Value <span>31.43k</span>
            </p>
            <p className="hover-underline">
              Investment <span>29.88k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
};

export default Summary;
