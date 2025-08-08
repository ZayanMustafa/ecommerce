'use client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function ShippingForm({ formData, handleChange, nextStep }) {
  return (
    <div>
      <h2 className="text-2xl font-heading mb-6">Shipping Information</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <Input
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <Input
          label="Apartment, suite, etc. (optional)"
          name="apartment"
          value={formData.apartment}
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <Input
            label="State/Province"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <Input
            label="ZIP/Postal Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Country*</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            required
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button 
          text="Continue to Payment" 
          onClick={nextStep} 
          color="teal" 
        />
      </div>
    </div>
  );
}