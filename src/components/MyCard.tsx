// MyCard.tsx
import React from 'react';
import {
    VStack, 
    Badge, 
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Icon,
  } from '@chakra-ui/react'
import { Rating } from 'react-simple-star-rating';
interface MyCardProps {
  id: number;
  photouri: string;
  headerName: string;
  country: number;
  day: number;
  co2Tone: number;
  rating: number;
}

const MyCard: React.FC<MyCardProps> = ({
  id,
  photouri,
  headerName,
  country,
  day,
  co2Tone,
  rating,
}) => {
  return (
  <Card borderRadius={10}>
   <Card borderRadius={10} backdropFilter='auto' backdropContrast='60%' color={'black'} margin={3} backgroundImage={photouri+id} shadow={'none'}>
    
      <CardBody backdropFilter='auto' backdropContrast='50%' paddingBottom={0}>
        <Text marginTop={10} textAlign={"center"} color="white" fontSize={17} fontWeight="bold" > {headerName}</Text>
        <Text marginBottom={3} fontSize={10}  textAlign={"center"} color="white">{country} Countries, {day} days</Text>
       <Card flexDirection={"row"} justifyContent={'space-between'} marginBottom={10}    marginX={5} backgroundColor="#333435" paddingX={5} paddingY={2} borderRadius={10}>
        <Text fontSize={13} color="white">
          Emissions offset:
        </Text>
        <Text fontSize={13} color="white">
         {co2Tone} kg CO₂e
        </Text>
        </Card>
        <Card   background="white"
   flexDirection={"row"}
   paddingX={3}
   paddingTop={3}
   marginX={5}
   paddingBottom={1}
   borderTopRadius={10}
   borderBottomRadius={0}
   shadow={'none'}
backdropFilter='black' backdropContrast='30%'
   justifyContent={"space-between"}>
             <Text color="black" fontSize={13} verticalAlign={'center'} >Trip Rating</Text>
      
   <Box  display='flex' justifyContent={"flex-end"} >
          <Rating
            size={15}
              SVGstyle={{display: "inline-block"}}
            initialValue={rating}
            readonly={true}
          />
          <Text marginStart={2} color="black" fontSize={15} fontWeight="bold" verticalAlign={'center'} >{rating}</Text>
          </Box>
         </Card>
      </CardBody>
      
  </Card></Card>
  );
};

export default MyCard;
