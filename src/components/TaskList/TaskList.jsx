import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10 "
    >
      <div className="flex-shrink-0 h-full w-[350px] p-5 bg-sky-600 rounded-xl">
        <div className="flex justify-between items-center ">
          <h3 className="bg-red-700 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">23 Aug 2001</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a new project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          minima facilis inventore sapiente quam distinctio expedita consectetur
          deleniti cum ullam!
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[350px] p-5 bg-orange-400 rounded-xl">
        <div className="flex justify-between items-center ">
          <h3 className="bg-red-700 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">23 Aug 2001</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a new project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          minima facilis inventore sapiente quam distinctio expedita consectetur
          deleniti cum ullam!
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[350px] p-5 bg-lime-600 rounded-xl">
        <div className="flex justify-between items-center ">
          <h3 className="bg-red-700 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">23 Aug 2001</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a new project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          minima facilis inventore sapiente quam distinctio expedita consectetur
          deleniti cum ullam!
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[350px] p-5 bg-purple-400 rounded-xl">
        <div className="flex justify-between items-center ">
          <h3 className="bg-red-700 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">23 Aug 2001</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a new project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          minima facilis inventore sapiente quam distinctio expedita consectetur
          deleniti cum ullam!
        </p>
      </div>
    </div>
  );
};

export default TaskList;
