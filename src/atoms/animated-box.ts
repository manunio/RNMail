import React from "react";
import {createBox} from "@shopify/restyle";
import {Theme} from "@/themes";
import {Animated, ViewProps} from "react-native";
import AnimatedProps = Animated.AnimatedProps;

const AnimatedBox = createBox<Theme, AnimatedProps<ViewProps> & { children?: React.ReactNode }>(Animated.View)

export type AnimatedBoxProps = React.ComponentProps<typeof AnimatedBox>

export default AnimatedBox