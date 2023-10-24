import React from 'react';

const ListOfCards = ({ cities }) => {
  return (
    <>
    <div className='flex flex-row flex-wrap gap-5 justify-center my-12'> 
      {cities.map((element) => (
        <div key={element.id} className="">
          <div className="w-full h-[20rem] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="p-8 rounded-t-lg h-[15rem]"
                src={element['image']}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {element['name']}
                </h5>
              </a>
            </div>
          </div>
        </div>
      ))}

</div>
    </>
  );
};

export default ListOfCards;
