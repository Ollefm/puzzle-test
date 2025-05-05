type BoxProps = {
  number: number;
  index: number;
  correctPosition: boolean;
  handleClick: (index: number) => void;
};

function Box({
  number,
  index,
  handleClick,
  correctPosition,
}: Readonly<BoxProps>) {
  function onClick() {
    handleClick(index);
  }
  if (number === 0) {
    return <div className="empty-box"> {number}</div>;
  }
  return (
    <button
      onClick={onClick}
      className={correctPosition ? "box-correct" : "box"}
    >
      {number}
    </button>
  );
}

export default Box;
