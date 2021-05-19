import React, {   useRef,useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import ReactToPrint from 'react-to-print';
import orederSummary from './assets/orederSummary.png'
function App() {
  const componentRef = useRef();
  const [data, setData] = useState()

  useEffect(() => {
    const call = async () => {
      let response = await axios.post('http://Network-LB-19c1c2f50ef59755.elb.us-east-1.amazonaws.com/api/htmlgenerator/byname/', {
        "name": "RENEWAL_SMART",
         "varJson" : {
          "empty": "empty",
          "userName": "Csr Agent",
          "fullName": "Ameer Amin",
          "address": "Nazaret, Eilat 25",
          "accountBalance": "PHP 234.556",
          "paymentNow": "PHP 1000",
          "product": "Iphone 12 Black 128 Giga",
          "storeName": "Super Phones",
          "agentName": "Philipe Lopez to",
          "phone": "0542291101",
          "date": "20/05/2021",
          "totalMonthlyRecurrent" : "PHP 1233.00",
          "tax": "PHP 235",
          "email": "ramisd@amdocs.com",
          "accountId": "12234223323",
          "accountType": "postpaid",
          "currency": "PHP",
          "language": "English",
          "rpm": "Cash",
          "taxExemption": "No tax",
          "products": [
            {
              "label": "Iphone 12 Black 128 Giga",
              "price": "PHP 1000"
            },
            {
              "label": "Iphone 12 Gold 256 Giga",
              "price": "PHP 1800"
            }
          ],
          "sellsInfo": {
            "header": [
              {
                "title": "Product"
              },
              {
                "title": "Date"
              },
              {
                "title": "Price"
              }
            ],
            "body": [
              {
                "product": "Ipone",
                "date": "12/6/2020",
                "price": "PHP 2000"
              }
            ]
          }
        }
      
      }) 
      setData(response?.data)
    }
    call()
  }, [])
 
  var sectionStyle = {
    width: "100%",
    height: "130vh",
    backgroundImage: "url(/static/media/orederSummary.6c201a10.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  
  const PrintBtn = () => (
    <div style={{
      position: "absolute",
      top: "94.2vh",
      left: "35.5vw",
    }}>
            <ReactToPrint
                trigger={() => <p style={{ color: '#5de2f7', cursor: "pointer", fontSize: "8px", }}>Print</p>}
                content={() => componentRef.current}
            />
            <div style={{ display: "none" }}>
                <div  ref={componentRef}  dangerouslySetInnerHTML={{ __html: data }} />
            </div>
        </div>
  )
  return (
    <div className="App" style={sectionStyle}>
      <PrintBtn />
    </div>
  );
}

export default App;
