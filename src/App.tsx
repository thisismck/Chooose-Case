import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  SimpleGrid, 
  theme,
  CSSReset,
  HStack,
} from "@chakra-ui/react"
import MyCard from './components/MyCard';
import NavBar from './components/NavBar';
import places from "./data/data.json"
console.log(places);

const cardData = places

export const App = () => (
 
  <ChakraProvider  theme={theme}>
    <CSSReset />
    
    <NavBar/>
    <Grid backgroundColor={"#FAFAFA"} >
    <SimpleGrid  marginTop={10} marginX={5} minChildWidth='350px' spacing='25px'>
        {cardData.map((data, index) => (
     
            <MyCard {...data} />

        ))}
      </SimpleGrid>
      </Grid>
  </ChakraProvider>

)
