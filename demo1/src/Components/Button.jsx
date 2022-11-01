import "./Button.css";
export function Button(props) {
  return (
    <button
      onClick={(e) => props.btnFn(e)}
      id="btn"
      style={{ backgroundColor: props.bgColor, borderRadius: "10px" }}
    >
      {props.name}
    </button>
  );
}
