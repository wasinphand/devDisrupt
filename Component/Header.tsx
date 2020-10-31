import React,{useState} from 'react';
import styles from '../styles/Home.module.css'
import { Button } from "@chakra-ui/core";
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { IconButton } from "@chakra-ui/core";
import {useEffect} from 'react';
import {Search} from '../hookApi/searchParams';

export function Header(props){
    const [isShowModal,setIsShowModal] = useState(false);


    return (
        <ThemeProvider>
            <CSSReset/>
            <nav className={styles.headerContainer}>
                    <div className={styles.headerIcon}>
                        ICON  
                    </div>
                    <div>
                        <Button onClick={()=>{setIsShowModal(!isShowModal)}}> 
                            <IconButton aria-label="Search database" icon="search" />
                            SEARCH
                        </Button>
                    </div>
            </nav>
            {isShowModal && 
                <div className={styles.modal}>
                    <Button onClick={()=>{Search(0)}} className={styles.modal} size="sm" variantColor='green'>
                        Group1
                    </Button>
                    <Button size="sm" variantColor="teal">Group2</Button>
                    <Button size="sm" variantColor="teal">Group3</Button>
                    <Button size="sm" variantColor="teal">Group4</Button>
                    <Button size="sm" variantColor="teal">Group5</Button>
                </div>
            }
        
        </ThemeProvider>
    )
} 
