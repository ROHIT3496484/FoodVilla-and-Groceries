import { useState } from "react";

const Payment = ({ amount, onClose, onSuccess }) => {
  const [step, setStep] = useState("form"); // form | processing | success
  const [form, setForm] = useState({
    name: "",
    card: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValid =
    form.name.trim() &&
    form.card.replace(/\s/g, "").length >= 12 &&
    form.expiry.trim() &&
    form.cvv.length >= 3;

  const handlePay = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setStep("processing");
    // Dummy payment processing
    setTimeout(() => setStep("success"), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
        {step === "form" && (
          <form onSubmit={handlePay}>
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-xl font-bold text-gray-800">Payment</h2>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 hover:text-gray-700 text-2xl leading-none"
                aria-label="Close payment"
              >
                ×
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Amount payable:{" "}
              <span className="font-bold text-orange-600">₹{amount}</span>
            </p>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name on Card
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Rohit Rana"
              className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              name="card"
              value={form.card}
              onChange={handleChange}
              placeholder="4242 4242 4242 4242"
              inputMode="numeric"
              className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <div className="flex gap-3 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry
                </label>
                <input
                  name="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div className="w-24">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  name="cvv"
                  value={form.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  inputMode="numeric"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className="w-full bg-orange-600 hover:bg-orange-500 disabled:bg-gray-300 text-white font-semibold py-3 rounded-lg shadow"
            >
              Pay ₹{amount}
            </button>
            <p className="text-[11px] text-center text-gray-400 mt-3">
              This is a demo payment. No real transaction is made.
            </p>
          </form>
        )}

        {step === "processing" && (
          <div className="py-10 text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-orange-200 border-t-orange-600" />
            <p className="font-medium text-gray-700">Processing payment…</p>
          </div>
        )}

        {step === "success" && (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
              ✓
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Payment Successful!
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              ₹{amount} paid. Your order is on the way.
            </p>
            <button
              onClick={onSuccess}
              className="mt-5 w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
