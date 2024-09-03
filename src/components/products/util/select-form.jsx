import { Select } from "antd";

import { useGetData } from "../../../hooks/use-get-data";

export const SelectForm = ({ setCategorySelectValue }) => {
    const { data: categories } = useGetData({
        endpoint: '/categories',
    });

    const options = categories.map((product) => ({
        value: product.id,
        label: <span>{product.name}</span>,
    }));

    return (
        <Select
            options={options}
            onChange={(value) => setCategorySelectValue(value)}
            placeholder="Select a category"
        />
    );
};
