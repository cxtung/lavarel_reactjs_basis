import React, { useState } from "react";
import TopNav from "./components/TopNav";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Admin() {
    var ss = document.createElement("link");
    ss.rel = "stylesheet";
    ss.type = "text/css";
    ss.href = "/admin/dist/css/adminlte.min.css";
    document.head.appendChild(ss);
    const [role, setRole] = useState(useSelector((state) => state.user.role));
    return (
        <div className="wrapper">
            {role == "Authenticated" && <Navigate to="/product" replace={true} />}
            {role == "Public" && <Navigate to="/login" replace={true} />}
            <TopNav />
            <Menu />
            <div className="content-wrapper" style={{ minHeight: "374.4px" }}>
                {/* <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Fixed Layout</h1>
              </div>
            </div>
          </div>
        </section> */}

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="main-footer">
                <div className="float-right d-none d-sm-block">
                    <b>Version</b> 3.2.0
                </div>
                <strong>
                    Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
                </strong>{" "}
                All rights reserved.
            </footer>
        </div>
    );
}
