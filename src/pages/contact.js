import { GoLocation } from "react-icons/go";
import { BsTelephone, BsPrinter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiPointer } from "react-icons/bi";
import { useState } from "react";

const Contact = () => {
	const initialvalues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  };
  const [input, setInput] = useState(initialvalues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="font-sans w-full">
      {/* contact us hero */}
      <div className = 'w-full h-[200px] bg-hero bg-cover bg-center'>
			<div className = 'w-full h-full bg-[#0e074db2]'>
				<div className = 'lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px] h-full mx-auto flex justify-between items-center'>
					<div className = 'mx-auto'>
						<h1 className = 'font-popSBold text-white text-[46px]'>Contact Us</h1>
					</div>
				</div>
			</div>
		</div>
      {/* contact infos and form container */}
      <div className="w-full p-5 flex justify-center gap-10 2xl:w-[90%] 2xl:m-auto">
        {/* contact infos+title container */}
        <div className="flex flex-col w-full gap-5">
          {/* contact infos container */}
          <div className="font-sans flex flex-col gap-4 p-1 justify-center">
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex items-center gap-2">
              <GoLocation className="text-base text-adala-blue-accent-500" />
              address
            </div>
            <div className="flex items-center gap-2">
              <BsTelephone className="text-base text-adala-blue-accent-500" />
              tel
            </div>
            <div className="flex items-center gap-2">
              <BsPrinter className="text-base text-adala-blue-accent-500" />
              fax
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineMail className="text-base text-adala-blue-accent-500" />
              email
            </div>
            <div className="flex items-center gap-2">
              <BiPointer className="text-base text-adala-blue-accent-500" />
              website
            </div>
          </div>
        </div>
        <div className="w-full">
          <form className="flex flex-col">
            <div className="flex justify-between mb-5">
              <div className="flex flex-col">
                <label>First Name:</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="firstname"
                  value={input.firstname}
                  className="w-[300px] h-[40px] my-1 border mr-2 p-2"
                />
              </div>
              <div className="flex flex-col">
                <label>Last Name:</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="lastname"
                  value={input.lastname}
                  className="w-[300px] h-[40px] my-1 border p-2"
                />
              </div>
            </div>
            <div className="flex justify-between mb-5">
              <div className="flex flex-col">
                <label>E-mail:</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="email"
                  value={input.email}
                  className="w-[300px] h-[40px] my-1 border p-2"
                />
              </div>
              <div className="flex flex-col">
                <label>Phone:</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="phone"
                  value={input.phone}
                  className="w-[300px] h-[40px] my-1 border p-2"
                />
              </div>
            </div>
            <label>Message:</label>
            <input
              onChange={handleChange}
              type="text"
              name="message"
              value={input.message}
              className="h-[100px] my-1 border p-2"
            />
            <button
              type="submit"
              className="mt-5 w-[150px] h-[40px] text-sm text-white bg-adala-darkBlue-accent-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
			<div className = 'mb-20 flex justify-center'>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.3411072347153!2d-7.666748484484089!3d33.596452949057856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d30593dcebb7%3A0xc50d24c98df391b8!2sKing%20Abdul-Aziz%20Al%20Saoud%20Foundation%20for%20Islamic%20Studies%20and%20Human%20Sciences!5e0!3m2!1sen!2sma!4v1653384216476!5m2!1sen!2sma"
					width="1200"
					height="400"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade">
				</iframe>
    	</div>
    </div>
  );
}

export default Contact;