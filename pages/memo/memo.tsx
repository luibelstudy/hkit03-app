import { Box, Button, InputBase, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Memo() {

    const [memo, setMemo] = useState('')
    // setMemo('test')

    // let memo = ''
    // memo = 'test'
    // 전체 rerendering



    useEffect(() => {
        const m = localStorage.getItem('memo')
        if(m) {
            setMemo(m)
        }
    }, []) 

    function onClickSave() {
        if(confirm('정말 저장할까요?')) {
            localStorage.setItem('memo', memo)
            alert('저장되었습니다.')
        }
    }

    function onClickDelete() {
            localStorage.removeItem('memo')
            setMemo('')
    }
    

    function onChangeMemo(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const value = event.currentTarget.value       
        setMemo(value)
    }

    return <>
        <Stack direction="row" alignItems="center">
            <Box sx={{ flexGrow: 1 }}>미니 메모장</Box>
            <Button onClick={onClickSave}>저장</Button>
            <Button onClick={onClickDelete}>삭제</Button>
        </Stack>
       <InputBase value={memo} multiline={true} sx={{ alignItems: 'flex-start', boxShadow: 2, m:2, p: 2, width: '90vw', height: '90vh'}} onChange={onChangeMemo} />
    </>
}