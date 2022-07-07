import React, {ReactNode} from "react";
import {BoxProps} from "@shopify/restyle";
import {Theme} from "@/themes";
import Box from "./box";

// TODO: find solution to below ts-ignore
const Container: React.FC<BoxProps<Theme>> = props => (
    <Box {...props} flex={1} backgroundColor="$background">
        {/*@ts-ignore*/}
        {props.children}
    </Box>
);