export const Todo = () => {
  return (
    <div className="p-3 ">
      <div className="w-[320px] h-12 rounded-2xl   p-3 bg-white">
        <p className="text-gray-400">Enter task name</p>
      </div>

      <div className="w-[320px] h-22 rounded-2xl mt-2  p-3 bg-white">
        <p className="text-gray-400">Enter task name</p>
      </div>

      <div className="flex gap-3 w-[320px] h-13  mt-3">
        <div className="rounded-2xl p-3 bg-white">
          <p className="w-33 text-gray-400">Date</p>
        </div>

        <div className="w-50 rounded-2xl   p-3 bg-white">
          <p className="text-gray-400">Time</p>
        </div>
      </div>
      <div className="mt-2">
        <h2>Set Priority</h2>
      </div>
    </div>
  );
};
