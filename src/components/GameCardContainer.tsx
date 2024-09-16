import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}
const GameCardContainer = ({children} : Props) => {
  return (
    //note to myself: remove this width='300px' for better view 
    <Box  width='300px' borderRadius={10} overflow='hidden'>
        {children}
    </Box>
  )
}

export default GameCardContainer