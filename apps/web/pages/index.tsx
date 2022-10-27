import { Text, Center, Textarea, Flex } from "@chakra-ui/react"
import React from "react"



export default function Web() {
  let [value, setValue] = React.useState('')

  let handleInputChange = (e: any) => {
    // e.preventDefault()
    let inputValue = e.target.value
    setValue(inputValue)
  }

  return (
    <Flex align="center" justify="center" gap={5} flexDirection="column">
      <Text
        bgGradient="linear(to-r, rgb(91,52,218), rgb(53,142,241))"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        align="center"
      >
        Markov Chain
      </Text>

      <Text
        fontStyle={'italic'}
        fontSize="xl"
        fontWeight="bold"
      >This is a demonstration of Markov-Chain</Text>
      <Textarea
        w="50%"
        borderRadius={10}
        value={value}
        onChange={handleInputChange}
        placeholder='Here is a sample placeholder'
        size='sm' />
    </Flex>
  );
}
