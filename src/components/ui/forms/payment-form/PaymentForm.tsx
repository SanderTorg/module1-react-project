import { useState } from "react";

function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("Vipps"); // Default payment

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  // In your JSX
  return (
    <div>
      <p>Velg betalingsmåte:</p>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="Vipps"
          checked={paymentMethod === "Vipps"}
          onChange={handlePaymentChange}
        />{" "}
        Vipps
      </label>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="Kort"
          checked={paymentMethod === "Kort"}
          onChange={handlePaymentChange}
        />{" "}
        Bankkort
      </label>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="Faktura"
          checked={paymentMethod === "Faktura"}
          onChange={handlePaymentChange}
        />{" "}
        Faktura
      </label>
    </div>
  );
}

export default PaymentForm;
