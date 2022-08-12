export default function eventList(req, res) {
    res.status(200).json([
      { id: 1, title: "topic AAA", project_id: 1, start: "2022-08-06 00:00:00", end: "2022-08-06 00:00:00" },
      { id: 2, title: "topic BBB", project_id: 1, start: "2022-08-14 00:00:00", end: "2022-08-14 00:00:00" },  

    ]);
  }
  