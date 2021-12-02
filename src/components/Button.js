const Button = ({ onClick }) => {
  return (
    <div className="Button">
      <button onClick={onClick} className="btn">
        Click me !
      </button>
    </div>
  );
};

export default Button;
