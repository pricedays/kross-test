import Axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Head from "next/head";
import Projectitems from "./projectItems";
import Calendar from "./calendar/calendar";
import { BsPlusLg, BsFunnel } from "react-icons/bs";
import { FiBriefcase } from "react-icons/fi";
import { TbAlignJustified } from "react-icons/tb";

export default function Home() {
  const [projectList, setProjectList] = useState([]);
  const [projectSelected, setProjectSelected] = useState(0);

  useEffect(() => {
    const projectListURL = "./api/projectlist";
    Axios.get(projectListURL)
      .then((response) => {
        response.data.slice(0, 1).map((item) => {
          handleProjectSelected(item);
        });

        setProjectList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleProjectSelected = (data) => {
    setProjectSelected(data);
  };

  return (
    <>
      <Head>
        <title>Kross</title>
        <meta name="viewport" content="width=1165" />
      </Head>
      <div
        className="container-fluid h-100 w-100 p-0 "
        style={{
          display: "grid",
          gridTemplateRows: "minmax(0,70px) minmax(0,1fr)",
          maxHeight: "100%",
          position: "fixed",
          top: "0",
          left: "0",
          overflow: "hidden",
        }}
      >
        <div className="row" style={{ position: "relative" }}>
          <Nav />
        </div>

        <div className="row m-0 h-100 " style={{ position: "relative" }}>
          <div className="container p-0 m-0 w-100 ">
            <div className="row p-0 m-0 w-100 h-100">
              <div
                className="col-auto overflow-hidden p-0 h-100"
                style={{ maxHeight: "100%", borderRight: "1px solid #e1e1e1" }}
              >
                <Sidebar />
              </div>
              <div
                className="col-auto  p-0 h-100"
                style={{ width: "360px", maxHeight: "100%", overflowY: "auto" }}
              >
                <div className="container p-0 m-0 mh-100">
                  <div className="row border-bottom px-2 py-1 m-0 gx-5">
                    <div
                      className="col px-2 "
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <b>
                        <FiBriefcase
                          size={22}
                          style={{ marginTop: "-3px", marginRight: "6px" }}
                        />{" "}
                        Project
                      </b>
                    </div>
                    <div className="col-auto py-1 px-2">
                      <button
                        className="btn btn-primary w-100 px-4 py-2"
                        style={{
                          height: "40px",
                          borderRadius: "10px",
                          fontSize: "12px",
                        }}
                      >
                        <b>
                          <BsPlusLg
                            size={15}
                            style={{ marginTop: "-2px", marginRight: "10px" }}
                          />{" "}
                          Create project
                        </b>
                      </button>
                    </div>
                  </div>

                  <div className="row border-bottom overflow-hidden px-2 m-0">
                    <div className="col overflow-hidden px-2">
                      <div className="row mt-2 px-1">
                        <div className="col-auto d-inline ">
                          <div
                            className=" py-2 h-100 "
                            style={{
                              borderBottom: "5px solid #0093ee",
                              color: "#0093ee",
                              fontSize: "14px",
                            }}
                          >
                            <b>Active</b>
                          </div>
                        </div>
                        <div className="col-auto d-inline">
                          <div
                            className=" py-2 h-100 d"
                            style={{
                              borderBottom: "5px solid #ffffff",
                              color: "#666666",
                              fontSize: "14px",
                            }}
                          >
                            <b>Inactive</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto p-0 m-0">
                      <div className=" btn-group w-100 px-2 py-2 " role="group">
                        <input
                          type="radio"
                          className="btn-check "
                          name="btnradio"
                          id="btnradio1"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary px-2 py-1"
                          style={{border: "1px solid #dedede"}}
                          htmlFor="btnradio1"
                        >
                          <BsFunnel />
                        </label>

                        <input
                          type="radio"
                          className="btn-check "
                          name="btnradio"
                          id="btnradio2"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary px-2 py-1 "
                          style={{border: "1px solid #dedede"}}
                          htmlFor="btnradio2"
                        >
                          <TbAlignJustified />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row p-0 m-0 w-100">
                    <div className="container p-0 m-0">
                      {projectList.map((projectListItem, index) => (
                        <div
                          onClick={() => handleProjectSelected(projectListItem)}
                          key={index}
                        >
                          <Projectitems
                            item={projectListItem}
                            selected={projectSelected}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col overflow-hidden p-0 m-0 h-100  w-100 position-relative"
                style={{ overflowY: "auto" }}
              >
                <Calendar data={projectSelected} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
