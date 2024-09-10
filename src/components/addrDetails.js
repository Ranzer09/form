import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button,Label, TextInput } from "flowbite-react";
import * as yup from 'yup';
import {useNavigate} from 'react-router-dom';

const schema = yup.object().shape({
  Address: yup.string().required('Address is required'),
  City: yup.string().required('City is required')
});

function Page2() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    localStorage.setItem('formData', JSON.stringify({ ...JSON.parse(localStorage.getItem('formData')), ...data }));
    navigate('/page3');
  };

  return (
    <div>
      <h2>Address Details</h2>
      <form className='flex max-w-md flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <Label color={errors.Address?'failure':''}>
          Address:
          <TextInput color={errors.Address?'failure':''} {...register('Address')} />
          {errors.Address && <p color={errors.Address?'failure':''}>{errors.Address.message}</p>}
        </Label>
        <Label color={errors.City?'failure':''}>
          City:
          <TextInput color={errors.City?'failure':''} {...register('City')} />
          {errors.City && <p color={errors.City?'failure':''} >{errors.City.message}</p>}
        </Label>
        <Button className='submit' type="submit">Next</Button>
      </form>
    </div>
  );
}

export default Page2;
