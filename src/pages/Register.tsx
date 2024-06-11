import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold capitalize">register</h4>
        <FormInput
          label="Username"
          inputName="username"
          type="text"
          defaultValue="Ivan Kostic"
        />
        <FormInput
          label="Email"
          inputName="email"
          type="email"
          defaultValue="test@test.com"
        />
        <FormInput
          label="Password"
          inputName="password"
          type="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>

        <p className="text-center">
          Already a member?
          <Link
            to={"/login"}
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
