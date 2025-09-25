import { Box, IconButton, Paper, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { getTrans, deleteTran } from "../api/transactions";
import { useEffect, useMemo, useState } from "react";
export default function Home() {
    const [trans, setTrans] = useState([])

    useEffect(() => { fetchData() }, []);

    const fetchData = async () => {
        const data = await getTrans();
        setTrans(data);
    };

    const handleDelete = async (id) => {
        await deleteTran(id);
        setTrans(prev => prev.filter(t => t.id !== id));
    };



    // {id: 'b539', title: 'test', amount: 100}
    const totalAmount = useMemo(
        () => trans.reduce((acc, tran) => acc + tran.amount, 0),
        [trans]
    );

    const transList = trans.map(tran => {
        return (
            <Paper key={tran.id} elevation={3}
                sx={{
                    width: '100%',
                    py: .5, pl: 2, pr: .5, mb: 3,
                    height: 60,
                    display: 'flex', alignItems: 'center', gap: 1

                }}>
                <Typography variant="h5" sx={{ flex: 1 }}>{tran.title}</Typography>
                <Typography variant="h5" >{tran.amount}$</Typography>
                <IconButton sx={{ alignSelf: 'start', p: .2 }} onClick={() => handleDelete(tran.id)}>
                    <ClearIcon />
                </IconButton>
            </Paper>
        )
    })

    return (
        <Box sx={{ width: 'min(100% , 480px)' }}>

            <div style={{ maxHeight: '450px', padding: '10px', marginBottom: '20px', overflow: 'auto' }}>
                {transList}
            </div>
            {totalAmount !== 0 && <Typography textAlign='center' variant="h5" >You Spent {totalAmount}$</Typography>}
            {totalAmount === 0 && <Typography textAlign='center' variant="h5" color="error">There is No Transactions to show</Typography>}
        </Box>
    )
}