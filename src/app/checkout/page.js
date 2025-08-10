


'use client';
import OrderReview from '@/components/checkout/OrderRevirew';
import PaymentForm from '@/components/checkout/PaymentForm';
import ShippingForm from '@/components/checkout/ShippingForm';
import CheckoutSteps from '@/components/sections/CheckoutSetup';
import { useState } from 'react';


export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    country: 'United States',
    state: '',
    zipCode: '',
    // Payment Information
    paymentMethod: 'credit',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    // Order Details
    shippingMethod: 'standard',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    // Basic validation before proceeding
    if (step === 1 && !formData.firstName) {
      alert('Please enter your first name');
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="container mx-auto px-4 py-12">
      <CheckoutSteps currentStep={step} />
      
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm mt-8">
        {step === 1 && (
          <ShippingForm 
            formData={formData} 
            handleChange={handleChange} 
            nextStep={nextStep} 
          />
        )}

        {step === 2 && (
          <PaymentForm 
            formData={formData} 
            handleChange={handleChange} 
            nextStep={nextStep} 
            prevStep={prevStep} 
          />
        )}

        {step === 3 && (
          <OrderReview 
            formData={formData} 
            handleChange={handleChange} 
            prevStep={prevStep} 
          />
        )}
      </div>
    </div>
  );
}