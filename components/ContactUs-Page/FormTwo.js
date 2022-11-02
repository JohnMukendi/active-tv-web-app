import React,{ useState } from "react";
import { Box } from "@mui/system";
import Link from "next/link";
import Form from "./Form";

import CorridorStore from "./CorridorStore";

const FormTwo = () => {
  const [form,setForm] = useState('no form')
  switch(form){
    case 'form1':
        return(<Form />)

    

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
                 <input onClick={() => setForm('form2')}   style={{margin:"10px 0 0 0",}} type="radio" id="html" name="fav_language" value="HTML"></input> Copyright Infringement
                  
                 </Box>
          <Box style={{margin:'50px 0 0 0'}}>

            <p style={{fontSize:'8px'}}>Have you spotted a piece of our content being uploaded to a page not owned by Corridor Digital?</p>
              <br/>
          <p style={{fontSize:'8px'}}>Email Address</p>
            <input style={{width:'100%',border:'1px white solid',backgroundColor:'black',height:'40px',color:'white',padding:'0 5px',fontStyle:"italic"}}  type="text" placeholder="Enter your email address"></input>
            <br/>
            <br/>
            <p style={{fontSize:'8px'}}>Name</p>
            <input style={{width:'100%',border:'1px white solid',backgroundColor:'black',height:'40px',color:'white',padding:'0 5px',fontStyle:"italic"}}  type="text" placeholder="Enter your full name"></input>
            <br/>
            <br/>
            <p style={{fontSize:'8px'}}>Subject</p>
            <input style={{width:'100%',border:'1px white solid',backgroundColor:'black',height:'40px',color:'white',padding:'0 5px',fontStyle:"italic"}}  type="text" placeholder="Subject"></input>
            <br/>
            <br/>
            <p style={{fontSize:'8px'}}>Urls of offending videos (1 per line)</p>
            <input style={{width:'100%',border:'1px white solid',backgroundColor:'white',height:'80px',color:'black',padding:'0 5px',fontStyle:"italic"}}  type="text" placeholder="Url's"></input>
            <br/>
            <br/>
            <button style={{backgroundColor:'yellow',width:'100%',height:"40px",border:'none'}}>Sumit</button>
        </Box>
          </Box>
            
    </Box>
    );
}
 
export default FormTwo;

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
      height: "950px",
      padding: "100px 90px",
      flexDirection: "column",
      
    //   color:"white",
    },
  
  };