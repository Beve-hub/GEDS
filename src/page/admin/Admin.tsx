import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {}

const Admin: React.FC<Props> = () => {
  const navigate = useNavigate(); 

  const [senderInfo, setSenderInfo] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const [receiverInfo, setReceiverInfo] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const [packageInfo, setPackageInfo] = useState({
    origin: '',
    destination: '',
    quantity: '',
    weight: '',
    fragile: false,
    amount: '',
  });

  const handleSenderInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSenderInfo((prevSenderInfo) => ({
      ...prevSenderInfo,
      [name]: value,
    }));
  };

  const handleReceiverInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReceiverInfo((prevReceiverInfo) => ({
      ...prevReceiverInfo,
      [name]: value,
    }));
  };

  const handlePackageInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setPackageInfo((prevPackageInfo) => ({
      ...prevPackageInfo,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
     localStorage.setItem('senderInfo', JSON.stringify(senderInfo));
     localStorage.setItem('receiverInfo', JSON.stringify(receiverInfo));
     localStorage.setItem('packageInfo', JSON.stringify(packageInfo));
 
     setSenderInfo({ name: '', address: '', phone: '' });
     setReceiverInfo({ name: '', address: '', phone: '', email: '' });
     setPackageInfo({ origin: '', destination: '', quantity: '', weight: '', fragile: false, amount: '' });

     navigate('/Receipt');
  };

  return (
    <section className="relative h-screen w-screen grid items-center justify-center">
      <div className="grid justify-center p-6 mt-[7rem] rounded-md">
        <div className="">
          <p className="font-bold px-4 text-4xl text-[--primary-color]">Admin</p>
          <p className="max-w-[24rem] p-4">Welcome fill out the necessary information</p>
          <form onSubmit={handleSubmit}>
            <div className="max-w-[50rem] gap-4 flex justify-start items-center md:grid-cols-2 ">
              <div className="grid gap-3 mt-4">
                <div>
                  <p className="font-bold text-lg py-2">Sender Info</p>

                  <div className="grid">
                    <label className="font-medium py-2">Sender Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      value={senderInfo.name}
                      onChange={handleSenderInfoChange}
                      className="h-full bg-transparent border-2 border-[--primary-color] py-2 pl-2 pr-[7rem] text-gray-500 sm:text-sm"
                    />
                  </div>
                    <div className='grid gap-2 items-center md:grid-cols-2  '>
                    <div className="grid">
                    <label className="font-medium py-2">Sender Address *</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter Address"
                      value={senderInfo.address}
                      onChange={handleSenderInfoChange}
                      className="h-full bg-transparent border-2 border-[--primary-color] py-2 pl-2 text-gray-500 sm:text-sm"
                    />
                  </div>

                  <div className="grid">
                    <label className="font-medium py-2">Phone No *</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter phone no"
                      value={senderInfo.phone}
                      onChange={handleSenderInfoChange}
                      className="h-full bg-transparent border-2 border-[--primary-color] py-2 pl-2 text-gray-500 sm:text-sm"
                    />
                  </div>  
                    </div>                  
                </div>

               
                <div>
                  <p className="font-bold text-lg py-2">Receiver Info</p>
                  <div className='grid gap-2 items-center md:grid-cols-2  '>
                  <div className="grid">
                    <label className="font-medium py-2">Receiver Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      value={receiverInfo.name}
                      onChange={handleReceiverInfoChange}
                      className="h-full bg-transparent border-2 border-[--primary-color] py-2 pl-2 text-gray-500 sm:text-sm"
                    />
                  </div>
                  <div className="grid">
                    <label className="font-medium py-2">Phone No *</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter phone no"
                      value={receiverInfo.phone}
                      onChange={handleReceiverInfoChange}
                      className="h-full bg-transparent border-2 border-[--primary-color] py-2 pl-2 text-gray-500 sm:text-sm"
                    />
                  </div>
                  </div>                

                  
                  <div className='grid gap-2 items-center md:grid-cols-2  '>

                  <div className="grid">
                    <label className="font-medium py-2">Receiver Address *</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter Address"
                      value={receiverInfo.address}
                      onChange={handleReceiverInfoChange}
                      className="h-full bg-transparent border-2 border-[--primary-color] py-2 pl-2 text-gray-500 sm:text-sm"
                    />
                  </div>

                  <div className="grid">
                    <label className="font-medium py-2">Email *</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter email"
                      value={receiverInfo.email}
                      onChange={handleReceiverInfoChange}
                      className="h-full bg-transparent border-2 border-[--primary-color] py-2 pl-2 text-gray-500 sm:text-sm"
                    />
                  </div>
                  </div>
                 

                 
                </div>

               
                <div>
                  <p className="font-bold text-lg py-2">Package Info</p>

                  <div className='grid gap-2 items-center md:grid-cols-2  '>
                  <div className="grid">
                    <label className="font-medium py-2">Origin *</label>
                    <input
                      type="text"
                      name="origin"
                      placeholder="Enter origin"
                      value={packageInfo.origin}
                      onChange={handlePackageInfoChange}
                      className="h-full bg-transparent border-2 border-[--primary-color] py-2 pl-2 text-gray-500 sm:text-sm"
                    />
                  </div>

                  <div className="grid">
                    <label className="font-medium py-2">Destination *</label>
                    <input
                      type="text"
                      name="destination"
                      placeholder="Enter destination"
                      value={packageInfo.destination}
                      onChange={handlePackageInfoChange}
                      className="h-full bg-transparent border-2 border-[--primary-color] py-2 pl-2 text-gray-500 sm:text-sm"
                    />
                  </div>

                  <div className="grid">
                    <label className="font-medium py-2">Quantity *</label>
                    <input
                      type="number"
                      name="quantity"
                      placeholder="Enter quantity"
                      value={packageInfo.quantity}
                      onChange={handlePackageInfoChange}
                      className="h-full bg-transparent border-2 border-[--primary-color] py-2 pl-2 text-gray-500 sm:text-sm"
                    />
                  </div>

                  <div className="grid">
                    <label className="font-medium py-2">Weight *</label>
                    <input
                      type="number"
                      name="weight"
                      placeholder="/Kg"
                      value={packageInfo.weight}
                      onChange={handlePackageInfoChange}
                      className="h-full bg-transparent border-2 border-[--primary-color] py-2 pl-2 text-gray-500 sm:text-sm"
                    />
                  </div>
                  </div>
                  

                  <div className="grid items-center mt-4">
                    <p className="font-bold">Is package fragile ?</p>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="fragile"
                        checked={packageInfo.fragile}
                        onChange={handlePackageInfoChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="font-medium py-2">Yes</label>
                    </div>

                    <div className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        name="fragile"
                        checked={!packageInfo.fragile}
                        onChange={handlePackageInfoChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="font-medium py-2">No</label>
                    </div>
                  </div>

                  <div className="grid">
                    <label className="font-medium py-2">Amount *</label>
                    <input
                      type="number"
                      name="amount"
                      placeholder=""
                      value={packageInfo.amount}
                      onChange={handlePackageInfoChange}
                      className="h-full bg-transparent border-2 border-[--primary-color] py-2 pl-2 text-gray-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>              
            </div>
            <div className="mt-6">
                <button type="submit" className="w-[20rem] text-[--bg-color] bg-[--primary-color] py-3">
                  Submit
                </button>
              </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Admin;
