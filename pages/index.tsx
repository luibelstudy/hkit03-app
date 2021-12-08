import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function Index() {

  const router = useRouter()

  function onClickMemo() {
    router.push('/memo/memo')
  }

  function onClickWallet() {
    router.push('/wallet/wallet')
  }

  function onClickTodoList() {
    router.push('/todoList/todoList')
  }

  return <>
  <Button onClick={onClickMemo}>미니메모장</Button>
  <Button onClick={onClickWallet}>전자지갑</Button>
  <Button onClick={onClickTodoList}>할일목록</Button>
  </>
}