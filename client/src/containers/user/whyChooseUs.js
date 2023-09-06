import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import HeroWithBg from "../../components/card/heroWithBg"
import GridTextList from "../../components/card/gridTextList"
import {Box} from "@chakra-ui/react"

const WhyUs = () => {
    const [data, setData] = useState([])
    const fetchWhyChooseUsData = async () => {
        try {
            const res = await axios.get("http://localhost:8000/get-choose-us");
            const data = res.data.data;
            setData(data);
        } catch (error) {
            console.error("Error: ", error);
        }
    };


    console.log()

    useEffect(() => {
        fetchWhyChooseUsData();
    }, []);

    return (
        <>
            <Box>
                <Box>
                    <HeroWithBg data={data} />
                </Box>
                <Box>
                    <GridTextList data={data} />
                </Box>
            </Box>
        </>
    )
}

export default WhyUs