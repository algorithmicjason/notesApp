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
      
      <h1 style={{ fontSize: "50px", margin: "0", padding: "10px", fontFamily: "cursive" }}>
        React Notes
      </h1>
      
    </Paper>
  );
};
export default Header;
