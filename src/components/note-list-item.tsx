import React from "react";
import {Note} from "@/models";
import {Box, Text} from "@/atoms";

export interface ListItemProps extends Note {
}

const NoteListItem: React.FC<ListItemProps> = props => {
    return (
        <Box bg="$background">
            <Box
                backgroundColor="$background"
                px="lg"
                py="sm">
                <Text>
                    {props.body}
                </Text>
            </Box>
        </Box>
    )
}

export default NoteListItem