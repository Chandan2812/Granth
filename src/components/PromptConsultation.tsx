import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const PromptConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    countryCode: "+91", // default country code (UAE)
    email: "",
  });
  const [step, setStep] = useState(1); // Step 1: user inputs, Step 2: enter OTP
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Phone validation:
  // Allow only digits, length between 7 to 15 digits (excluding country code)
  // You can also customize per country code if needed.
  const validatePhone = (phone: string) => /^[0-9]{7,15}$/.test(phone);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    const { name, email, phone, countryCode } = formData;

    if (!name || !phone || !email) {
      setMessage("❌ All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("❌ Invalid email format.");
      return;
    }

    if (!validatePhone(phone)) {
      setMessage(
        "❌ Phone number must be digits only and 7 to 15 characters long."
      );
      return;
    }

    setLoading(true);
    try {
      // Send the combined phone with country code to backend
      const res = await fetch(
        "https://granth-backend.onrender.com/api/send-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, phone: countryCode + phone }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ OTP sent to your email.");
        setStep(2);
      } else {
        setMessage("❌ " + (data.error || "Failed to send OTP."));
      }
    } catch (err) {
      setMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(
        "https://granth-backend.onrender.com/api/verify-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            phone: formData.countryCode + formData.phone,
            otp,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        // Store in sessionStorage
        sessionStorage.setItem("formData", JSON.stringify(formData));
        setMessage("✅ OTP verified. Data submitted successfully.");
        setFormData({ name: "", phone: "", email: "", countryCode: "+971" });
        setOtp("");
        setStep(1);
      } else {
        setMessage("❌ " + (data.error || "OTP verification failed."));
      }
    } catch (err) {
      setMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4 py-10 flex justify-center bg-white dark:bg-black text-black dark:text-white font-raleway transition-colors duration-300">
      <div className="w-full md:w-[83%] bg-gradient-to-r from-[var(--primary-color)] via-gray-900 to-[var(--primary-color)] p-[1px] bg-center">
        <div className="bg-white dark:bg-black px-8 py-10 sm:px-16 sm:py-14 transition-colors duration-300">
          <h2 className="text-center text-xl md:text-3xl tracking-wide font-light mb-2">
            PROMPTLY AT YOUR SERVICE
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-10">
            Fill form below and our agent will contact you shortly
          </p>

          <form
            onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6"
          >
            {step === 1 && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-b border-gray-400 dark:border-gray-500 outline-none px-2 py-2"
                />

                <div className="flex gap-2 col-span-1 md:col-span-1">
                  <select
                    value={formData.countryCode}
                    onChange={(e) =>
                      setFormData({ ...formData, countryCode: e.target.value })
                    }
                    className="bg-white dark:bg-black text-black dark:text-white"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+39">🇮🇹 +39</option>
                    <option value="+86">🇨🇳 +86</option>
                    <option value="+82">🇰🇷 +82</option>
                    <option value="+7">🇷🇺 +7</option>
                    <option value="+34">🇪🇸 +34</option>
                    <option value="+351">🇵🇹 +351</option>
                    <option value="+90">🇹🇷 +90</option>
                    <option value="+62">🇮🇩 +62</option>
                    <option value="+63">🇵🇭 +63</option>
                    <option value="+92">🇵🇰 +92</option>
                    <option value="+880">🇧🇩 +880</option>
                    <option value="+212">🇲🇦 +212</option>
                    <option value="+20">🇪🇬 +20</option>
                    <option value="+27">🇿🇦 +27</option>
                    <option value="+254">🇰🇪 +254</option>
                    <option value="+55">🇧🇷 +55</option>
                    <option value="+52">🇲🇽 +52</option>
                    <option value="+48">🇵🇱 +48</option>
                    <option value="+31">🇳🇱 +31</option>
                    <option value="+46">🇸🇪 +46</option>
                    <option value="+47">🇳🇴 +47</option>
                    <option value="+45">🇩🇰 +45</option>
                  </select>

                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="^[0-9]{7,15}$"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        setFormData({ ...formData, phone: value });
                      }
                    }}
                    required
                    className="flex-1 bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-b border-gray-400 dark:border-gray-500 outline-none px-2 py-2"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Your E-Mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-b border-gray-400 dark:border-gray-500 outline-none px-2 py-2"
                />
              </>
            )}

            {step === 2 && (
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="col-span-3 bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-b border-gray-400 dark:border-gray-500 outline-none px-2 py-2"
              />
            )}

            <button
              type="submit"
              disabled={loading}
              className="border border-[var(--primary-color)] bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] px-4 py-2 uppercase text-sm tracking-widest hover:opacity-80 text-black transition"
            >
              {loading
                ? "Please wait..."
                : step === 1
                ? "Send OTP"
                : "Verify OTP"}
            </button>
          </form>

          {message && (
            <p
              className={`text-center text-sm mb-4 ${
                message.startsWith("✅")
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-center text-md text-gray-600 dark:text-gray-400">
            Or contact us right now via{" "}
            <a
              href="https://wa.me/971521110795"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary-color)] inline-flex items-center gap-1 hover:underline"
            >
              <FaWhatsapp size={20} /> WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromptConsultation;
