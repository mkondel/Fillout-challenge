const Button = ({ text, Icon, variant }) => (
  <button className={`btn btn--${variant}`}>
    <Icon />
    {text}
  </button>
);

export default Button;
