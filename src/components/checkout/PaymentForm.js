


'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button.js';
// import PaymentRadio from '@/components/ui/PaymentRadio';
// import CardInput from '@/components/ui/CardInput';
import { FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';
import PaymentRadio from '../ui/PaymentRadio';
import CardInput from '../ui/CardInput';

export default function PaymentForm({ formData, handleChange, nextStep, prevStep }) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.paymentMethod === 'credit') {
      if (!formData.cardNumber || formData.cardNumber.length < 16) {
        newErrors.cardNumber = 'Valid card number required';
      }
      if (!formData.cardName) {
        newErrors.cardName = 'Name on card required';
      }
      if (!formData.expiryDate || !/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = 'MM/YY required';
      }
      if (!formData.cvv || formData.cvv.length < 3) {
        newErrors.cvv = 'CVV required';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-heading mb-6">Payment Method</h2>
      
      <div className="space-y-4 mb-6">
        <PaymentRadio
          id="credit"
          name="paymentMethod"
          value="credit"
          checked={formData.paymentMethod === 'credit'}
          onChange={handleChange}
          label="Credit/Debit Card"
          icon={<FaCreditCard className="text-gray-600" />}
          description="Pay with Visa, Mastercard, or other major cards"
        />

        {formData.paymentMethod === 'credit' && (
          <div className="ml-8 space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Card Number*</label>
              <CardInput 
                value={formData.cardNumber} 
                onChange={handleChange} 
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Name on Card*</label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.cardName && (
                <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Expiry Date*</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 border rounded-md"
                  maxLength={5}
                />
                {errors.expiryDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">CVV*</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  className="w-full px-4 py-2 border rounded-md"
                  maxLength={4}
                />
                {errors.cvv && (
                  <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                )}
              </div>
            </div>
          </div>
        )}

        <PaymentRadio
          id="cod"
          name="paymentMethod"
          value="cod"
          checked={formData.paymentMethod === 'cod'}
          onChange={handleChange}
          label="Cash on Delivery"
          icon={<FaMoneyBillWave className="text-gray-600" />}
          description="Pay with cash when your order is delivered"
        />
      </div>

      <div className="mt-8 flex justify-between">
        <Button 
          type="button"
          text="Back" 
          onClick={prevStep} 
          color="gray" 
        />
        <Button 
          type="submit"
          text="Review Order" 
          color="teal" 
        />
      </div>
    </form>
  );
}