const hiddenStyle = {
  position: "absolute",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  border: 0,
  whiteSpace: "nowrap",
};

function VisuallyHidden({ children }) {
  return <span style={hiddenStyle}>{children}</span>;
}

export default VisuallyHidden;
