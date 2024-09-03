import axios from 'axios'
import React, { useEffect } from 'react'

export const useGetSingleItem = ({ endpoint, id }) => {
    const [data, setData] = React.useState([])
    const [error, setError] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    'https://api.escuelajs.co/api/v1' + endpoint + '/' + id
                )
                setData(response.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchUsers()
    }, [])

    return { data, error, loading: isLoading }
}

export const useGetData = ({ endpoint, queryParamsObject }) => {
    const queryParams = new URLSearchParams(queryParamsObject)?.toString()

    const [data, setData] = React.useState([])
    const [error, setError] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    'https://api.escuelajs.co/api/v1' + endpoint + '?' + queryParams
                )
                setData(response.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchUsers()
    }, [queryParamsObject])

    return { data, error, loading: isLoading }
}

export function getProducts() {
    const [data, setData] = React.useState([]);

    const productsUrl = 'https://api.escuelajs.co/api/v1/products'; 

    React.useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(productsUrl);
                setData(response.data);
            } catch (err) {
                console.error(err.message);
            }
        };

        fetchProduct();
    }, []);

    return data;
}

export async function PostUser(userData) {
    const userUrl = 'https://api.escuelajs.co/api/v1/users/';
  
    try {
      const response = await axios.post(userUrl, userData);
      return response.data;
    } catch (error) {
      console.error('Error adding user:', error.message);
      throw error;
    }
  }