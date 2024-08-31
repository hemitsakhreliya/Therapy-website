import React from 'react'
import './Faq.css'
import Navbar from './Navbar'
function Faq() {
  return (
    <div>
        <Navbar/>
      <div className="container-fluid mt-4 p-5 pb-5" id="p__1">
        <div className="container-fluid pb-5" id="p_2">
            <div className="pt-3 zo" id="p20">FAQs</div>
            <div id="accordin" style={{backgroundColor: "#EFE6DF"}}>
                <div className="card" style={{backgroundColor: "#EFE6DF", border:"2px solid #EFE6DF"}}>
                    <div className="card-header" style={{backgroundColor: "#EFE6DF"}}>
                        <a href="#collapseone" className="card-link" data-toggle="collapse" id="p21">What is Therapize?<span style={{marginLeft:"10px"}} className="dropdown-toggle"></span></a>
                    </div>
                    <div id="collapseone" className="collapse" data-parent="#accordin">
                        <div className="card-body" id="p22">Therapize is redefining the process of seeking mental healthcare in South Asia. The process <br/> of seeking therapy in India is extremely broken and fragmented. So we have curated a list <br/> of some of the most highly qualified, vetted, culturally sensitive and non-judgemental South <br/>Asian therapists under one roof. We have put together all the information that you require to <br/> help you make a decision on which therapist will be a good fit for you-- their work <br/>experience, qualifications, areas of specialisation,  primary approach and school of thought, <br/> session fees, and languages that they are fluent in.</div>
                    </div>
                </div>
                <div className="card pt-3" style={{backgroundColor: "#EFE6DF", border:"2px solid #EFE6DF"}}>
                    <div className="card-header" style={{backgroundColor: "#EFE6DF"}}>
                        <a href="#collapsetwo" className="card-link" data-toggle="collapse" id="p21">Who runs Therapize, and what does the team look like?<span style={{marginLeft:"10px"}} className="dropdown-toggle"></span></a>
                    </div>
                    <div id="collapsetwo" className="collapse" data-parent="#accordin">
                        <div className="card-body" id="p22">Check out our About Us page to get to know the people behind this vision. We'd love to <br/> connect with like-minded folks!                        </div>
                    </div>
                </div>
                <div className="card pt-3" style={{backgroundColor: "#EFE6DF", border:"2px solid #EFE6DF"}}>
                    <div className="card-header" style={{backgroundColor: "#EFE6DF"}}>
                        <a href="#collapsethree" className="card-link" data-toggle="collapse" id="p21">What kind mental health professionals can I find on this platform?<span style={{marginLeft:"10px"}} className="dropdown-toggle"></span></a>
                    </div>
                    <div id="collapsethree" className="collapse" data-parent="#accordin">
                        <div className="card-body" id="p22">Our repository of therapists comprises of counselling psychologists and clinical <br/> psychologists. Counselling Psychologists help clients cope with emotional, social and <br/> physical stressors in their lives. Clinical Psychologists are trained in the diagnosis, <br/> intervention, treatment and prevention of more severe mental disorders. <br/><br/>We currently don't have Psychiatrists on our platform, i.e. medical professionals who <br/> specialise in mental health. Psychiatrists are qualified to prescribe medication and assist <br/> with management of medication. But don't worry, based on the nature and severity of your <br/> concerns, the therapist you reach out to via Therapize will be trained and qualified to know <br/> if they need to refer you to a psychiatrist.  </div>
                    </div>
                </div>
                <div className="card pt-3" style={{backgroundColor: "#EFE6DF", border:"2px solid #EFE6DF"}}>
                    <div className="card-header" style={{backgroundColor: "#EFE6DF"}}>
                        <a href="#collapsefour" className="card-link" data-toggle="collapse" id="p21">How can I get in touch with a therapist to book a session?<span style={{marginLeft:"10px"}} className="dropdown-toggle"></span></a>
                    </div>
                    <div id="collapsefour" className="collapse" data-parent="#accordin">
                        <div className="card-body" id="p22">We have simplified the process of reaching out to a therapist for you and made it super <br/> easy for you to contact a therapist of your choice. You can simply browse through our <br/> extensive repository of therapists under the 'Find a Therapist' tab, view individual therapist <br/> profiles and then reach out to a therapist that you feel may be a good fit for you. Each <br/> therapists' contact details and preferred mode of contact (email, call, SMS, or WhatsApp) <br/> can be found their individual profiles.</div>
                    </div>
                </div>
                <div className="card pt-3" style={{backgroundColor: "#EFE6DF", border:"2px solid #EFE6DF"}}>
                    <div className="card-header" style={{backgroundColor: "#EFE6DF"}}>
                        <a href="#collapsefive" className="card-link" data-toggle="collapse" id="p21">Through what medium will my therapy session be conducted?<span style={{marginLeft:"10px"}} className="dropdown-toggle"></span></a>
                    </div>
                    <div id="collapsefive" className="collapse" data-parent="#accordin">
                        <div className="card-body" id="p22">Each therapist offers different options and mediums through which your session can be <br/> conducted -- In Person, Zoom, Skype, Google Meets or Whatsapp Call.  Check out their <br/> individual profiles to view details about their medium of practice and take your pick!</div>
                    </div>
                </div>
                <div className="card pt-3" style={{backgroundColor: "#EFE6DF", border:"2px solid #EFE6DF"}}>
                    <div className="card-header" style={{backgroundColor: "#EFE6DF"}}>
                        <a href="#collapsesix" className="card-link" data-toggle="collapse" id="p21">What are modes of payment I can use to pay my therapist for the session?<span style={{marginLeft:"10px"}} className="dropdown-toggle"></span></a>
                    </div>
                    <div id="collapsesix" className="collapse" data-parent="#accordin">
                        <div className="card-body" id="p22">All payments of session fees are to be made between you and the therapist separately, <br/> independent of Therapize. We are simply here to help therapy seekers seamlessly connect <br/> with mental health professionals of their choice in a personalized manner. </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid" id="p3">
        <div className="pt-4" id="p31">Get in touch!</div>
        <div className="pt-3" id="p32">We know reaching out for help can be daunting, and we're here with you every step of the way. In <br/> case you're looking for support, please contact us through the links below. <br/><br/>If you are a therapy seeker and have a query, please reach out to us at support@therapizeindia.com <br/><br/>If you want to partner/collaborate with us, please reach out to us partnerships@therapizeindia.com <br/><br/> <span style={{fontStyle: "italic", fontSize:"20px"}}>At present, we aren't looking to onboard new therapists onto our platform</span></div>
    </div>
    </div>
  )
}

export default Faq
