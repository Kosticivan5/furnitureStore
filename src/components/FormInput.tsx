import { FormInputType } from "./types";

const FormInput = ({ label, inputName, type, defaultValue }: FormInputType) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        name={inputName}
        type={type}
        defaultValue={defaultValue}
        autoComplete="off"
        className="input input-bordered"
      />
    </label>
  );
};
export default FormInput;
