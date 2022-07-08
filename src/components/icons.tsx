import React from "react";
import Feather from 'react-native-vector-icons/Feather'
import {ColorProps, useResponsiveProp, useTheme} from "@shopify/restyle";
import {Theme} from "@/themes";

export type IconProps = React.ComponentProps<typeof Feather>
type Props = Omit<IconProps, 'color'> & ColorProps<Theme>

const FeatherIcon: React.FC<Props> = ({color = "$foreground", ...rest}) => {
    const theme = useTheme<Theme>()
    const colorProps = useResponsiveProp(color)
    const vColor = theme.colors[colorProps || '$foreground']
    return <Feather {...rest} color={vColor}/>
}

export default FeatherIcon