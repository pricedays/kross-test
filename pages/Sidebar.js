import { BsBox, BsGear, BsShare, BsPerson, BsGift } from "react-icons/bs";
import { FaTable, FaBook } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { BiBarChartAlt2 } from "react-icons/bi";

export default function Sidebar() {
  return (
    <div
      className="container p-0 m-0 w-100 h-100 overflow-hidden position-relative"
      style={{ color: "#696974" }}
    >
      <ul
        className="sidebar w-100 p-0 m-0"
        style={{
          margin: "0px",
          padding: "0px",
          color: "#696974",
          listStyleType: "none",
        }}
      >
        <li className="w-100 my-2">
          <a
            href="#"
            className="nav-link py-2 px-3 "

            style={{
              color: "#058eed",
              backgroundColor: "#e6f4fd",
              borderLeft: "7px solid #058eed",
            }}
          >
            <FiBriefcase size={20} />
          </a>
        </li>

        <li className=" px-3">
          <hr />
        </li>

        <li className="my-2">
          <a
            href="#"
            className="nav-link py-2 px-3 w-100"
            style={{ color: "#696974", borderLeft: "7px solid #ffffff" }}
          >
            <FaBook size={20} />
          </a>
        </li>

        <li className="my-2">
          <a
            href="#"
            className="nav-link py-2 px-3 "
            style={{ color: "#696974", borderLeft: "7px solid #ffffff" }}
          >
            <BsGift size={20} />
          </a>
        </li>

        <li className="my-2">
          <a
            href="#"
            className="nav-link py-2 px-3 "
            style={{ color: "#696974", borderLeft: "7px solid #ffffff" }}
          >
            <BsBox size={20} />
          </a>
        </li>

        <li className="my-2">
          <a
            href="#"
            className="nav-link py-2 px-3 "
            style={{ color: "#696974", borderLeft: "7px solid #ffffff" }}
          >
            <BsShare size={20} />
          </a>
        </li>

        <li className=" px-3">
          <hr />
        </li>

        <li className="my-2">
          <a
            href="#"
            className="nav-link py-2 px-3 "
            style={{ color: "#696974", borderLeft: "7px solid #ffffff" }}
          >
            <BiBarChartAlt2 size={20} />
          </a>
        </li>

        <li className="my-2">
          <a
            href="#"
            className="nav-link py-2 px-3 "
            style={{ color: "#696974", borderLeft: "7px solid #ffffff" }}
          >
            <FaTable size={20} />
          </a>
        </li>

        <li className=" px-3">
          <hr />
        </li>

        <li className="my-2">
          <a
            href="#"
            className="nav-link py-2 px-3 "
            style={{ color: "#696974", borderLeft: "7px solid #ffffff" }}
          >
            <BsPerson size={20} />
          </a>
        </li>
      </ul>
      <ul
        className="w-100 p-0 m-0"
        style={{
          backgroundColor: "#ffffff",
          listStyleType: "none",
          color: "#696974",
          bottom: "10px",
          position: "absolute",
        }}
      >
        <li className="my-2">
          <a
            href="#"
            className="nav-link py-2 px-3"
            style={{ color: "#696974", borderLeft: "7px solid #ffffff" }}
          >
            <BsGear size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
}
