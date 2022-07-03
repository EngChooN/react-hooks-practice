export default function Students(props) {
  return (
    <div>
      <p
        onClick={() => {
          props.dispatch({ type: "출석", payload: props.students.id });
        }}
        style={{
          color: props.students.isHere ? "gray" : "black",
          textDecoration: props.students.isHere ? "line-through" : "none",
        }}
      >
        {props.students.name}
      </p>
    </div>
  );
}
