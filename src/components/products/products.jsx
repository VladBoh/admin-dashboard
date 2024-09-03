import React, { useState } from 'react';
import { useGetData } from '../../hooks/use-get-data';
import { ProductsCard } from './products-card';
import { ProductsTable } from './productTable';
import { SelectForm } from './util/select-form';

export const Products = () => {
  const [categorySelectValue, setCategorySelectValue] = useState(null);
 
  const { data: products } = useGetData({
    endpoint: `/categories/${categorySelectValue}/products`,
    queryParamsObject: {
      limit:50,
      offset:0
    },
  });

  const [swCard, setSwitch] = useState(true);
  
  return (
    <div>
     <div className='flex justify-center my-2'>
         <SelectForm setCategorySelectValue={setCategorySelectValue} />
     </div>
      {categorySelectValue ? (
        swCard ? (
          <ProductsCard products={products} setSwitch={setSwitch} />
        ) : (
          <ProductsTable products={products} setSwitch={setSwitch} />
        )
      ) : (
        <p style={{ marginTop: '20px', textAlign: 'center', color: '#555' }}>
          Please select a category to view products.
        </p>
      )}
      
    </div>
  );
};
