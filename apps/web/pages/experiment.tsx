import { Flex, Textarea } from "@chakra-ui/react";
// import * as tf from '@tensorflow/tfjs';
import Link from "next/link";

export default function Experiment() {
    return (
        <Flex align="center" justify="center" gap={5} flexDirection="column">
            <Textarea
                w="50%"
                borderRadius={10}
                placeholder='This is the page for experimentation'
                size='sm' />
            <Link href=".">Click here to go home 😊</Link>
        </Flex>
    );
}
