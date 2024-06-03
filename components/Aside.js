const Aside = () => {
  return (
    <>
      <aside className="left-header">
        <span className="lh_dec color-bg"></span>
        <div className="left-header_social">
          <ul>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-vk"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="share-btn showshare color-bg">
        <span>
          Share <i className="fal fa-plus"></i>
        </span>
      </div>
      <div className="hc_dec_color">
        <div className="page-subtitle">
          <span></span>
        </div>
      </div>
    </>
  );
};
export default Aside;
