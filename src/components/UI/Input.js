


'use client';

export default function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder = '',
  className = '',
  ...props
}) {
  return (
    <div className={className}>
      {label && (
        <label className="block mb-1 text-sm font-medium">
          {label}{required && '*'}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
        {...props}
      />
    </div>
  );
}