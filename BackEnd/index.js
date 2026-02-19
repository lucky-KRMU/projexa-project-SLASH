import e from "express";
const app = e()
const port = 8000

app.get('/', (req, res) => {
  res.send('This is the backend of the slash project')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
