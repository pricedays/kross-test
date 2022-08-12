import { BsImage, BsPlayBtn } from "react-icons/bs";
import { HiOutlineDocument } from "react-icons/hi";
import { FaArrowUp, FaRegCheckSquare } from "react-icons/fa";
import { GrTextAlignFull } from "react-icons/gr";
import { BiBorderAll } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function Drawer(props) {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  useEffect(() => {
    setDateStart(
      props.projectSelectData?.start.getFullYear() +
        "-" +
        String(props.projectSelectData?.start.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(props.projectSelectData?.start.getDate()).padStart(2, "0")
    );

    setDateEnd(
      props.projectSelectData?.end.getFullYear() +
        "-" +
        String(props.projectSelectData?.end.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(props.projectSelectData?.end.getDate()).padStart(2, "0")
    );
  }, [props]);

  return (
    <div
      className="p-4  bg-white "
      style={{
        zIndex: "999",
        position: "absolute",
        width: "100%",
        backgroundColor: "#FFFFFF",
        right: "0px",
        top: "0px",
      }}
    >
      <div className="row py-2">
        <div className="col">
          <h4>
            <BiBorderAll /> Create content
          </h4>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-primary  px-3 py-2"
            style={{
              height: "40px",
              borderRadius: "10px",
              fontSize: "12px",
            }}
          >
            <b>
              <FaRegCheckSquare
                size={20}
                style={{
                  marginTop: "-2px",
                  marginRight: "6px",
                }}
              />{" "}
              Create content
            </b>
          </button>
        </div>
      </div>

      <div className="form-group p-2">
        <label
          htmlFor="inputName"
          style={{
            position: "absolute",
            fontSize: "13px",
            marginTop: "4px",
            marginLeft: "16px",
            color: "#666666",
          }}
        >
          Select project
        </label>
        <select
          id="inputName"
          className="form-select form-select-lg"
          aria-label=".form-select-lg example"
          style={{
            backgroundColor: "#fafafb",
            border: "none",
            borderBottom: "1px solid #666666",
            borderRadius: "0px",
            paddingTop: "25px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          <option defaultValue={props.data?.title}>{props.data?.title}</option>
        </select>
      </div>
      <div className="form-group  p-2">
        <input
          type="text"
          className="form-control-plaintext border-bottom p-3"
          id="staticEmail2"
          placeholder="Topic name"
          style={{ backgroundColor: "#fafafb" }}
        />
      </div>
      <div className="row form-group  gx-3 p-2">
        <div className="col">
          <input
            type="date"
            className="form-control p-3 border-bottom"
            style={{
              backgroundColor: "#fafafb",
              border: "none",
              borderRadius: "0px",
            }}
            defaultValue={dateStart}
          />
        </div>
        <div className="col">
          <input
            type="date"
            className="form-control p-3 border-bottom"
            style={{
              backgroundColor: "#fafafb",
              border: "none",
              borderRadius: "0px",
            }}
            defaultValue={dateEnd}
          />
        </div>
      </div>
      <div className="form-group p-2">
        <input
          type="text"
          className="form-control-plaintext border-bottom p-3"
          id="staticEmail"
          placeholder="Key message"
          style={{ backgroundColor: "#fafafb" }}
        />
      </div>
      <div className="form-group  p-2">
        <input
          type="text"
          className="form-control-plaintext border-bottom p-3"
          id="staticEmail2"
          placeholder="Description"
          style={{ backgroundColor: "#fafafb" }}
        />
      </div>
      <div className="row gx-2 px-2 py-1">
        <label className="py-2" style={{ fontSize: "13px", color: "#666666" }}>
          Content format
        </label>
        <div className="col ">
          <button
            className="btn border-primary text-primary w-100 p-2"
            style={{
              borderRadius: "10px",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            <BsImage size={20} style={{marginRight: "5px"}} /> Image
          </button>
        </div>
        <div className="col">
          <button
            className="btn text-secondary w-100 p-2"
            style={{
              borderRadius: "10px",
              border: "1px solid #dedede",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            <BsPlayBtn size={20} style={{marginRight: "5px"}} /> Video
          </button>
        </div>
        <div className="col">
          <button
            className="btn  text-secondary w-100 p-2"
            style={{
              borderRadius: "10px",
              border: "1px solid #dedede",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            <HiOutlineDocument size={20} style={{marginRight: "5px"}} /> Writing
          </button>
        </div>
      </div>
      <div className="row gx-2 px-2 py-1">
        <label className="py-2" style={{ fontSize: "13px", color: "#666666" }}>
          Post type
        </label>

        <div className="col">
          <button
            className="btn border-primary text-primary w-100 p-2"
            style={{
              borderRadius: "10px",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            <FaArrowUp size={20} style={{marginRight: "5px"}} /> Boost post
          </button>
        </div>

        <div className="col">
          <button
            className="btn text-secondary w-100 text-nowrap p-2"
            style={{
              borderRadius: "10px",
              border: "1px solid #dedede",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            <GrTextAlignFull size={20} style={{marginRight: "5px"}} /> Non-boost post
          </button>
        </div>

        <div className="col"></div>
      </div>
    </div>
  );
}
