
import { AppShell, Navbar, Header, Button, Title, Flex, Grid, Modal } from '@mantine/core';

import React from 'react'
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";

export default function Layout ({children} : {children: React.ReactNode}){


    const {user} = useUser()


    return (
      
    <AppShell
      padding="md"
    //   navbar={
    //     <Navbar width={{ base: 300 }} height={500} p="xs">

           
    //     </Navbar>}
      
      
      header={<Header height={60} p="md">
        
               
            <Grid columns={24} >
                <Grid.Col span={12}>
                    <Flex  dir="row"  justify={"flex-start"} align={"center"}>
                        <Title order={3}>App</Title>
                    </Flex>
        
                </Grid.Col>
                
                <Grid.Col span={12}>
                    <Flex  dir="row"  justify={"flex-end"} gap={"lg"} align={"center"} style={{paddingRight:"40px"}} >

                        {!user ?     
                        
                            <SignInButton mode="modal">
                                <Button  color="cyan" size="md">
                                     Sign In
                                </Button>
                            </SignInButton>
                            :
                            
                            <SignOutButton >
                            <Button  color="cyan" size="md">
                                 Sign Out
                            </Button>
                        </SignOutButton>
                    
                    }
                       
                            
                        
                    </Flex>
                </Grid.Col>
      
    </Grid>


        
        

        
           
        

            
        
        
        
        </Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>
  
    )


}