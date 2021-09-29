import Paper from "@mui/material/Paper";

const Header = () => {
  return (
    <Paper
      style={{
        background: "#CD853F",
        padding: "19px",
        display: "flex",
        justifyContent: "center",
      }}
      elevation={3}
    >
      <img
        src="https://mpng.subpng.com/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg"
        alt=""
        style={{ width: "90px" }}
      />
      <h1 style={{ margin: "0", padding: "10px", fontFamily: "cursive" }}>
        React Notes
      </h1>
      <img
        src="https://mpng.subpng.com/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg"
        alt=""
        style={{ width: "90px" }}
      />
    </Paper>
  );
};
export default Header;
