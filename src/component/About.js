const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">About Us</h1>
      <p className="text-gray-600 leading-relaxed mb-6">
        Welcome to <span className="font-semibold">FoodVilla</span> — your
        one-stop destination for delicious food and fresh groceries delivered
        right to your doorstep. We bring together your favourite restaurants and
        everyday essentials in a single, easy-to-use platform built for speed,
        convenience, and a great experience.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-orange-600 mb-1">Food Delivery</h3>
          <p className="text-sm text-gray-600">
            Order from a wide range of restaurants and cuisines.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-orange-600 mb-1">Groceries</h3>
          <p className="text-sm text-gray-600">
            Fresh fruits, vegetables, dairy and daily staples.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-orange-600 mb-1">Fast &amp; Easy</h3>
          <p className="text-sm text-gray-600">
            Smooth ordering and quick, secure checkout.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Get in Touch</h2>
        <ul className="space-y-2 text-gray-700">
          <li>
            <span className="font-medium">Email: </span>
            <a
              href="mailto:rohitrana349@gmail.com"
              className="text-orange-600 hover:underline"
            >
              rohitrana349@gmail.com
            </a>
          </li>
          <li>
            <span className="font-medium">Phone: </span>
            <a
              href="tel:+918476802241"
              className="text-orange-600 hover:underline"
            >
              8476802241
            </a>
          </li>
        </ul>
        <p className="text-sm text-gray-500 mt-4">
          Built by <span className="font-semibold">Rohit Rana</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
