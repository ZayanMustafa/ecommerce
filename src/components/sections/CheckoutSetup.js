


'use client';

export default function CheckoutSteps({ currentStep = 1 }) {
  const steps = [
    { id: 1, name: 'Shipping' },
    { id: 2, name: 'Payment' },
    { id: 3, name: 'Confirmation' }
  ];

  return (
    <div className="mb-12">
      <div className="flex justify-between relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
        <div 
          className="absolute top-1/2 left-0 h-1 bg-teal-500 -z-10 transition-all duration-300"
          style={{ 
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` 
          }}
        ></div>
        
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                ${currentStep >= step.id 
                  ? 'bg-teal-500 border-teal-500 text-white' 
                  : 'bg-white border-gray-300 text-gray-500'
                }`}
            >
              {step.id}
            </div>
            <span 
              className={`mt-2 text-sm 
                ${currentStep >= step.id ? 'text-teal-600 font-medium' : 'text-gray-500'}
              `}
            >
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}