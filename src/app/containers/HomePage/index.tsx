import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Navbar } from '../../components/navBar';
import { TopSection } from './topSection';
import { Marginer } from "../../components/marginer";
import { BookingSteps } from "./bookingSteps";
import { AboutUs } from "./aboutUs";
import { TopCars } from './topCars';
import { Footer } from '../../components/footer';





const PageContainer = styled.div`
${tw`
 w-full
 h-full
 flex
 flex-col
 items-center
 overflow-x-hidden
 `}
 `;


export function HomePage() {
    return <PageContainer>
      <Navbar />
      < TopSection/>
      <Marginer direction="vertical" margin="4em" />
      <BookCard/>
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      <TopCars />
      <Marginer direction="vertical" margin="8em" />
      <Footer />
    </PageContainer>
}

 
