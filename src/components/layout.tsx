
import { AppShell, Header, Button, Title, Flex, Grid, Menu, Group, Avatar, rem, UnstyledButton, Loader } from '@mantine/core';

import React, {forwardRef} from 'react'
import { useUser, SignInButton, SignOutButton, useClerk, SignUpButton, useOrganizations } from "@clerk/nextjs";
import { IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';





interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string;
  name: string;
  
}



/* eslint-disable react/display-name */
const AvatarTarget  = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      sx={(theme) => ({
        display: 'block',
        
        
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />
      </Group>
    </UnstyledButton>
  )
);





export default function Layout ({children} : {children: React.ReactNode}){


    const {user, isLoaded} = useUser()
    const { signOut, } = useClerk()

    console.log(user)


    
    const onClickLogOut =  ()=>{


      signOut().then(()=>{
        console.log("Loggin out")
      }).catch(err=>{console.log("Something went wrong")})
    }



    if(!isLoaded) return    <Loader />;


    return (
      
    <AppShell
      padding="md"
  
      
      header={<Header height={60} p="md">
        
                
            <Grid columns={24} sx={{padding:"0 4em"}} >
                <Grid.Col span={12}>
                    <Flex  dir="row"  justify={"flex-start"} align={"center"}>
                        <Title order={3}>App</Title>
                    </Flex>
        
                </Grid.Col>
                
                <Grid.Col span={12}>
                    <Flex  dir="row"  justify={"flex-end"} gap={"lg"} align={"center"} style={{paddingRight:"40px"}} >

                        {!user ?     
                            <>
                              <SignInButton mode="modal">
                                  <Button  color="cyan" size="md">
                                        Sign In
                                  </Button>
                              </SignInButton>
                              <SignUpButton mode='modal'>
                                  <Button  color="cyan" size="md">
                                        Sign Up
                                  </Button>
                              </SignUpButton>
                            </>
                            :<>
                            
                            <Menu withArrow>
                              <Menu.Target>
                                
                                
                                  <AvatarTarget image={user.imageUrl} name={user.fullName!} />
                                  
                              

                            
                            

                              </Menu.Target>
                                    <Menu.Dropdown sx={{padding:".5em 1em"}}>
                                    <Menu.Label>Hola {`${user.fullName!}`}</Menu.Label>
                                        <Menu.Item
                                          icon={<IconExternalLink size={rem(14)} />}
                                          onClick={onClickLogOut}
                                          
                                        >
                                          Log Out
                                        </Menu.Item>
                                  </Menu.Dropdown>

                            </Menu>

                            
                            
                            </>                  
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