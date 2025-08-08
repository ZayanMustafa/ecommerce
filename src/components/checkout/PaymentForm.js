

'use client';
import Button from '@/components/ui/Button';

export default function PaymentForm({ formData, handleChange, nextStep, prevStep }) {
  return (
    <div>
      <h2 className="text-2xl font-heading mb-6">Payment Method</h2>
      
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="credit"
            name="paymentMethod"
            value="credit"
            checked={formData.paymentMethod === 'credit'}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="credit" className="font-medium">Credit Card</label>
        </div>
        {/* More payment fields... */}
      </div>

      <div className="mt-8 flex justify-between">
        <Button text="Back" onClick={prevStep} color="gray" />
        <Button text="Review Order" onClick={nextStep} color="teal" />
      </div>
    </div>
  );
}