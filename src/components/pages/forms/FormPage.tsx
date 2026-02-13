import SimpleNameForm from "../../ui/forms/name-form/SimpleNameForm";
import DugnadRegistrationForm from "../../ui/forms/registration/RegistrationForm";
import PaymentForm from "../../ui/forms/payment-form/PaymentForm";

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
