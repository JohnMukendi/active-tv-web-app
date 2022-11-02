import React, { useState } from "react";
import { Box } from "@mui/system";
import Link from "next/link";
import Form from "./Form";
import FormTwo from "./FormTwo";
import CorridorStore from "./CorridorStore";



const ContactUs = () => {
  const [form,setForm] = useState('no form')
  switch(form){
    case 'form1':
        return(<Form />)

    case 'form2':
            return(<FormTwo />)

    case 'form3':
        return(<CorridorStore />)
}



  
  
    return ( 
        <Box className={"active-tv-font"} sx={styles.container}>
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
                 <input onClick={() => setForm('form3')} style={{margin:"10px 0 0 0",}} type="radio" id="html" name="fav_language" value="HTML"></input> Corridor Digital Store
                 <br/>
                 <br/>
                 <input onClick={() => setForm('form1')} style={{margin:"10px 0 0 0",}} type="radio" id="html" name="fav_language" value="HTML"></input> Business Enquiries
                 <br/>
                 <br/>
                 <input onClick={() => setForm('form2')} style={{margin:"10px 0 0 0",}} type="radio" id="html" name="fav_language" value="HTML"></input> Copyright Infringement
                  
                 </Box>
                 {/* <button onClick={()=>setForm(false)}>hide</button> */}
          
                 
                 
            </Box>  
            
            {/* {
                    store? <CorridorStore/>: ""
                  } 
            {
              form? <Form />: ""
            }
            {
              formtwo? <FormTwo />: ""
            } */}
           

        </Box>
        
     );
}
 
export default ContactUs;

const styles = {
    container: {
      minHeight: "calc(100vh - 70px)",
    //   background: "url('active-tv-login-test1.png')",
      // backgroundSize:'cover',
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
    },
    contentBox: {
      width: "700px",
      background: "black",
      opacity: 0.99,
      height: "500px",
      padding: "95px 90px",
      flexDirection: "column",
      margin:'30px 0 0 290px'
    //   color:"white",
    },
  
  };

// Repository
// https://github.com/mordasuabae/activetv.git
  