import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { shade } from 'polished';

import { Container } from './styles';

export function Header() {
    const { colors } = useContext(ThemeContext);

    return (
        <Container>
            Hello World

            <Switch
                onChange={() => {}}
                checked={true}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={30}
                handleDiameter={15}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secondary}
            />
        </Container>
    );
};