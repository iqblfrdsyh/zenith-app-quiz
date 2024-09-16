import { Image } from "@nextui-org/react";

const InputField = ({ type, name, placeholder, image }) => (
  <div className="relative z-0 w-full group transition-transform transform duration-500">
    <Image
      src={`/images/sign/${image}`}
      alt={name}
      radius="none"
      width={20}
      height={20}
      className="absolute left-4 top-3"
    />
    <label htmlFor={name} className="sr-only">
      {placeholder}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      className="block pt-3 pb-2.5 pl-12 pr-4 w-full bg-white/90 text-gray-900 outline-teal-500 rounded-lg font-semibold h-11"
      placeholder={placeholder}
    />
  </div>
);
    
export default InputField;
