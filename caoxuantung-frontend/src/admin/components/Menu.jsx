import React from "react";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <aside className="main-sidebar main-sidebar-custom sidebar-dark-primary elevation-4">
      <a href="../../index3.html" className="brand-link">
        <img
          src="/admin/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{opacity: ".8"}}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
        <div className="os-resize-observer-host observed">
          <div className="os-resize-observer" style={{left: "0px", right: "auto"}}></div>
        </div>
        <div
          className="os-size-auto-observer observed"
          style={{height: "calc(100% + 1px)", float: "left"}}
        >
          <div className="os-resize-observer"></div>
        </div>
        <div
          className="os-content-glue"
          style={{margin: "0px -8px", width: "249px", height: "366px"}}
        ></div>
        <div className="os-padding">
          <div
            className="os-viewport os-viewport-native-scrollbars-invisible"
            style={{overflowY: "scroll"}}
          >
            <div
              className="os-content"
              style={{padding: "0px 8px", height: "100%", width: "100%"}}
            >
                <div className="form-inline">
               
                <div className="sidebar-search-results">
                  <div className="list-group">
                    <a href="#st" className="list-group-item">
                      <div className="search-title">
                        <strong className="text-light"></strong>N
                        <strong className="text-light"></strong>o
                        <strong className="text-light"></strong>{" "}
                        <strong className="text-light"></strong>e
                        <strong className="text-light"></strong>l
                        <strong className="text-light"></strong>e
                        <strong className="text-light"></strong>m
                        <strong className="text-light"></strong>e
                        <strong className="text-light"></strong>n
                        <strong className="text-light"></strong>t
                        <strong className="text-light"></strong>{" "}
                        <strong className="text-light"></strong>f
                        <strong className="text-light"></strong>o
                        <strong className="text-light"></strong>u
                        <strong className="text-light"></strong>n
                        <strong className="text-light"></strong>d
                        <strong className="text-light"></strong>!
                        <strong className="text-light"></strong>
                      </div>
                      <div className="search-path"></div>
                    </a>
                  </div>
                </div>
              </div>

              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  <li className="nav-item">
                    <Link to="/admin" className="nav-link">
                      <i className="nav-icon fas fa-tachometer-alt"></i>
                      <p>
                        Quản lý
                        <i className="right fas fa-angle-left"></i>
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="/admin/product" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Sản phẩm</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/admin/category" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Danh mục</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#st" className="nav-link">
                      <i className="nav-icon fas fa-chart-pie"></i>
                      <p>
                        Charts
                        <i className="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="../charts/chartjs.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>ChartJS</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="../charts/flot.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Flot</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="../charts/inline.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>Inline</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="../charts/uplot.html" className="nav-link">
                          <i className="far fa-circle nav-icon"></i>
                          <p>uPlot</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-header">LABELS</li>
                  <li className="nav-item">
                    <a href="#st" className="nav-link">
                      <i className="nav-icon far fa-circle text-danger"></i>
                      <p className="text">Important</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#st" className="nav-link">
                      <i className="nav-icon far fa-circle text-warning"></i>
                      <p>Warning</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#st" className="nav-link">
                      <i className="nav-icon far fa-circle text-info"></i>
                      <p>Informational</p>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div
              className="os-scrollbar-handle"
              style={{width: "100%", transform: "translate(0px, 0px)"}}
            ></div>
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div
              className="os-scrollbar-handle"
              style={{height: "96.0733%", transform: "translate(0px, 14px)"}}
            ></div>
          </div>
        </div>
        <div className="os-scrollbar-corner"></div>
      </div>

      <div className="sidebar-custom">
        <a href="#st" className="btn btn-link">
          <i className="fas fa-cogs"></i>
        </a>
        <a href="#st" className="btn btn-secondary hide-on-collapse pos-right">
          Help
        </a>
      </div>
    </aside>
  );
}
