import { FaAngleDown } from "react-icons/fa";
import { BsBell } from "react-icons/bs";

export default function Nav() {
  return (
    <div
      className="navbar shadow-sm px-3 py-0 bg-white"
      style={{ overflow: "hidden", maxWidth: "100%" }}
    >
      <div
        className="row w-100 p-0 m-0 align-middle"
        style={{ alignItems: "center" }}
      >
        <div className="col" style={{ alignItems: "center" }}>
          <img src="../images/svg/logo_kross.svg" />
        </div>

        <div className=" col-auto form-search align-middle">
          <input
            className="form-control"
            type="text"
            placeholder="Search project, content or client"
            aria-label="Search"
            style={{
              width: "410px",
              backgroundColor: "#fafafb",
              color: "#a7a7b0",
            }}
          />
        </div>

        <div className="col-auto position-relative align-middle">
          <BsBell size={25} />
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#ea0000",
              position: "absolute",
              right: "12px",
              top: "2px",
            }}
          ></div>
        </div>

        <div className="col-auto p-1">
          <button
            role="button"
            type="button"
           
            data-toggle="dropdown"
            className=" btn p-1  bg-white m-0 "
          >
            <div className="row gx-4">
              <div className="col-auto text-left">
                <img
                  className="border"
                  src="../images/avatar.jpg"
                  height="38px"
                  width="38px"
                  style={{ borderRadius: "10px" }}
                />{" "}
              </div>
              <div className="col-auto text-left p-0">
                <div
                  className="p-0 m-0"
                  style={{ fontSize: "14px", textAlign: "left" }}
                >
                  <b>Austin Anderson</b>
                </div>
                <div
                  className="p-0 m-0"
                  style={{ fontSize: "13px", textAlign: "left" }}
                >
                  Account Manage
                </div>
              </div>{" "}
              <div className="col-auto px-3 py-2">
                <FaAngleDown />
              </div>{" "}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

