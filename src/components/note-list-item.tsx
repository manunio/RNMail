import React from "react";
import {Note} from "@/models";
import {Box, Text} from "@/atoms";

export interface ListItemProps extends Note {
}

const NoteListItem: React.FC<ListItemProps> = props => {
    return (
        <Box bg="$background">
            <Box
                backgroundColor="$background" px="lg" py="sm">
                <Text ellipsizeMode="tail" numberOfLines={1} fontWeight="bold" mb="xs">{props.title}</Text>
                <Text
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    fontSize={14}
                    opacity={0.7}
                >{props.body}</Text>
            </Box>
        </Box>
    )
}

export default NoteListItem