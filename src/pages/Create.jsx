import styled from "@emotion/styled";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { teal } from "@mui/material/colors";

import { postTran } from "../api/transactions";
import { useState } from "react";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(teal[500]),
  backgroundColor: teal[500],
  "&:hover": {
    backgroundColor: teal[700],
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  },
}));

export default function Create() {

  const [tranTitle, setTranTitle] = useState('');
  const [tranAmount, setTranAmount] = useState(0);

  const addNewTran = () => {
    if(!tranTitle.trim() || !tranAmount){
      alert('Fill the Inputs')
      return;
    }
    postTran({
      title: tranTitle,
      amount: tranAmount
    })
    alert('A Transaction has been added successfully')

    setTranTitle('');
    setTranAmount(0)
  }

  return (
    <Box component={'form'} sx={{ width: "min(100%, 480px)", p: 2 }}>
      <TextField
        onChange={(e) => setTranTitle(e.target.value)}
        value={ tranTitle}
        label="Transaction Title"
        id="outlined-title"
        sx={{ m: 1, width: "100%" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">&#128073;</InputAdornment>
            ),
          },
        }}
      />

      <TextField
        onChange={(e) => setTranAmount(Number(e.target.value))}
        value={tranAmount || ''}
        type="number"
        label="Amount"
        id="outlined-amount"
        sx={{ m: 1, width: "100%" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">$</InputAdornment>
            ),
          },
        }}
      />

      <ColorButton onClick={addNewTran} sx={{
        m: 1, p: "5px 18px",

      }}>
        Submit
      </ColorButton>
    </Box>
  );
}
