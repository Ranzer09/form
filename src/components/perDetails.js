import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button,Label, TextInput } from "flowbite-react";
import * as yup from 'yup';
import {useNavigate} from 'react-router-dom';



const schema = yup.object().shape({
  Name: yup.string().required('Name is required'),
  Email: yup.string().email('Invalid Email address').required('Email is required')
});

function Page1() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema) 
  });

  const onSubmit = (data) => {
    localStorage.setItem('formData', JSON.stringify(data));
    navigate('/page2');
  };

  return (
    <div>
      <h2> Personal Details</h2>
      <form className='flex max-w-md flex-col gap-4 ' onSubmit={handleSubmit(onSubmit)}>
        <Label color={errors.Name?'failure':''}>
          Name:
          <TextInput color={errors.Name?'failure':''}  {...register('Name')} />
          {errors.Name && <p color={'failure'}>{errors.Name.message}</p>}
        </Label>
        <Label color={errors.Email?'failure':''}>
          Email:
          <TextInput color={errors.Email?'failure':''} {...register('Email')} />
          {errors.Email && <p color="failure">{errors.Email.message}</p>}
        </Label>
        <Button type="submit">Next</Button>
      </form>
    </div>
  );
}

export default Page1;
