import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './img/Paperplane.webp'
import img2 from './img/Hand.png'
import img3 from './img/Headplant.png'
import img4 from './img/Butterflies.png'
import img5 from './img/p1.jpeg'
import img6 from './img/p5.jpeg'
import img7 from './img/p7.jpeg'
import img8 from './img/p8.jpeg'
import img9 from './img/p9.jpg'
import img10 from './img/p10.jpg'
import './Pro.css'
import Navbar from './Navbar'

function Project() {
  return (
    <div>
        <Navbar/>
      <div className="container-fluid mt-4" style={{backgroundColor: "#FDF2E8", overflow:"hidden",  width:"100%", height:"auto"}}>
        <div className="row ml-5">
            <div className=" col-sm-8 zo" id="find">Find the right therapist for yourself <br/>
                <span id="find2">Trust worthy, non-judgemental, specialised,  <br/> therapists available across budgets. <br/>Ready to be Therapized? </span>
            </div>
            <div className="col-sm-4 justify-content-center"><img src={img1} id="findpic" alt="" /></div>
        </div>
        <div className="row ml-5">
            <div className="col-sm-4 justify-content-center">
                <Link to="/Find"><input type="submit" value="Reach out now  >"  id="b1_1"/></Link>
            </div>
        </div>
        <br/>
        <br/><br/>
      </div>

      <div className="container-fluid mt-3" style={{backgroundColor:"#C9DBEF", height:"auto",width:"100%", overflowX:"hidden"}}>
        <div className="pt-5" id="why">Why Therapize? <br/>
        <span id="why2">Connect with vetted, trusted and non-judgemental South Asian therapists</span>
        </div>
        <div className="table-responsive" style={{alignItems: "center"}}>
            <table className="table borderless mt-2" id="table1">
                <tr>
                    <td style={{textAlign: "center", backgroundColor:"#C9DBEF", border:"2px solid #C9DBEF"}} className="text-wrap" id="cl" ><img src={img2} style={{backgroundColor:"#C9DBEF"}} className="wh1" alt=""/><br/><span id="w1">90+ culturally <br/> sensitive experts <br/><br/></span></td>
                    <td style={{textAlign: "center", backgroundColor:"#C9DBEF", border:"2px solid #C9DBEF"}} className="text-wrap" id="cl"><img src={img3} style={{backgroundColor:"#C9DBEF"}} className="wh2"alt=""/><br/><span id="w1">Multilingual counselling <br/> and clinical psychologists <br/><br/></span></td>
                    <td style={{textAlign: "center", backgroundColor:"#C9DBEF", border:"2px solid #C9DBEF"}} className="text-wrap" id="cl"><img src={img4} style={{backgroundColor:"#C9DBEF"}} className="wh3" alt=""/><br/><span id="w1">60% therapists offer flexible <br/> payment options <br/><br/></span></td>
                </tr>
                <tr>
                    <td colspan="3" style={{textAlign: "center", backgroundColor:"#C9DBEF", border:"2px solid #C9DBEF"}}><Link to='/Find' style={{backgroundColor:"#C9DBEF"}}> <input type="submit" value="Reach out now  >"  id="b2"/></Link></td>
                </tr>
            </table>
        </div>
        </div>

        

        <div className="container-fluid mt-3" style={{backgroundColor: "#DEEDE5", height:"auto", overflowX:"hidden",  width:"100%"}} id="car1">
            <div className="pt-5" id="pr1" style={{ color:"rgb(110, 108, 108)",  fontSize: "40px", opacity: "0.9", textAlign:"center"}}>
                Hear about our community's experience
            </div>
            <div className="container-fluied" style={{position:"relative"}}>
                <div className="container mt-5" style={{backgroundColor: "#D7D9CF", height: "300px", width: "930px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button data-bs-target="#demo" data-bs-slide-to="0" className="active " style={{height: "8px", backgroundColor:"grey", width:"8px", borderRadius:"50%"}}></button>
                            <button data-bs-target="#demo" data-bs-slide-to="1"  style={{height: "8px", backgroundColor:"grey", width:"8px", borderRadius:"50%"}}></button>
                            <button data-bs-target="#demo" data-bs-slide-to="2" style={{height: "8px", backgroundColor:"grey", width:"8px", borderRadius:"50%"}}></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <pre className="pt-5 pb-5" style={{fontSize:"23px", textAlign:"center", color:"#555555", fontFamily:"Times New Roman, Times, serif" , inlineSize: "none", lineHeight: "30px", opacity: "0.9"}}>    "The best thing that happened to me last year was Therapize. I joined the anxiety <br/>support group not really knowing what to expect and one month later landed up with <br/>a community of chronic over-thinkers like me, and the kindest therapist who I actually  <br/>                   started doing individual sessions with. I'm honestly so grateful." <br/><br/>~Anchal,29</pre>
                            </div>
                            <div className="carousel-item" >
                                <pre className="pt-5 pb-5" style={{fontSize:"23px", textAlign:"center", color:"#555555", fontFamily:"Times New Roman, Times, serif" , inlineSize: "none", lineHeight: "30px", opacity: "0.9"}}>"I always thought of therapy as something that was a last resort. After using <br/> Therapize, I'm convinced that everyone needs a compassionate, warm therapist in <br/> their life. It hasn't just helped me, but everyone else in my life who gets to interact <br/> with a much more grounded me."<br/><br/>~Nihal,22</pre>
                            </div>
                            <div className="carousel-item" >
                                <pre className="pt-5 pb-5" style={{fontSize:"23px", textAlign:"center", color:"#555555", fontFamily:"Times New Roman, Times, serif" , inlineSize: "none", lineHeight: "30px", opacity: "0.9"}}>"Even before I went for my first session through Therapize, I felt so confident about <br/> my therapist choice. He was so clear and calm even in the informational video and I <br/>instantly felt comfortable while listening to him. Being able to see multiple therapists' <br/> styles before choosing one was also so helpful."<br/><br/>~Devika,34</pre>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" style={{backgroundColor:"#555555", opacity:"0.3" , height:"40px", width: "40px", borderRadius:"50%"}}></span>
                </button>
                <button className="carousel-control-next" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon" style={{backgroundColor:"#555555", opacity:"0.3" , height:"40px", width: "40px", borderRadius:"50%"}}></span>
                </button>
            </div>
            <br/><br/>
         </div>

         <div className="container mt-5 pb-5 wrapper1" id="divn">
            <div className="pt-5" id="divn1">Upto 30% Discount for The First Commers</div>
            <div className=" pt-4" id="divn2">Far far away, behind the word mountains, far from the countries <br/> Vokalia and Consonantia, there live the blind texts.</div>
            <div className="pt-4" style={{textAlign: "center"}}><Link to={'/service'} ><button id="divnb">Contact Us</button></Link></div>
        </div>

        <div className="container-fluid mt-5 pb-5" style={{backgroundColor:"#DEECF1",height:"auto",width:"100%",overflow:"hidden"}}>
            <div className="pt-5" id="pr1">Not ready for therapy yet? <br/> Join our community in the meanwhile</div>
            <div className="mt-4" id="pr2">We're building a community that is a safe space for your most tender, messy, and <br/> vulnerable parts. We constantly share new content via blog posts and free resources <br/> so stay tuned.</div>
            <div className="responsive pt-5 pl-5 pr-5">
                <div className="gallery">
                    <img src={img5} className="image" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} alt="Cinque Terre" width="300" height="300"/>
                    <div className="middle">
                        <div className="text">send this to the friend you've been <br/> struggling with to remind each other <br/> what you deserve 😓 💘 .. <br/> #depressionawareness #motivationnation  <br/>  #motivationalwords #motivationalpost <br/> #mentalwellness  #mindsetmatters <br/>#selfgrowth  #mentalhealth <br/> #encourageothers  #anxiety <br/> #recoveryquotee <br/> April 27, 2023</div>
                    </div>
                </div>
            </div>

            <div className="responsive pt-5 pl-5 pr-5">
                <div className="gallery">
                    <img src={img8} style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} alt="Cinque Terre" width="300" height="300"/>
                    <div className="middle">
                        <div className="text">in case no one asked you today, <br/> how was your day and how is your heart? <br/> 💙 . . . . #depressionawareness #motivationnation #motivationalwords #motivationalpost  #mentalwellness #mindsetmatters #encourageothers #anxiety #recoveryquotes #deepquotes #selfesteem #positivequotes #bodymindsoul #takeadeepbreath #emotionalhealth #mindfulliving.... <br/> Sep 1 2023.</div>
                    </div>
                </div>
            </div>

            <div className="responsive pt-5 pl-5 pr-5">
                <div className="gallery">
                    <img src={img6} style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} width="300" height="300" alt=""/>
                    <div className="middle">
                        <div className="text">send this to someone that needs it <br/> and let us know how you're feeling <br/> today in the comments- 💙 not <br/> feeling so good 💚 trying to be okay <br/> with my emotional needs 💜 feeling <br/> grateful 💛 feeling lost and <br/> confused, figuring it out! <br/> @worry__lines .⠀ .⠀ #southasian <br/> #desi #therapy #mentalhealth <br/> #selfcare #anxiety <br/>Decamber 5 2023.</div>
                    </div>
                </div>
            </div>

            <div className="responsive pt-5 pl-5 pr-5">
                <div className="gallery">
                    <img src={img7} style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} width="300" height="300" alt=""/>
                    <div className="middle">
                        <div className="text">healing is SOO hard and the journey <br/> is never over. link in bio if you're <br/> struggling rn and looking for some <br/> professional support ❤️ . . <br/>#reelinstagram #mentalhealth <br/> #psychology #reelkarofeelkaro <br/>  #psychology #southasian <br/>February 17, 2023</div>
                    </div>
                </div>
            </div>

            <div className="responsive pt-5 pl-5 pr-5">
                <div className="gallery">
                    <img src={img9} style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} width="300" height="300" alt=""/>
                    <div className="middle">
                        <div className="text">send this to someone who <br/> NEEEEDSSS to hear this today 🤧 <br/> 🤧 . . #depressionawareness <br/> #motivationnation <br/> #motivationalwords <br/> #motivationalpost #selfgrowth <br/> #mentalhealth #mentalwellness <br/> #mindsetmatters #encourageothers <br/> #anxiety #recoveryquotes <br/> #deepquotes #selfesteem <br/>March 22 2022.</div>
                    </div>
                </div>
            </div>

            <div className="responsive pt-5 pl-5 pr-5">
                <div className="gallery">
                    <img src={img10} style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} width="300" height="300" alt=""/>
                    <div className="middle">
                        <div className="text">send this to someone who you're <br/> currently cheering on to let them <br/> know how loved they are 💙 . . 📸: <br/> @howtobehumanpod . .  <br/> #depressionawareness <br/> #motivationnation <br/> #motivationalwords <br/> #motivationalpost #selfgrowth <br/> #mentalhealth #mentalwellness <br/> #mindsetmatters #encourageothers <br/> january 27 2023.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project
