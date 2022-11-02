import React, { useState } from "react";
import { Box } from "@mui/system";
import Link from "next/link";
import Form from "./Form";
import FormTwo from "./FormTwo";

const CorridorStore = () => {
  const [form,setForm] = useState('no form')
  switch(form){
    case 'form1':
        return(<Form />)

        case 'form2':
          return(<FormTwo />)

 
}
    return ( 
        <Box className={"active-tv-font"} sx={styles.container} style={{fontSize:'8px',}}>
            <Box style={{color:'white'}} sx={styles.contentBox}>
            <h1 style={{fontSize:'20px'}}>Contact Us</h1>
                 <p style={{fontSize:'8px'}}>Please check out our FAQ pages to see if your answer is there first, if not use one of the contact methods below.</p>
                 <Link href='/'>
                 <p style={{fontSize:'8px',color:'yellow'}}>Check our FAQ for your issue.</p>
                 </Link>
                 <br/>
                 <p style={{fontSize:'8px'}}>Please select the appropriate service you wish to contact:</p>
                 
                 <Box style={{fontSize:'8px'}}>
                 <input onClick={() => setForm('form1')} style={{margin:"10px 0 0 0",}} type="radio" id="html" name="fav_language" value="HTML"></input> Website Feedback
                 <br/>
                 <br/>
                 <input onClick={() => setForm(form)} style={{margin:"10px 0 0 0",}} type="radio" id="html" name="fav_language" value="HTML"></input> Corridor Digital Store
                 <br/>
                 <br/>
                 <input onClick={() => setForm('form1')} style={{margin:"10px 0 0 0",}} type="radio" id="html" name="fav_language" value="HTML"></input> Business Enquiries
                 <br/>
                 <br/>
                 <input onClick={() => setForm('form2')}  style={{margin:"10px 0 0 0",}} type="radio" id="html" name="fav_language" value="HTML"></input> Copyright Infringement
                  
                 </Box>
                 <Box style={{margin:'20px 0 0 0'}}>
            Our store purchases are handled by a third party, Merchline, for order support please contact <p style={{fontSize:'8px',color:'yellow'}}><Link className="link"  href="/"> support@merchline.com</Link></p>
                 </Box>
              </Box>
        </Box>
     );
}
 
export default CorridorStore;

const styles = {
    container: {
      minHeight: "calc(100vh - 70px)",
    //   background: "url('active-tv-login-test1.png')",
      // backgroundSize:'cover',
      display: "flex",
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
      padding:'30px 0'
    },
    contentBox: {
      width: "700px",
      background: "black",
      opacity: 0.99,
      height: "500px",
      padding: "30px 90px",
      flexDirection: "column",
      padding: "100px 90px",
    //   color:"white",
    },
  
  };