import React from 'react'
import { Tooltip } from 'antd';

export const ProductsCard = ({ products, setSwitch }) => {

  const trunc = (text, maxLenght) =>
    text?.length > maxLenght ? text?.substring(0, maxLenght - 3) + "..." : text;

    return (
        <>
            <button
                className="bg-blue-500 hover:bg-blue-700 border-solid border-2 border-blue-800 text-white p-2 rounded transition duration-300 ease-in-out shadow-md hover:shadow-lg mt-4" onClick={() => setSwitch(false)}>
                Switch to table
            </button>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1600px] mx-auto px-4'>
                {products.map((product) => (
          <div
              key={product.id}
              style={{
                  backgroundImage: `url('${product.images}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                    }}
              className='flex flex-col border-2 text-white bg-gray-800 border-cyan-700 rounded-lg w-full h-[450px] gap-4 p-4'>
              <div className="flex-grow flex flex-col justify-between">
                  <div className="bg-black bg-opacity-60 p-3 rounded-lg mb-4">
                    <Tooltip title="Product title">
                      <h3 className='text-2xl font-semibold text-center'>{product.title}</h3>
                    </Tooltip>
                  </div>
                <nav>
                    <ul className='space-y-2'>
                      <li className="text-red-500 font-bold text-xl">${product.price}</li>
                      <Tooltip title={product.description}>
                        <li className="text-base">{trunc(product.description , 200)}</li>
                    </Tooltip>
                  </ul>
                </nav>
               </div>
            </div>
          ))}
      </div>
    </>
    )
}
