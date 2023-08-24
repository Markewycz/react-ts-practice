type ButtonProps = {
  onClick: () => void;
};

export default function Button({ onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className="w-max border-2 border-black px-2"
      onClick={onClick}
    >
      Reset
    </button>
  );
}
