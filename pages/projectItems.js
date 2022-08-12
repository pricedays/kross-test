import { BsShare } from "react-icons/bs";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BiBorderAll } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectItems(props) {
  return (
    <div
      className="w-100 p-3 m-0 border-bottom  position-relative overflow-hidden"
      style={
        props.selected?.id === props.item?.id
          ? {
              position: "relative",
              overflow: "hidden",
              borderLeft: "9px solid #0093ee",
              boxSizing: "border-box",
              cursor: "pointer",
            }
          : {
              position: "relative",
              overflow: "hidden",
              borderLeft: "9px solid #ffffff",
              boxSizing: "border-box",
              cursor: "pointer",
            }
      }
    >
      <div className="p-0">
        <b>{props.item?.title}</b>
      </div>
      <div className="mt-1" style={{ color: "#999999", fontSize: "14px" }}>
        {props.item?.type}
      </div>
      <div className="container">
        <div
          className="row mt-2  "
          style={{ color: "#666666", fontSize: "15px" }}
        >
          <div
            className="col-auto border-right  px-1"
            style={{ borderRight: "1px solid #e1e1e1" }}
          >
            <span>
              <BiBorderAll />
            </span>{" "}
            <span style={{ fontSize: "13px" }}>2/5</span>
          </div>

          <div className="col px-2" style={{ color: "#666666" }}>
            <FaFacebookSquare /> <AiFillTwitterSquare /> <FaInstagramSquare />{" "}
            <BsShare />
          </div>
          <div className="col-auto   p-0 ">
            <div className="container p-0">
              <div className="row  gx-1 form-inline">
                <div className="col  ">
                  <div
                    className="rounded  border text-white "
                    style={{
                      backgroundColor: "#80ceca",
                      fontSize: "11px",
                      padding: "3px 5px",
                    }}
                  >
                    KR
                  </div>
                </div>{" "}
                <div className="col  ">
                  <div
                    className="rounded 1 border"
                    style={{
                      fontSize: "11px",
                      padding: "3px 5px",
                    }}
                  >
                    3+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="position-absolute"
        style={{
          color: "#6c6c77",
          position: "absolute",
          top: "13px",
          right: "13px",
        }}
      >
        <FiExternalLink />
      </div>
    </div>
  );
}
