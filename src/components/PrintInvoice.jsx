import React, { useContext, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './invoice.css'

// const toWords = new ToWords({
//   localeCode: 'en-IN',
//   converterOptions: {
//     currency: true,
//     ignoreDecimal: false,
//     ignoreZeroCurrency: false,
//     doNotAddOnly: false,
//     currencyOptions: {
//       name: 'Rupee',
//       plural: 'Rupees',
//       symbol: '₹',
//       fractionalUnit: {
//         name: 'Paisa',
//         plural: 'Paise',
//         symbol: '',
//       },
//     },
//   },
// });

const PrintInvoice = ({ amount, remarks, onClose, invoiceDetails, rows }) => {
    const invoiceComponentRef = useRef();


    const handlePrint = useReactToPrint({
        content: () => invoiceComponentRef.current,
    });



    rows = [{
        itemName : 'demo',
        process : 'Darning',
        quantity : 10,
        rate : 100,
        darning : 100,
        remarks : 'demo',
        total : 1100
    }]
    const getTotalSum = () => {
        return 1000
    }
    const customer_name = "karan", phone_number = 9876543210, gst_type = 'B 2 B', gst_no = 'samplegstno';
    const invoiceId = 'RSP001', bookingDate = '2024-08-20', dueDate = '2024-08-21', selectedBranch = 'RSP'

    return (
        <div  className="printContainer">
            <div ref={invoiceComponentRef}>
                <div className="container">
                    <div className="header">
                        <h1>TRIPLEX DRY CLEANING</h1>
                        <h2 className="title">Invoice</h2>
                    </div> 
                    <div className="splitContainer">
                        <table className="leftColumn">
                            <p><strong>Bill To:</strong></p>
                            <p>{`Name : ${customer_name} `}</p>
                            <p>{`Contact No : ${phone_number}`}</p>
                            <p>{`Business Type : ${gst_type}`}</p>
                            {gst_type === 'B 2 B' ? <p>{`GST.NO : ${gst_no}`}</p> : null}
                        </table>
                        <div className="rightColumn">
                            <p><strong>Invoice Details:</strong></p>
                            <p>{`Invoice No : ${invoiceId} `}</p>
                            <p>{`Booking Date : ${bookingDate}`}</p>
                            <p>{`Due Date : ${dueDate}`}</p>
                            <p>{`Branch : ${selectedBranch}`}</p>
                        </div>
                    </div>
                    <div className="tableContainer">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="th">S.No</th>
                                    <th className="th">Item Name</th>
                                    <th className="th">Process</th>
                                    <th className="th">Qty</th>
                                    <th className="th">Price/Unit</th>
                                    <th className="th">Darning</th>
                                    <th className="th">Remarks</th>
                                    <th className="th">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows
                                    ? rows.map((row, index) => (
                                        <tr key={index}>
                                            <td className="td">{index + 1}</td>
                                            <td className="td">{row.itemName}</td>
                                            <td className="td">{row.process}</td>
                                            <td className="td">{row.quantity}</td>
                                            <td className="td">{row.rate}</td>
                                            <td className="td">{row.darning ? row.darning : 0}</td>
                                            <td className="td">{row.remarks}</td>
                                            <td className="td">{row.total}</td>
                                        </tr>
                                    ))
                                    : null}
                                <tr>
                                    <td className="td total" colSpan="7">
                                        Total
                                    </td>
                                    <td className="td total">
                                        {getTotalSum()}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="footer">
                        <div className="innerFooter">
                            <div className="footerLeft">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><b>Remarks : </b></td>
                                        <td>{`This is a sample remark`}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Amount in words : </b></td>
                                        <td>{`Thousand rupees only`}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                        <div className="footerRight">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><b>Sub Total:</b></td>
                                        <td>{`₹ ${amount}`}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Tax:</b></td>
                                        <td>{`₹ ${amount * (18 / 100)}`}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Amount Payable:</b></td>
                                        <td>{`₹ ${amount + amount * (18 / 100)}`}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <button className="button" onClick={handlePrint}>
                Print
            </button>
        </div>
    );
};

export default PrintInvoice;
