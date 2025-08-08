'use client';
import Button from '@/components/ui/Button';
import { FaCheckCircle, FaMapMarkerAlt, FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';

export default function OrderReview({ formData, handleChange, prevStep }) {
  // Calculate order summary
  const subtotal = 129.98; // This would normally come from cart/order data
  const shippingCost = formData.shippingMethod === 'express' ? 9.99 : 4.99;
  const tax = subtotal * 0.08; // Example tax calculation
  const total = subtotal + shippingCost + tax;

  // Mock order items - replace with actual cart/order data
  const orderItems = [
    { id: 1, name: 'Solar-Powered Desk Lamp', price: 49.99, quantity: 1 },
    { id: 2, name: 'Bamboo Bluetooth Speaker', price: 79.99, quantity: 1 }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-heading mb-6">Review Your Order</h2>
      
      {/* Order Summary Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-4 flex items-center">
          <FaCheckCircle className="text-teal-500 mr-2" />
          Order Items
        </h3>
        <div className="divide-y divide-gray-200">
          {orderItems.map(item => (
            <div key={item.id} className="py-4 flex justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="font-medium">${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-4 flex items-center">
          <FaMapMarkerAlt className="text-teal-500 mr-2" />
          Shipping Information
        </h3>
        <div className="space-y-2">
          <p className="font-medium">{formData.firstName} {formData.lastName}</p>
          <p>{formData.address}</p>
          {formData.apartment && <p>{formData.apartment}</p>}
          <p>{formData.city}, {formData.state} {formData.zipCode}</p>
          <p>{formData.country}</p>
          <p className="pt-2">
            <span className="font-medium">Contact:</span> {formData.email} | {formData.phone}
          </p>
          <p className="pt-2">
            <span className="font-medium">Shipping Method:</span> {formData.shippingMethod === 'standard' ? 
              'Standard (3-5 business days)' : 'Express (1-2 business days)'}
          </p>
        </div>
      </div>

      {/* Payment Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-4 flex items-center">
          {formData.paymentMethod === 'credit' ? (
            <FaCreditCard className="text-teal-500 mr-2" />
          ) : (
            <FaMoneyBillWave className="text-teal-500 mr-2" />
          )}
          Payment Method
        </h3>
        <div>
          <p className="font-medium">
            {formData.paymentMethod === 'credit' ? 'Credit/Debit Card' : 'Cash on Delivery'}
          </p>
          {formData.paymentMethod === 'credit' && (
            <div className="mt-2 space-y-1">
              <p>Card ending in •••• {formData.cardNumber?.slice(-4)}</p>
              <p>Expires {formData.expiryDate}</p>
            </div>
          )}
          {formData.paymentMethod === 'cod' && (
            <p className="mt-2 text-gray-600">
              You&apos;ll pay with cash when your order arrives
            </p>
          )}
        </div>
      </div>

      {/* Order Total Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-4">Order Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-start">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="mt-1 mr-3"
          />
          <label htmlFor="agreeToTerms" className="text-sm">
            I agree to the <a href="/terms" className="text-teal-600 hover:underline">Terms and Conditions</a> and 
            acknowledge that I have read the <a href="/privacy" className="text-teal-600 hover:underline">Privacy Policy</a>.
            I understand that my personal data will be processed in accordance with the Privacy Policy.
          </label>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        <Button 
          text="Back" 
          onClick={prevStep} 
          color="gray" 
          className="px-8"
        />
        <Button 
          text="Place Order" 
          href="/order-confirmed/123" 
          color="teal" 
          disabled={!formData.agreeToTerms}
          className="px-8"
        />
      </div>
    </div>
  );
}