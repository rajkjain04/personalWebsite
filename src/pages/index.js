import React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageSection from '../components/PageSection';
// import TerminalWindow from '../components/terminal/TerminalWindow';
import CallToAction from '../components/callToAction';

import CursiveLogo from '../images/cursive-yannis.svg';
import AchievementsSection from '../components/pageSections/AchievementsSection';
import EducationSection from '../components/pageSections/EducationSection';
import ExperienceSection from '../components/pageSections/ExperienceSection';
import SkillsSection from '../components/pageSections/SkillsSection';
import VolunteeringSection from '../components/pageSections/VolunteeringSection';
import ContactSection from '../components/pageSections/ContactSection';
import Footer from '../components/navigation/Footer';

const IndexPage = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <>
      <SEO title="Home" />

      {
        isMobile ? 
          (
            <Layout>
              <div className="container--fluid">
                <div className="container__row">
                  <div className="container__col-lg-5 container__col-md-12 container__col-sm-12">
                    <CallToAction/>
                  </div>

                  <div className="container__col-lg-7 container__col-md-12 container__col-sm-12">
                    {/* Landing Hone Screen section */}
                    <div className="is-deep-sky-blue-bg">
                      <PageSection>
                        <div className="text-align-center">
                          <img src={CursiveLogo} className="home-screen"/>
                        </div>
                      </PageSection>  
                    </div>

                    {/* Education Section */}
                    <div className="is-regal-blue-bg">
                      <PageSection>
                        <EducationSection/>
                      </PageSection>          
                    </div>

                    {/* Experience Section */}
                    <div className="is-green-bg">
                      <PageSection>
                        <ExperienceSection/>
                      </PageSection>           
                    </div>

                    {/* Skills Section */}
                    <div className="is-java-green-bg">
                      <PageSection>
                        <SkillsSection/>
                      </PageSection>          
                    </div>

                    {/* Achievements Section */}
                    <div className="is-supernova-yellow-bg">
                      <PageSection>
                        <AchievementsSection/>
                      </PageSection>          
                    </div>
                    
                    {/* Volunteering Section */}
                    <div className="is-pumpkin-orange-bg">
                      <PageSection>
                        <VolunteeringSection/>
                      </PageSection>          
                    </div>

                    {/* Contact Section */}
                    <div className="is-matisse-blue-bg">
                      <PageSection title="Contact">
                        <ContactSection/>
                      </PageSection>
                    </div>
                    <Footer/>
                </div>

                </div>
              </div>
            </Layout>
          ) :
          (
            <Layout>
              <div className="container--fluid">
                <div className="container__row">
                  <div className="container__col-lg-5 container__col-md-12 container__col-sm-12">
                    <CallToAction/>
                  </div>

                  <div className="container__col-lg-7 container__col-md-12 container__col-sm-12" style={{overflowY: 'scroll', height: '100vh' }}>
                    {/* Landing Hone Screen section */}
                    <div className="is-deep-sky-blue-bg">
                      <PageSection>
                        <div className="text-align-center">
                          <img src={CursiveLogo} className="home-screen"/>
                        </div>
                      </PageSection>  
                    </div>

                    {/* Education Section */}
                    <div className="is-regal-blue-bg">
                      <PageSection>
                        <EducationSection/>
                      </PageSection>          
                    </div>

                    {/* Experience Section */}
                    <div className="is-green-bg">
                      <PageSection>
                        <ExperienceSection/>
                      </PageSection>           
                    </div>

                    {/* Skills Section */}
                    <div className="is-java-green-bg">
                      <PageSection>
                        <SkillsSection/>
                      </PageSection>          
                    </div>

                    {/* Achievements Section */}
                    <div className="is-supernova-yellow-bg">
                      <PageSection>
                        <AchievementsSection/>
                      </PageSection>          
                    </div>
                    
                    {/* Volunteering Section */}
                    <div className="is-pumpkin-orange-bg">
                      <PageSection>
                        <VolunteeringSection/>
                      </PageSection>          
                    </div>

                    {/* Contact Section */}
                    <div className="is-matisse-blue-bg">
                      <PageSection title="Contact">
                        <ContactSection/>
                      </PageSection>
                    </div>
                    <Footer/>
                </div>

                </div>
              </div>
            </Layout>
          )
      }
      
    </>
  )
}

export default IndexPage;
