import React, { useEffect, useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { AppContext } from '../AppContext';
import '../index.css';

interface IFormInputs {
  email: string;
  phoneNumber: string;
}

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
});

interface ContactInfoProps {
  setCurrentStep: (step: number) => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ setCurrentStep }) => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [isAnimatingNext, setIsAnimatingNext] = useState(false);
  const [isAnimatingBack, setIsAnimatingBack] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setCurrentStep(2);
    setValue('email', state.email);
    setValue('phoneNumber', state.phoneNumber);
    console.log('Current state:', state);
  }, [setCurrentStep, setValue, state]);

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    if (!isAnimatingNext) {
      setIsAnimatingNext(true);
      setTimeout(() => {
        console.log('Updating email to:', data.email);
        console.log('Updating phoneNumber to:', data.phoneNumber);
        dispatch({ type: 'SET_EMAIL', payload: data.email });
        dispatch({ type: 'SET_PHONE_NUMBER', payload: data.phoneNumber });
        navigate('/salary-info');
      }, 400); // Wartezeit sollte der Animationsdauer entsprechen
    }
  };

  const handleBack = () => {
    if (!isAnimatingBack) {
      setIsAnimatingBack(true);
      setTimeout(() => {
        navigate('/personal-info');
      }, 0); // Wartezeit sollte der Animationsdauer entsprechen
    }
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            {...register('email')}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </label>
        <br />
        <label className="block mb-2">
          Phone Number:
          <PhoneInput
            country={'us'}
            {...register('phoneNumber')}
            value={state.phoneNumber}
            onChange={(value) => setValue('phoneNumber', value)}
            inputClass="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
        </label>
        <div className="flex justify-between mt-4">
          <button type="button" onClick={handleBack} className="px-4 py-2 bg-gray-600 text-white rounded">
            Back
          </button>
          <button type="submit" className={`px-4 py-2 fill-animation ${isAnimatingNext ? 'animate' : ''}`}>
            <span>Next</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;
