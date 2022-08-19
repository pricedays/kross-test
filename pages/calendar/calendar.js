import Axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { BsPlusLg, BsCalendar4Range } from "react-icons/bs";
import { HiOutlineClipboardCheck, HiOutlineViewBoards } from "react-icons/hi";
import DrawerForm from "./drawer";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-modern-drawer/dist/index.css";
import dynamic from "next/dynamic";
const Drawer = dynamic(() => import("react-modern-drawer"), {
  ssr: false,
});
const localizer = momentLocalizer(moment);

export default function App(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [monthSelect, setMonthSelect] = useState(0);
  const [yearSelect, setYearSelect] = useState(0);
  const [myEventsList, setMyEventsList] = useState([]);
  const [projectSelectData, setProjectSelectData] = useState();

  useEffect(() => {
    const eventListURL = "./api/eventlist";
    Axios.get(eventListURL)
      .then((response) => {
        response.data.map((item) => {
          item.title = "#" + item.id + " " + item.title;
        });
        setMyEventsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSelectSlot = (event) => {
    setIsOpen(true);
    let data = { start: event.start, end: event.end};
    setProjectSelectData(data);
  };

  const eventStyleGetter = () => {
    var style = {
      backgroundColor: "#ed3592",
      boxShadow: "0px 0px 10px #999999",
      borderRadius: "5px",
      margin: "3px 0px",
      color: "#ffffff",
      border: "0px",
      display: "block",
      fontSize: "12px",
      padding: "0px",
      overflow: "hidden",
    };
    return { style: style };
  };

  const calendarStyle = () => {
    var styles = {
      backgroundColor: "#ffffff",
      cursor: "pointer"
    };
    return { style: styles };
  };

  const HeaderCellContent = (event) => {
    return (
      <div style={{ fontSize: "13px", padding: "12px", color: "#686874" }}>
        {event.label}
      </div>
    );
  };

  const CustomToolbar = (toolbar) => {
    const date = moment(toolbar.date);

    useEffect(() => {
      setMonthSelect(date.format("M"));
      setYearSelect(date.format("YYYY"));
    }, [date]);

    const label = () => {
      const date = moment(toolbar.date);
      return (
        <b>
          <span style={{ color: "#0a99f0" }}>{date.format("MMMM")}</span>{" "}
          <span style={{ color: "#666671" }}>{date.format("YYYY")}</span>
        </b>
      );
    };

    const goToBack = () => {
      toolbar.date.setMonth(toolbar.date.getMonth() - 1);
      toolbar.onNavigate("prev");
    };

    const goToNext = () => {
      toolbar.date.setMonth(toolbar.date.getMonth() + 1);
      toolbar.onNavigate("next");
    };

    const goToCurrent = () => {
      const now = new Date();
      toolbar.date.setMonth(now.getMonth());
      toolbar.date.setYear(now.getFullYear());
      toolbar.onNavigate("current");
    };

    return (
      <div
        className="container w-100 "
        style={{ width: "100%", backgroundColor: "#f5f9fd" }}
      >
        <div className="row px-1 py-2 w-100">
          <div className="col-auto align-middle py-1">{label()}</div>
          <div className="col-auto">
            <div className="row gx-2">

              <div className="col-auto">
                <button
                  className="btn text-secondary px-2  bg-white"
                  style={{ lineHeight: "0em", border: "1px solid #dedede" }}
                  onClick={() => {
                    goToBack();
                  }}
                >
                  <b>
                    <GoChevronLeft size={20} />
                  </b>
                </button>
              </div>

              <div className="col-auto">
                <button
                  className="btn  text-secondary px-2  bg-white"
                  style={{ lineHeight: "0em", border: "1px solid #dedede" }}
                  onClick={() => {
                    goToNext();
                  }}
                >
                  <b>
                    <GoChevronRight size={20} />
                  </b>
                </button>
              </div>

              <div className="col-auto">
                <select
                  className="btn  text-secondary px-2 py-1 bg-white font-weight-bold "
                  style={{
                    textAlign: "left",
                    minWidth: "150px",
                    lineHeight: "0em",
                    border: "1px solid #dedede",
                  }}
                >
                  <option>Month</option>
                </select>
              </div>

              <div className="col-auto">
                <button
                  className="btn  text-secondary px-2 py-1 bg-white"
                  style={{ border: "1px solid #dedede" }}
                  onClick={() => {
                    goToCurrent();
                  }}
                >
                  Today
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };

  const EventComponent = ({ event }) => {
    return (
      <div className="container">
        <div className="row   ">
          <div
            className="col-auto  h-100"
            style={{
              padding: "3px 10px",
              textAlign: "center",
              backgroundColor: "#8d4469",
            }}
          >
            <b>P</b>
          </div>
          <div
            className="col "
            style={{
              padding: "3px 10px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {event.title}
          </div>
        </div>
      </div>
    );
  };

  const formats = {
    dateFormat: (date, culture, localizer) =>
      localizer.format(date, "D", culture),
    weekdayFormat: (date, culture, localizer) => {
      return localizer.format(date, "ddd", culture).toUpperCase();
    },
  };

  const dateCellWrapper = useCallback(
    ({ range, value, children }) => {
      const now = new Date();
      now.setHours(0, 0, 0, 0);

      return (
        <div
          style={
            value.getMonth() + 1 == monthSelect
              ? {
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#ffffff",
                  cursor: "pointer",
                }
              : { width: "100%", backgroundColor: "#f5f9fd", cursor: "pointer" }
          }
        >
          {children}
        </div>
      );
    },
    [monthSelect]
  );

  const DateHeaderComponent = ({ date, label }) => {
    return (
      <>
        {new Date().getFullYear() +
          "-" +
          new Date().getMonth() +
          "-" +
          new Date().getDate() ==
        new Date(date).getFullYear() +
          "-" +
          new Date(date).getMonth() +
          "-" +
          new Date(date).getDate() ? (
          <div
            style={{
              fontSize: "14px",
              padding: "4px 0px",
              borderRadius: "50%",
              width: "29px",
              height: "29px",
              margin: "6px 6px",
              textAlign: "center",
              color: "#ffffff",
              backgroundColor: "#0093ee",
            }}
          >
            {label}
          </div>
        ) : (
          <div
            style={{
              fontSize: "14px",
              padding: "4px 0px",
              borderRadius: "50%",
              width: "29px",
              height: "29px",
              margin: "6px 6px",
              textAlign: "center",
              color: "#454552",
            }}
          >
            {label}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div
        className="container border-bottom p-0 m-0 position-relative w-100 h-100"
        style={{ overflowY: "auto" }}
      >
        <div className="row py-1 px-0 mt-1 mx-0 overflow-hidden w-100">
          <div
            className="col-auto px-3 py-0 text-center border-right "
            style={{
              borderRight: "1px solid #e1e1e1",
              color: "#212529",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <b>Content</b>
          </div>
          <div className="col d-inline  p-0 ">
            <div className="container ">
              <div className="row w-100  gx-1 position-relative">
                <div className="col-auto d-inline p-1">
                  {" "}
                  <button
                    className="btn border-primary text-primary px-3 py-1"
                    style={{
                      height: "35px",
                      borderRadius: "10px",
                      fontSize: "15px",
                    }}
                  >
                    <b>
                      <BsCalendar4Range
                        size={18}
                        style={{
                          marginTop: "-4px",
                          marginRight: "5px",
                        }}
                      />{" "}
                      Calendar
                    </b>
                  </button>
                </div>
                <div className="col-auto d-inline p-1">
                  <button
                    className="btn  text-secondary px-3 py-1"
                    style={{
                      height: "35px",
                      borderRadius: "10px",
                      fontSize: "15px",
                      border: "1px solid #dedede",
                    }}
                  >
                    <b style={{ alignItems: "center" }}>
                      <HiOutlineViewBoards
                        size={24}
                        style={{
                          marginTop: "-2px",
                          marginRight: "5px",
                        }}
                      />{" "}
                      Board
                    </b>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto  gx-1  px-3 py-0 m-0">
            <div
              className="container m-0 p-0 "
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className="row m-0 p-0 "
                style={{
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  className="col-auto d-inline m-0 px-1 py-0"
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >



                  <button
                    className=" btn text-primary "
                    style={{
                      height: "40px",
                      borderRadius: "10px",
                      fontSize: "12px",
                      alignItem: "center",
                    }}
                  >
                    <div>
                      <b>
                      
                        <HiOutlineClipboardCheck
                          size={23}
                          style={{
                            marginTop: "-4px",
                            marginRight: "10px",
                          }}
                        />
                        Submit for review
                      </b>
                    </div>
                  </button>
                </div>
                <div
                  className="col-auto m-0 px-1 py-0"
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <button
                    className=" btn btn-primary  px-4 py-2"
                    style={{
                      height: "40px",
                      borderRadius: "10px",
                      fontSize: "12px",
                    }}
                  >
                    <b>
                      <BsPlusLg
                        size={15}
                        style={{
                          marginTop: "-2px",
                          marginRight: "10px",
                        }}
                      />
                      Create content
                    </b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row w-100 h-100 m-0 p-0 ">
          <div
            className="w-100 p-0 m-0"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <Calendar
              formats={formats}
              localizer={localizer}
              events={myEventsList}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "100%" }}
              onSelectSlot={handleSelectSlot}
              selectable
              eventPropGetter={eventStyleGetter}
              dayPropGetter={calendarStyle}
              components={{
                dateCellWrapper: dateCellWrapper,
                event: EventComponent,
                toolbar: CustomToolbar,
                month: {
                  header: HeaderCellContent,
                  dateHeader: DateHeaderComponent,
                },
              }}
            />
          </div>
        </div>
      </div>{" "}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        style={{
          position: "absolute",
          width: "70%",
        }}
      >
        <DrawerForm projectSelectData={projectSelectData} data={props.data} />
      </Drawer>{" "}
    </>
  );
}
