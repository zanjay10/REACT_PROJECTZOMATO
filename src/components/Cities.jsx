import React from 'react'
import './Cities.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Cities() {
    return (
        <>
            <div className="cities">
                <h1>Popular localities in and around <span>Kochi</span></h1>
                <div className="cityContainer">
                    <div className="city">
                        <div className="cityLeft">
                            <h3>Kakkanad</h3>
                            <span>515 places</span>
                        </div>
                        <div className="icon">
                            <ChevronRightIcon />

                        </div>
                    </div>

                  

                    <div className="city">
                        <div className="cityLeft">
                            <h3>Edappally</h3>
                            <span>370 places</span>
                        </div>
                        <div className="icon">
                            <ChevronRightIcon />

                        </div>
                    </div>

                    <div className="city">
                        <div className="cityLeft">
                            <h3>Fort Kochi</h3>
                            <span>138 places</span>
                        </div>
                        <div className="icon">
                            <ChevronRightIcon />

                        </div>
                    </div>

                    <div className="city">
                        <div className="cityLeft">
                            <h3>Panampilly Nagar</h3>
                            <span>109 places</span>
                        </div>
                        <div className="icon">
                            <ChevronRightIcon />

                        </div>
                    </div>

                    <div className="city">
                        <div className="cityLeft">
                            <h3>MG Road</h3>
                            <span>100 places</span>
                        </div>
                        <div className="icon">
                            <ChevronRightIcon />

                        </div>
                    </div>

                    <div className="city">
                        <div className="cityLeft">
                            <h3>Kacheripady</h3>
                            <span>126 places</span>
                        </div>
                        <div className="icon">
                            <ChevronRightIcon />

                        </div>
                    </div>

                    <div className="city">
                        <div className="cityLeft">
                            <h3>Palarivattom</h3>
                            <span>171 places</span>
                        </div>
                        <div className="icon">
                            <ChevronRightIcon />

                        </div>
                    </div>

                    <div className="city">
                        <div className="cityLeft">
                            <h3>Vytilla</h3>
                            <span>138 places</span>
                        </div>
                        <div className="icon">
                            <ChevronRightIcon />

                        </div>
                    </div>

                    <div className="city">
                        <div className="cityLeft">
                            <h3>See More</h3>

                        </div>
                        <div className="icon">
                            <KeyboardArrowDownIcon />

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Cities