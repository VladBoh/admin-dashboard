import { Table } from "antd";

export const   ProductsTable = ({ products, setSwitch }) => {
  
  const trunc = (text, maxLenght) =>
    text?.length > maxLenght ? text?.substring(0, maxLenght - 3) + "..." : text;

  const dataSource = products.map((product) => ({
      key: product.id,
      title: product.title,
      price: product.price,
      description: trunc(product.description, 50), 
      category: product.category.name,
  }));

    const columns = [
      {
        title: 'Title',
        dataIndex: 'title', 
        key: 'title',
      },
      {
        title: 'Price',
        dataIndex: 'price', 
        key: 'price',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Category',
        dataIndex: 'category', 
        key: 'category',
      },
    ];

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 border-solid border-2 border-blue-800 text-white p-2 rounded transition duration-300 ease-in-out shadow-md hover:shadow-lg mt-4"
        onClick={() => setSwitch(true)}
      >
        Switch to Card
      </button>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};
