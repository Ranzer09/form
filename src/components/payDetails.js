import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button,Label,TextInput } from "flowbite-react";
import * as yup from 'yup';
import {useNavigate} from 'react-router-dom';

const schema = yup.object().shape({
  Cardnumber: yup.string().required('Card Number is required'),
  ExpiryDate: yup.string().required('Expiry Date is required')
});

function Page3() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    localStorage.setItem('formData', JSON.stringify({ ...JSON.parse(localStorage.getItem('formData')), ...data }));
    navigate('/summary');
  };

  return (
    <div >
      <h2> Payment Details</h2>
      <form  className='flex max-w-md flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <Label color={errors.Cardnumber?'failure':''}>
          Card Number:
          <TextInput color={errors.Cardnumber?'failure':''} {...register('Cardnumber')} />
          {errors.Cardnumber && <p color={errors.Cardnumber?'failure':''}>{errors.Cardnumber.message}</p>}
        </Label>
        <Label color={errors.ExpiryDate?'failure':''}>
          Expiry Date:
          <TextInput  color={errors.ExpiryDate?'failure':''}{...register('ExpiryDate')} />
          {errors.ExpiryDate && <p color={errors.ExpiryDate?'failure':''}>{errors.ExpiryDate.message}</p>}
        </Label>
        <Button className='submit' type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Page3;
