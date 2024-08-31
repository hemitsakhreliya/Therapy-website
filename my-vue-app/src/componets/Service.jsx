import React from 'react'
import './Service.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import img1 from './img/therapy.png'
import img2 from './img/focus.svg'
import img3 from './img/confident.svg'
import img4 from './img/sequare.svg'
import img5 from './img/work.svg'

function Service() {
  return (
    <div>
        <Navbar/>
        <div class="wrapper mt-3" style={{textAlign: "center", position:"relative"}}>
            <div id="we1">We give solutions to your, <br/> <span style={{color:"#EA728C"}}>Stress</span></div>
            <div id="b11"><a href="find.html"><button id="b1_11">Get started</button></a></div>
        </div>

        <div className='container-fluid mt-5'>
            {/* <div className='pt-4' style={{fontSize:"40px", color:"#555555", fontWeight:"bold", fontFamily:"Times New Roman, Times, serif", textAlign:"center"}}>How Therapiz works</div>
            <hr style={{marginTop:"-1px", marginLeft:"470px", marginRight:"470px"}}/>
            <div  className='pt-3' style={{textAlign: "center", color:"#2E2D25", fontFamily:"Times New Roman, Times, serif", fontSize:"20px"}}>"Whether you are seeking gender-affirming therapy or just someone who understands the LGBTQIA <br/> community, Talkspace believes that the power of therapy is amplified when you see a provider who <br/> truly understands you. Here's how the therapist-matching process works at Talkspace."</div>

            <div className='pt-4'>
                <div className='row'>
                    <div className='col-sm-4'>
                        
                    </div>
                </div>
            </div> */}

            <div id="pr1" style={{color:"#04547B"}}>Why Should You Choose Therapy?</div>
            <div className='mt-2' id="find2" style={{textAlign:"center",color:"#24547B"}}>Along with life come the challenges we face; mentally, emotionally, and physically. But with an <br/> individual therapist, you can:</div>
            <div className='mt-5' style={{textAlign:"center"}}><img src={img1} id='therapy_img'/></div>
            <div className='mt-5' style={{textAlign:"center"}}><Link to='/Find'><button id='explor' >Explor Your Strength!</button></Link></div>
        </div>

        <div id='can' className='mt-5 row mb-5 pb-5'>
            <div className='pt-4' id="pr1" style={{color:"#04547B"}}>What We Can Assure</div>
            <div className='col-sm-4 pt-5' style={{textAlign:"center"}}>
                <img src={img2}/>
                <br/>
                <div className='pt-3' style={{color:"#555555",fontFamily:'Times New Roman, Times, serif',fontSize:"25px",fontWeight:"bold"}}>Focus on Results</div>
                <br/>
                <div style={{color:"#24547B"}}>Set realistic goals and gain<br/>rewards as you grow.</div>
            </div>
            <div className='col-sm-4 pt-5' style={{textAlign:"center"}}>
                <img src={img3}/>
                <br/>
                <div className='pt-3' style={{color:"#555555",fontFamily:'Times New Roman, Times, serif',fontSize:"25px",fontWeight:"bold"}}>Confidentiality</div>
                <br/>
                <div style={{color:"#24547B"}}>We respect your privacy and <br/>help you keep track.</div>
            </div><div className='col-sm-4 pt-5' style={{textAlign:"center"}}>
                <img src={img4}/>
                <br/>
                <div className='pt-3' style={{color:"#555555",fontFamily:'Times New Roman, Times, serif',fontSize:"25px",fontWeight:"bold"}}>Convenience</div>
                <br/>
                <div style={{color:"#24547B"}}>Find the right therapist & get <br/> 24/7 support from us.</div>
            </div>
            <div className='mt-5' style={{textAlign:"center"}}><Link to='/Find'><button id='explor' >Meet Our Therapists!</button></Link></div>
        </div>

        <div className='container-fluid mt-5 pb-5' id='work' style={{textAlign:"center"}}>
            <div id="pr1" style={{color:"#04547B"}}>How Does It Work?</div>
            <div className='pt-3'><img src={img5}/></div>
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='pl-5'  style={{textAlign:"center",color:"gray"}}>Your expert relationship <br/> counsellor can help identify<br/> unknown triggers of conflict.</div>
                </div>
                <div className='col-sm-4'>
                    <div  style={{textAlign:"center",color:"gray"}}>Our therapist will establish rules <br/> and open communication in sessions</div>
                </div><div className='col-sm-4'>
                    <div className='pr-5'  style={{textAlign:"center",color:"gray"}}>Develop personalised strategies <br/> that work for your special <br/> relationship</div>
                </div>
            </div>
        </div>


    </div>
    
    
  )
}

export default Service
