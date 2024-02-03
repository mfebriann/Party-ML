const Input = ({
  label,
  htmlFor,
  type = "text",
  placeholder,
  isRequired = true,
  isUsername,
  value,
  onChange,
  isHidden,
}) => {
  return (
    <div className={`${isHidden ? "absolute -z-50 opacity-0" : ""}`}>
      <label htmlFor={htmlFor} className="block w-full text-gray-500">
        {label}
      </label>
      <div className="relative flex items-center">
        {isUsername && <span className="absolute left-3 mt-3 text-xl">@</span>}
        <input
          className="mt-3 w-full rounded-md border border-sky-400 py-2 pl-9 pr-2 text-slate-800 outline-none"
          type={type}
          required={isRequired}
          placeholder={placeholder}
          id={htmlFor}
          name={htmlFor}
          value={value}
          onChange={onChange}
          readOnly={isHidden}
        />
      </div>
    </div>
  );
};

export default Input;
