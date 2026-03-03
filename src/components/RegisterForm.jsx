import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [captcha, setCaptcha] = useState("");
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captcha) {
      toast.error("Please complete the captcha");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:3000/auth/register",
        {
          name: name,
          email: email,
          mobile:mobile,
          password: passwordRef.current.value,
          role: "farmer",
          captcha: captcha
        }
      );
      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="bg-[url('https://i.pinimg.com/736x/26/c9/9e/26c99e18e76f7a80ab39d08a96500515.jpg')]
          bg-cover bg-center bg-no-repeat
          rounded-xl shadow-xl
          w-[380px] h-[600px] p-6 flex justify-center"
        >
          <form className="flex flex-col bg-white/40 w-full h-full rounded-xl p-6">
            <h1 className="font-bold mb-6 mt-6 text-2xl text-center">
              Registration
            </h1>

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border shadow-md p-3 mx-3 mb-4 rounded-md bg-white"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border shadow-md p-3 mx-3 mb-4 rounded-md bg-white"
              required
            />
             <input
  type="text"
  placeholder="Mobile Number"
  value={mobile}
  onChange={(e) => setMobile(e.target.value)}
  className="border shadow-md p-3 mx-3 mb-4 rounded-md bg-white"
  required
/>

            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              className="border shadow-md p-3 mx-3 mb-6 rounded-md bg-white"
              required
            />
             
             
            <div className="flex justify-center mb-4">
              <ReCAPTCHA
                sitekey={siteKey}
                onChange={setCaptcha}
              />
            </div>
            <input
              type="submit"
              value="Register"
              onClick={handleSubmit}
              className="bg-white text-black p-3 rounded-md w-[140px] mx-auto cursor-pointer hover:bg-green-600"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;