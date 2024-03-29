import React from 'react'

export default function Researches() {
    return (
        <div className=' container tool'>
            <div className="d-flex flex-column align-items-center justify-content-center ">
                <div className="p-2 info_here">
                    <div className="dd container text-center auth"><b>FOR AUTHORS AND RESEARCHERS</b></div>
                    <div className="dd-1 container text-center "><b>Powering scientific communication through AI</b></div>
                    <div className="dd container text-center fs-5 text-body-tertiary">Our tools make teaching, writing, publishing, and collaborating on scientific research easy.</div>
                </div>
{/* -------------------------------2------------ */}

                <div className="p-2">
                    <div className="d-flex  justify-content-evenly ">
                        <div className="p-2 ">
                            <div className="d-flex flex-column mb-3 snip">
                                <div className="p-2  fw-semibold fs-3">Snip</div>
                                <div className="p-2 fs-5 text-body-tertiary doit ">Markdown and AI-powered collaborative editing environment for researchers with world-class image and PDF conversion tools.</div>
                                <div className="p-2">
                                    <div className=" buton d-flex flex-row mb-2">
                                        <div className="p-2"><button type="button" className="btn btn-lg btn-primary">Try for free</button></div>
                                        <div className="p-2"><button type="button" className="btn btn-lg btn-outline-primary">Learn more</button></div>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="p-2 img_class2">
                            <img id="intro_img" src="https://mathpix.com/images/snip-page/snip-apps-homepage.webp" alt="" />
                        </div>


                    </div>
                </div>

{/* -----------------------------3--------------- */}

                <div className="p-2">
                <div className="d-flex  justify-content-evenly  distance">
                        <div className="p-2 ">
                            <div className="d-flex flex-column mb-3 snip">
                                <div className="p-2  fw-semibold fs-3">Snipping Tool</div>
                                <div className="p-2 fs-5 text-body-tertiary doit ">Snipping Tool is a desktop app that allows you to OCR content from your screen and copy math and chemistry to your clipboard with a single keyboard shortcut.</div>
                                <div className='p-2 fs-5 text-body-tertiary doit '> Compatible with LaTeX, Markdown, MS Word, and more.</div>
                                <div className="p-2">
                                    <div className=" buton d-flex flex-row mb-2">
                                        <div className="p-2"><button type="button" className="btn btn-lg btn-primary">
                                            MacOS</button></div>
                                        <div className="p-2"><button type="button" className="btn btn-lg btn-primary">Windows</button></div>
                                        <div className="p-2"><button type="button" className="btn btn-lg btn-primary">Linux</button></div>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="p-2 img_class2">
                            <img id="intro_img" src="https://mathpix.com/images/snip-page/snipping-tool-homepage.webp" alt="" />
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}
