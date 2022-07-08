import React, {useCallback} from "react";
import {Note} from "@/models";
import {createBox} from "@shopify/restyle";
import {Theme} from "@/themes";
import {FlatList, FlatListProps} from "react-native";
import NOTES from '@/fixtures/notes'
import NoteListItem from "@/components/note-list-item";

export interface ListProps extends Note {
}

const StyledFlatList = createBox<Theme, FlatListProps<Note>>(FlatList)

interface Props {}

const NoteList: React.FC<Props> = () => {
    const renderItem = useCallback(({item}: { item: any }) => <NoteListItem {...item} />, [])

    return (
        <StyledFlatList
            contentInsetAdjustmentBehavior='automatic'
            data={NOTES}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            width="100%"
        />)
}

export default NoteList
