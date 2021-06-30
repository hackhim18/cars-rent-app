import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Navbar } from '../../components/navBar';
import { TopSection } from './topSection';

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
      <BookCard/>
    </PageContainer>
}

 
