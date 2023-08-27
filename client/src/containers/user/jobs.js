import React, { useEffect, useState } from 'react'
import axios from "axios"

import {
    Box, Button, Heading, useColorModeValue, Grid, Image, Stack, Badge, Divider, ButtonGroup, Card, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CardBody, CardFooter, AspectRatio, Flex, Center,
    StackDivider, Text, VStack, List, ListItem, SimpleGrid
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

import Pagination from '../../components/pagination'
import HeroWithBg from '../../components/card/heroWithBg'
import CategoryCard from '../../components/card/categoryCard'
import AllJobs from './allJobs'


const Jobs = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalJobData, setModalJobData] = useState({})
    const [reqQualifications, setReqQualifications] = useState([])
    const [reqSkills, setReqSkills] = useState([])
    const [reqResponsiblities, setReqResponsiblities] = useState([])
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()


    const fetchJobsList = async () => {
        try {
            console.log("Fetching job list...");
            const res = await axios.get('http://localhost:8000/jobslist');
            setData(res.data.jobsList);
            // console.log(data)
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };



    useEffect(() => {
        fetchJobsList();
    }, [])

    return (
        <>
            <Box>
                <HeroWithBg />
               <AllJobs  displayAll={true}/>
            </Box>
        </>
    )
}

export default Jobs

