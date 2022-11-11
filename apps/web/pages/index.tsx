import { Text, Textarea, Flex } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

const Markov = require('js-markov');


export default function Web() {
  let [value, setValue] = React.useState('')

  let handleInputChange = (e: any) => {
    // e.preventDefault()
    let inputValue = e.target.value
    var markov = new Markov();
    markov.addStates([
      inputValue
    ]);
    markov.train(3);
    var longText = markov.generateRandom(50);
    setValue(longText)
  }

  return (
    <Flex align="center" justify="center" gap={5} flexDirection="column">
      <Text
        fontStyle={'italic'}
        fontSize="xl"
        fontWeight="bold"
      >This is a demonstration</Text>
      <Textarea
        w="50%"
        borderRadius={10}
        value={value}
        onChange={handleInputChange}
        placeholder='Here is a sample placeholder'
        size='sm' />
      <Link href="./experiment">Next Page</Link>
    </Flex>
  );
}
