import React, { useRef } from 'react';
import logo from '../../assets/image/logo.png'
import img from '../../assets/image/qrcode.png'
import img1 from '../../assets/image/stamp.png'
import img2 from '../../assets/image/sign.png'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';




const Receipt: React.FC = () => {
    const senderInfo = JSON.parse(localStorage.getItem('senderInfo') || '{}');
    const receiverInfo = JSON.parse(localStorage.getItem('receiverInfo') || '{}');
    const packageInfo = JSON.parse(localStorage.getItem('packageInfo') || '{}');

    const receiptRef = useRef<HTMLDivElement>(null);

    const generatePDF = async () => {
        if (!receiptRef.current) return;

        try {
            const canvas = await html2canvas(receiptRef.current, { scrollY: -window.scrollY });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'px', 'a4');

            const imgWidth = pdf.internal.pageSize.getWidth();
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            const pageHeight = pdf.internal.pageSize.getHeight();

            while (heightLeft >= 0) {
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
                position -= pageHeight; // Adjust position for the next page
                if (heightLeft > 0) {
                    pdf.addPage();
                }
            }

            pdf.save('receipt.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <div className="relative h-screen w-screen grid items-center justify-center mt-10 mx-10">
           <button onClick={generatePDF} className='text-lg py-4'>Save as PDF</button>
            <div ref={receiptRef} className='mx-10'>
                <header>
                    <div className='flex items-center justify-around gap-6'>
                    <div>
                        <img src={logo} alt='' className='w-[10rem]'/>
                    </div>
                    <div>
                        <p>Head office: </p>
                       <div>
                        <p>Email:</p>
                        <p>shipment@grandexpressdeliveryservice.com</p>
                       </div>
                       <div>
                        <p>website:</p>
                        <p>http://grandexpressdeliveryservice.com</p>
                       </div>
                    </div>
                    <div>
                        <img src={img} alt='' className='w-[5rem]'/>
                    </div>
                    </div>
                    <p className='font-bold text-center text- my-6'>Tacking: TR2346567898</p>
                </header>

                <div>
                 <p className='bg-[--primary-color] text-[--bg-color] p-1 text-md'>FROM (SENDER)</p>
                 <div className='flex items-start justify-between '>
                    <div>

                    <div>
                        <div className='flex items-center gap-12 bg-[#ededed] my-1 px-2'>
                        <p className='font-bold text-lg'>Sender:</p>
                        <p className='font-bold text-lg'>{senderInfo.name}</p>
                        </div>    

                        <div className='flex items-center gap-10 my-1 px-2'>
                        <p className='font-bold text-lg text-start'>Address:</p>
                        <p className='text-lg text-start'> {senderInfo.address}</p>
                        </div>    

                        <div className='flex items-center gap-6 bg-[#ededed] my-1 px-2'>
                        <p className='font-bold text-lg'>Phone No:</p>
                        <p className='text-lg text-start'>{senderInfo.phone}</p>
                        </div>                        
                    </div>

                    <div>
                    <p className='bg-[--primary-color] mt-4 text-[--bg-color] p-1'>TO (RECEIVE)</p>
                        <div className='flex items-center gap-9 bg-[#ededed] my-1 px-2'>
                        <p className='font-bold text-lg '>Receiver:</p>
                        <p className='font-bold text-lg '>{receiverInfo.name}</p>
                        </div>    

                        <div className='flex items-center gap-10 my-1 px-2'>
                        <p className='font-bold text-lg '>Address:</p>
                        <p className='text-lg '>{receiverInfo.address}</p>
                        </div>    

                        <div className='flex items-center gap-[4rem] bg-[#ededed] my-1 px-2'>
                        <p className='font-bold text-lg '>Email:</p>
                        <p className=' text-lg '>{receiverInfo.email}</p>
                        </div> 

                        <div className='flex items-center gap-4 my-1 px-2'>
                        <p className='font-bold text-lg  '>Destination:</p>
                        <p className='text-lg '>{packageInfo.destination}</p>
                        </div> 

                        <div className='flex items-center gap-6 bg-[#ededed] my-1 px-2'>
                        <p className='font-bold text-lg '>Phone No:</p>
                        <p className='text-lg '>{receiverInfo.phone}</p>
                        </div>                        
                    </div>

                    </div>

                   <div>    

                    <div>
                    <div className='flex items-center gap-9 my-1 px-2'>
                        <p className='font-bold text-lg '>ORIGIN</p>
                        <p className='font-bold text-lg '>DESTINATION</p>
                        </div>    

                        <div className='flex items-center gap-9 bg-[#ededed] my-1 px-2'>
                        <p className='text-lg '>{packageInfo.origin}</p>
                        <p className=' text-lg '>{packageInfo.destination}</p>
                        </div>                                                  
                    </div>

                    <div>
                    <p className='bg-[--primary-color] mt-4 text-[--bg-color] p-1'>SIZE AND WEIGHT</p>
                       <div className='flex items-center gap-9 bg-[#ededed] my-1 px-2'>
                        <p className='font-bold text-lg '>No of Pieces</p>
                        <p className='font-bold text-lg'>Weight</p>
                        </div>    

                        <div className='flex items-center gap-[8rem] my-1 px-2'>
                        <p className='text-lg '>{packageInfo.quantity}</p>
                        <p className='text-lg '>{packageInfo.weight} Kg</p>
                        </div>                                                  
                    </div>

                    <div>
                    <p className='font-bold text-lg border-b-2 mt-4  p-1'>Shipment</p>
                    <p className='font-bold text-lg'>{packageInfo.amount}</p>  

                        <div className='flex items-center bg-[--primary-color] gap-10 my-4 px-2 ' >
                        <p className='text-lg text-[--bg-color] py-1'>Total Charges :</p>
                        <p className='text-lg text-[--bg-color]  '>{packageInfo.amount}</p>
                        </div>                                                  
                    </div>


                    </div>


                 </div>
                 <footer>
                 <div className='mt-6'>
                   <img src={img1} alt='' className="absolute left-[60rem] w-[15rem]  "/> 
                 <p className='w-[50rem]'> Any shortage or damage must be notified within 72hours of goods. Complaints can only be accepted if 
                 made in writing 30days of receipt of goods. No goods may be returned without prior authorization from Grand Express
                  Delivery Services.  </p> 
                 </div>
                 <img src={img2} alt='' className=" w-[20rem]  "/> 
                 </footer>
                </div>
                
            </div>
        </div>
    )
}

export default Receipt
