import React from "react";
import {Container, Text} from "@/atoms";
import NoteList from "@/components/note-list";

export default function MainScreen() {
    return (
        // TODO: find solution to below ts-ignore
        // @ts-ignore
        <Container justifyContent="center" alignItems="center">
            <NoteList/>
        </Container>
    )
}