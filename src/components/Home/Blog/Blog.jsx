import React from "react";

const Blog = () => {
  return (
    <div class="flex justify-center mt-4 my-5">
      <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://pixabay.com/get/ge5dd5df7a4c4cd249d0528612153664d9c3fee5683778a435d74977ba58b00dc66d4a4744e6bd766f62b3cddc0e4ffee23fb3b6d378f4744344c3d9a2f4f7b8b_1920.jpg"
          alt=""
        />
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
          <p class="text-gray-700 text-base mb-4">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
