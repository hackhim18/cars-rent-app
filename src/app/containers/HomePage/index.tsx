import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { Navbar } from '../../components/navBar';

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
    </PageContainer>
}

 
