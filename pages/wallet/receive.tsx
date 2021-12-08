import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import QRCode from "qrcode.react";

export default function Receive() {
    return <>
    <QRCode value="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" />
    <Box>받을주소 : 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</Box>
    </>
}