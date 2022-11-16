import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Palette } from "@universemc/react-palette";
import { useState, useEffect } from 'react';
import ShowsDisplay from '../components/shows/ShowsDisplay';


const Shows = () => {

  const [shows, setShows] = useState(null);

  useEffect(() => {
    fetch('https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-shows')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      setShows(data);
    })
  },[])


  return (
    <Palette
      src={
        "top_banner_full.jpg"
      }
    >
      {(
        // { data, loading, error }
        ) => {
        // console.log('palette-data', data, loading, error);
        return (
          <Box
            sx={{
              minHeight: '100vh',
              background: '#111',
              padding: '40px 40px'
            }}
          >
            <ShowsDisplay shows={shows} />
          </Box>
        );
      }}
    </Palette>


  )
}

export default Shows