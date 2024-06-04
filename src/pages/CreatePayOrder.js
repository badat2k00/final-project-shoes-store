// import React, { useState } from 'react';

// const CreatePayOrder = () => {
//     const [amount, setAmount] = useState('');
//     const [bankCode, setBankCode] = useState('');
//     const [language, setLanguage] = useState('vn');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         const formData = {
//             amount,
//             bankCode,
//             language,
//         };
//         console.log(formData);

        
//         fetch('/create_payment_url', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         }).then(response => {
//             // Handle the response
//         });
//     };

//     return (
//         <div className="container mx-auto mt-4">
//             <h3 className="text-2xl font-bold">{}</h3>
//             <div className="table-responsive">
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group mb-4">
//                         <label className="block mb-2">Số tiền</label>
//                         <input
//                             className="form-control border rounded w-full py-2 px-3"
//                             name="amount"
//                             placeholder="Số tiền"
//                             value={amount}
//                             onChange={(e) => setAmount(e.target.value)}
//                         />
//                     </div>

//                     <div className="form-group mb-4">
//                         <label className="block mb-2">Chọn Phương thức thanh toán:</label>
//                         <div className="controls mb-2">
//                             <label className="inline-flex items-center">
//                                 <input
//                                     type="radio"
//                                     name="bankCode"
//                                     value=""
//                                     checked={bankCode === ''}
//                                     onChange={(e) => setBankCode(e.target.value)}
//                                 />
//                                 <span className="ml-2">Cổng thanh toán VNPAYQR</span>
//                             </label>
//                         </div>
//                         <div className="controls mb-2">
//                             <label className="inline-flex items-center">
//                                 <input
//                                     type="radio"
//                                     name="bankCode"
                            
//                                     value="VNPAYQR"
//                                     checked={bankCode === 'VNPAYQR'}
//                                     onChange={(e) => setBankCode(e.target.value)}
//                                 />
//                                 <span className="ml-2">Thanh toán qua ứng dụng hỗ trợ VNPAYQR</span>
//                             </label>
//                         </div>
//                         <div className="controls mb-2">
//                             <label className="inline-flex items-center">
//                                 <input
//                                     type="radio"
//                                     name="bankCode"
                                   
//                                     value="VNBANK"
//                                     checked={bankCode === 'VNBANK'}
//                                     onChange={(e) => setBankCode(e.target.value)}
//                                 />
//                                 <span className="ml-2">Thanh toán qua ATM-Tài khoản ngân hàng nội địa</span>
//                             </label>
//                         </div>
//                         <div className="controls mb-2">
//                             <label className="inline-flex items-center">
//                                 <input
//                                     type="radio"
//                                     name="bankCode"
                                    
//                                     value="INTCARD"
//                                     checked={bankCode === 'INTCARD'}
//                                     onChange={(e) => setBankCode(e.target.value)}
//                                 />
//                                 <span className="ml-2">Thanh toán qua thẻ quốc tế</span>
//                             </label>
//                         </div>
//                     </div>

//                     <div className="form-group mb-4">
//                         <label className="block mb-2">Ngôn ngữ</label>
//                         <div className="controls mb-2">
//                             <label className="inline-flex items-center">
//                                 <input
//                                     type="radio"
//                                     name="language"
                              
//                                     value="vn"
//                                     checked={language === 'vn'}
//                                     onChange={(e) => setLanguage(e.target.value)}
//                                 />
//                                 <span className="ml-2">Tiếng việt</span>
//                             </label>
//                         </div>
//                         <div className="controls mb-2">
//                             <label className="inline-flex items-center">
//                                 <input
//                                     type="radio"
//                                     name="language"
                              
//                                     value="en"
//                                     checked={language === 'en'}
//                                     onChange={(e) => setLanguage(e.target.value)}
//                                 />
//                                 <span className="ml-2">Tiếng anh</span>
//                             </label>
//                         </div>
//                     </div>

//                     <button
//                         className="btn btn-default bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        
//                         type="submit"
//                     >
//                         Thanh toán
//                     </button>
//                 </form>
//             </div>
//             <p>&nbsp;</p>
//         </div>
//     );
// };

// export default CreatePayOrder;
import React from 'react'

const CreatePayOrder = () => {
  return (
    <div>Thanh toan thanh cong</div>
  )
}

export default CreatePayOrder