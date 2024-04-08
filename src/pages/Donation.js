import React from "react";
import InnerHeader from "../components/innerHeader";
import AOS from "aos";
import 'aos/dist/aos.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LaunchIcon from '@mui/icons-material/Launch';

const Donation = ({data}) => {
    return (
        <>
            <InnerHeader value="Donate to us " />
            <section className='detail_sec about_sec donate-parent'>
                <div className='custom-container'>
                    <div className="donation__content">
                        <Accordion style={{ backgroundColor: '#dbad35' }}>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                className="collapsed" // Initially collapsed
                            >
                                <Typography>By Interac:</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Interac id : Nayajeevanchurch@hotmail.com
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ backgroundColor: '#dbad35' }}>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                className="collapsed" // Initially collapsed
                            >
                                <Typography>By cheque:</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    For Donating us via cheque, you can come to our church 
                                    Address: 8868 128 street, surrey bc V3V5M7
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Link href="https://buy.stripe.com/test_5kAbLq39w22Y3eg144" target="_blank" rel="noopener noreferrer">
                            <Accordion style={{ backgroundColor: '#dbad35' }}>
                                <AccordionSummary
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                    style={{ display: 'flex', justifyContent: 'space-between' }}
                                >
                                    <Typography>By Card:</Typography>
                                    <LaunchIcon />
                                </AccordionSummary>
                            </Accordion>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Donation;
