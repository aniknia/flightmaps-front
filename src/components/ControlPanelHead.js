import { IoAirplane } from '@react-icons/all-files/io5/IoAirplane'
import { Flex, Spacer, HStack, CloseButton } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

export default function ControlPanelHead(props) {
    return (
        <Flex>
            <HStack>
                <IoAirplane />
                <p>The Flight Mapper</p>
            </HStack>
            <Spacer />
            <HStack>
                <ColorModeSwitcher />
                <CloseButton size='md' onClick={props.close} />
            </HStack>
        </Flex>
    )
}