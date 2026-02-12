import SimpleNameForm from "./name-form/SimpleNameForm";
import PaymentForm from "./payment-form/PaymentForm";
import DugnadRegistrationForm from "./registration/RegistrationForm";

function FormPage() {
  return (
    <>
      <h1>Form Page</h1>
      <SimpleNameForm></SimpleNameForm>
      <DugnadRegistrationForm></DugnadRegistrationForm>
      <PaymentForm></PaymentForm>
    </>
  );
}

export default FormPage;
