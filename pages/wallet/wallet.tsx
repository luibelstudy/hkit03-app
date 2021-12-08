import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

export default function Wallet() {

    const [coin, setCoin] = useState('')

    useEffect(() => {
        //coin = localStorage.getItem('coin')
        setCoin(localStorage.getItem('coin')!)
    })

    return <>
        <Box>{coin}</Box>
    </>
}