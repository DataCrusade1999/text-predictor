import React from "react"
import { Text } from "@chakra-ui/react"
import Head from "next/head";



interface layoutProps {
    children?: React.ReactNode
    title?: string
}

const Layout = ({ children, title }: layoutProps) => {
    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <div>
                <Text
                    bgGradient="linear(to-r, rgb(91,52,218), rgb(53,142,241))"
                    bgClip="text"
                    fontSize="6xl"
                    fontWeight="extrabold"
                    align="center"
                >
                    Predictive Text
                </Text>
                {children}
            </div>
        </>
    );
};

export default Layout;
