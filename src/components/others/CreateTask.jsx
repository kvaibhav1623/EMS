import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
    <form className="flex flex-wrap w-full items-start justify-between ">
      <div className="w-1/2">
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
          <input className="text-sm py-1 px-2 w-4/5 bg-transparent rounded outline-none border-[1px] border-gray-400 mb-4" type="text" placeholder="Complete the project" />
        </div>

        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
          <input className="text-sm py-1 px-2 w-4/5 bg-transparent rounded outline-none border-[1px] border-gray-400 mb-4" type="date" name="" id="" />
        </div>

        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Assigned to</h3>
          <input className="text-sm py-1 px-2 w-4/5 rounded bg-transparent outline-none border-[1px] border-gray-400 mb-4" type="text" placeholder="Employee Name" />
        </div>

        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
          <input className="text-sm py-1 px-2 w-4/5 rounded bg-transparent outline-none border-[1px] border-gray-400 mb-4" type="text" placeholder="design , dev" />
        </div>
      </div>

      <div className="w-1/2">
        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
        <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id="" cols="30" rows="10"></textarea>
        <button className="bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full">Create task</button>
      </div>

      <div></div>
    </form>
  </div>
  )
}

export default CreateTask