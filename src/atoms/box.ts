import {BackgroundColorProps, createBox} from "@shopify/restyle";
import {Theme} from "@/themes";
import React from "react";

const Box = createBox<Theme , & { children?: React.ReactNode }>()
export type BoxProps = React.ComponentProps<typeof Box>

export default Box;