export const Todo = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 rounded-lg bg-gray-200 text-gray-700 
               hover:bg-blue-500 hover:text-white 
               transition duration-200"
    >
      {text}
    </button>
  );
};
