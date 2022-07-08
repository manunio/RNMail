import React from 'react';
import {AnimatedBoxProps} from "@/atoms/animated-box";
import {AnimatedBox, Bar} from "@/atoms";

const HeaderBar: React.FC<AnimatedBoxProps> = ({children, ...rest}) => {
    return (
        <AnimatedBox position='absolute' top={40} left={0} right={0} {...rest}>
            <Bar variant='headerBar' flexDirection='row' alignItems='center' mx='lg' px="sm"
                 minHeight={44}>{children}</Bar>
        </AnimatedBox>
    )
}

export default HeaderBar