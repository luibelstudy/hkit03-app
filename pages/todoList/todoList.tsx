import { Box, Button, Stack } from "@mui/material";
import React from "react";

export default function TodoList() {
    return <>
    <Stack sx={{ bgcolor: 'red'}}>
        <Box>할일목록</Box>
    </Stack>
    <Stack>ru
        <Button>배추 김치 사기</Button>
        <Button>코딩복습하기</Button>
        <Button>저녁 친구 약속</Button>
    </Stack>
    </>
}