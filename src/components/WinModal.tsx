import "../style/App.css";

type WinModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function WinModal({ isOpen, onClose }: Readonly<WinModalProps>) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3 className="win-text">Grattis du klarade det! 🎉</h3>
        <img
          className="win-image"
          alt="Another one"
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExamY5d2RuNGV5eGI0NGRoamdud3J5djd6NWFpb3c5NW8zcmgzMjJvciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RDbZGZ3O0UmL6/giphy.gif"
        ></img>
        <button className="button" onClick={onClose}>
          Kör igen
        </button>
      </div>
    </div>
  );
}
