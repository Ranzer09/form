import React from 'react';
import { Button } from "flowbite-react";
import {useNavigate} from 'react-router-dom';
import { List } from 'flowbite-react';

function Summary() {
  const navigate = useNavigate();
  const formData = JSON.parse(localStorage.getItem('formData')) || {};

  const validation = Object.keys(formData).length === 6;

  if (!validation) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Error</h2>
        <p className="mb-4">The form data is incomplete. Please complete all steps.</p>
        <Button onClick={() => navigate('/', { replace: true })} className="bg-red-500 text-white hover:bg-red-600">
          Go Back to Form
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h2>Summary</h2>
      <List className="mb-8 backdrop-blur-sm" >
      {Object.entries(formData).map(([key, value]) => (
          <List.Item key={key} className="text-lg">
            {`${key} : ${value}`}
          </List.Item>
        ))}
    </List>
      <Button className='submit' onClick={() => {
        localStorage.removeItem('formData');
        navigate('/', { replace: true });
      }}>
        Restart
      </Button>
    </div>
  );
}

export default Summary;
