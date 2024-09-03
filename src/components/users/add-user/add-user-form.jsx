import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import { Button, Modal  } from 'antd';
import { PostUser } from '../../../hooks/use-get-data';


export const AddUserForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const Post = async (value) => {
  const {name,email,password} = value
    const userData = {
        name,
        email,
        password ,
        role:"customer" ,
        avatar:`https://img.freepik.com/free-photo/close-up-on-adorable-kitten-on-couch_23-2150782439.jpg?size=626&ext=jpg`
     };
    
    try {
      await PostUser(userData);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding user:', error.message);
    }
  };

  return (
    <>
      <div className='flex justify-end'>
        <Button className="fixed bottom-4 right-4 z-50" type="primary" onClick={showModal}>
          Add User
        </Button>
        <Modal title="Add User" open={isModalOpen} footer="" onCancel={handleCancel}>
          <form onSubmit={handleSubmit(Post)}>
            <div className='flex flex-col gap-3 '>
              <input className='h-10 outline-0' placeholder='Enter your username' {... register( "name" , { 
                required: "Please write your username." ,
                minLength: {
                    value:4,
                    message: `Min lenghts is 4`
                } })}/>
                <p>{errors.name?.message}</p>
              <input className='h-10 outline-0' placeholder='Enter your email' {... register( "email" , { 
                required: "Please write your email." ,
                pattern: {
                    value: /.*[@].*[.].*/,
                    message: "Email must include '@' and '.'"
                  } })}/>
                <p>{errors.email?.message}</p>  
              <input type='password' className='h-10 outline-0' placeholder='Create password' {... register( "password" , { 
                required: "Please write your password." ,   
                minLength: {
                    value: 8, 
                    message: "Password must be at least 8 characters long."  
                }})}/>
                <p>{errors.password?.message}</p>  
            </div>
             <div className='flex justify-end'>
                <button className='bg-blue-400 text-white h-[30px] w-[100px]'>
                    submit
                </button>
             </div>
          </form>
        </Modal>    
      </div>
    </>
  );
};
