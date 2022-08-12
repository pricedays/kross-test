export default function handler(req, res) {
  res.status(200).json([
    { id: 1, title: "Project AAA", type: "Client Organisation" },
    { id: 2, title: "Project BBB", type: "Client Organisation" }
  ]);
}
