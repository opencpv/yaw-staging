const PdfTemplate = ({
  variant,
  data,
  customer,
}: {
  variant: string;
  data: Invoice;
  customer: any;
}) => {
  return `<html>
  <style>
    .main{
      width:full;
      padding: 16px;
    }
    h1,h2,h3,h4,h5,p{
      margin: 0px;
    }
    .header{
      width: full;
      padding: 16px;
      background: #11605E;
      border-radius: 8px;
      color: #fff;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .invoiceHeader{
      text-transform: uppercase;
     
      
    }
  </style>
  <body class="main">
     <div class="header">
       <div class="invoiceHeader">
         <h2 >Invoice</h2>
         <p>#1002</p>
       </div>
       <img src="https://dev.staging.rentrightgh.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.73b03ab3.png&w=96&q=100" width="50px" height="41px"/>
     </div>
  </body>
</html>`;
};

export default PdfTemplate;
