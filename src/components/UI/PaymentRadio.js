

'use client';

export default function PaymentRadio({
  id,
  name,
  value,
  checked,
  onChange,
  label,
  icon,
  description
}) {
  return (
    <div className="flex items-start mb-4 p-4 border rounded-lg hover:border-teal-500 transition-colors">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mt-1 mr-3"
      />
      <div className="flex-1">
        <div className="flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          <label htmlFor={id} className="font-medium">{label}</label>
        </div>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}

