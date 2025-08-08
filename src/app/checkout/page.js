


'use client';
import { useState } from 'react';
import CheckoutSteps from '@/components/sections/CheckoutSteps';
import Button from '@/components/ui/Button';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    payment: 'credit'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="container mx-auto px-4 py-12">
      <CheckoutSteps currentStep={step} />
      
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm mt-8">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-heading mb-6">Shipping Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              {/* More shipping fields... */}
            </div>
            <div className="mt-8 flex justify-end">
              <Button 
                text="Continue to Payment" 
                onClick={nextStep} 
                color="teal" 
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-heading mb-6">Payment Method</h2>
            {/* Payment form fields... */}
            <div className="mt-8 flex justify-between">
              <Button 
                text="Back" 
                onClick={prevStep} 
                color="gray" 
              />
              <Button 
                text="Review Order" 
                onClick={nextStep} 
                color="teal" 
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-heading mb-6">Review Your Order</h2>
            {/* Order summary... */}
            <div className="mt-8 flex justify-between">
              <Button 
                text="Back" 
                onClick={prevStep} 
                color="gray" 
              />
              <Button 
                text="Place Order" 
                href="/order-confirmed/123" 
                color="coral" 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}