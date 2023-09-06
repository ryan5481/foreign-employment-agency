import React, { useEffect, useState } from 'react'
import axios from "axios"

import { Box, useDisclosure } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

import HeroWithBg from '../../components/card/heroWithBg'
import AllJobs from './allJobs'


const Jobs = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)


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
            <Box pt={5}>
                <HeroWithBg />
               <AllJobs  displayAll={true}/>
            </Box>
        </>
    )
}

export default Jobs

