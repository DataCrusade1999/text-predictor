import { Text, Textarea, Flex } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

const Markov = require('js-markov');


export default function Web() {
  let [value, setValue] = React.useState('')
  let [markovValue, setValuMarkov] = React.useState('')

  let handleInputChange = (e: any) => {
    e.preventDefault()
    let inputValue = e.target.value
    setValue(inputValue)
  }
  let markovInput = (e: any) => {
    e.preventDefault()
    var markov = new Markov();
    markov.addStates(value);
    // markov.addStates([
    //   'Today is sunny',
    //   'Today is rainy',
    //   'The weather is sunny',
    //   'The weather for today is sunny',
    //   'The weather for tomorrow might be rainy'
    // ]);
    markov.train(3);
    var longText = markov.generateRandom(50);
    setValuMarkov(longText)
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
      <Textarea
        w="50%"
        borderRadius={10}
        value={markovValue}
        onChange={markovInput}
        placeholder='Here is a sample placeholder'
        size='sm' />
      <Link href="./experiment">Next Page</Link>
    </Flex>
  );
}
