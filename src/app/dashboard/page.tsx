import Container from "@/components/Container";
import React from "react";

function Dashboard() {
  return (
    <div>
      <Container>
        <h3 className="text-2xl font-bold text-slate-600 mt-4">Dashboard of store </h3>
        <div className="bg-gray-100 px-8 py-6 my-5 space-y-4">
          <div className="space-y-2">
            <label htmlFor="image" className="inline-block">Image url</label>
            <input
              type="text"
              placeholder="url"
              className="w-full rounded py-1 px-3 bg-white placeholder:text-gray-300 outline-0 border-0"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="title" className="inline-block">Title</label>
            <input
              type="text"
              placeholder="title"
              className="w-full rounded py-1 px-3 bg-white placeholder:text-gray-300 outline-0 border-0"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subTitle" className="inline-block">Sub Title</label>
            <input
              type="text"
              placeholder="subTitle"
              className="w-full rounded py-1 px-3 bg-white placeholder:text-gray-300 outline-0 border-0"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="rating" className="inline-block">Rating</label>
            <input
              type="text"
              placeholder="rating"
              className="w-full rounded py-1 px-3 bg-white placeholder:text-gray-300 outline-0 border-0"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="price" className="inline-block">Price</label>
            <input
              type="text"
              placeholder="rating"
              className="w-full rounded py-1 px-3 bg-white placeholder:text-gray-300 outline-0 border-0"
            />
          </div>

          <button className="text-white bg-green-500 rounded-lg px-8 py-2 cursor-pointer active:scale-98 transition duration-75 shadow-md active:shadow-none">Submit</button>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
