import { useNavigation } from "react-router-dom";

type SubmitBtnText = {
  text: string;
};

const SubmitBtn = ({ text }: SubmitBtnText) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block uppercase"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <span className="loading loading-dots loading-md">sending</span>
      ) : (
        text || "submit"
      )}
    </button>
  );
};
export default SubmitBtn;
