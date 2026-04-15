import type { InputProps } from "../../types/types";

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <p className="w-full flex flex-col gap-1">
      <label className="font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        className={` w-full border border-black p-2 rounded-sm`}
        id={id}
        name={id}
        {...props}
      />
    </p>
  );
}
