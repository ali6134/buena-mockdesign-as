import React, { useEffect, useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';
import '../index.css'; 


const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required').matches(/^[a-zA-Z\s]*$/, 'Full Name should contain only letters and spaces'),
});

interface IFormInputs {
  fullName: string;
}

interface PersonalInfoProps {
  setCurrentStep: (step: number) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ setCurrentStep }) => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setCurrentStep(1);
  }, [setCurrentStep]);

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        dispatch({ type: 'SET_FULL_NAME', payload: data.fullName });
        navigate('/contact-info');
      }, 400); 
    }
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4">Personal Information</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-2">
          Full Name:
          <input
            type="text"
            defaultValue={state.fullName}
            {...register('fullName')}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
        </label>
        <div className="flex justify-end mt-4">
          <button type="submit" className={`px-4 py-2 fill-animation ${isAnimating ? 'animate' : ''}`}>
            <span>Next</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
