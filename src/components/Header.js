const Header = (props) => {
  const { title, payment } = props;
  return (
    <div className="container">
      <h3>{title}</h3>
      <h1>{payment}</h1>
    </div>
  );
};

export default Header;
