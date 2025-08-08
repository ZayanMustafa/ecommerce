

'use client';
import Button from '@/components/ui/Button';

export default function OrderReview({ formData, handleChange, prevStep }) {
  return (
    <div>
      <h2 className="text-2xl font-heading mb-6">Review Your Order</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Shipping Information</h3>
        <p>{formData.firstName} {formData.lastName}</p>
        {/* More order review details... */}
      </div>

      <div className="mt-8 flex justify-between">
        <Button text="Back" onClick={prevStep} color="gray" />
        <Button 
          text="Place Order" 
          href="/order-confirmed/123" 
          color="teal" 
          disabled={!formData.agreeToTerms}
        />
      </div>
    </div>
  );
}
