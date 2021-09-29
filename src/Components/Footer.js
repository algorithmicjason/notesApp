const Footer = () => {
  let year = new Date();
  return (
    <div>
      <h1
        style={{
          position: "relative",
          bottom: "0",
          width: "100%",
          textAlign: "center",
        }}
      >
        Copyright &copy; {year.getFullYear()} Jason Herrera{" "}
      </h1>
    </div>
  );
};
export default Footer;
