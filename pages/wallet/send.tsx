import { Button, TextField } from "@mui/material";
import { Router } from "next/router";
import { useEffect, useState } from "react";

export default function Send() {

    const [inputValue, setInputValue] = useState('')
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(Number(localStorage.getItem('total')))
    }, [])

    return <>
    <TextField type="number" label="입금량" onChange={(event) => {
        setInputValue(event.currentTarget.value)
    }} />

    <Button onClick={() => {
        const sumTotal = total + Number(inputValue)
        localStorage.setItem('total', String(sumTotal))
        setTotal(total)
        //router.back()
    }}>저장</Button>
    </>
}