import React from 'react';
import Popup from '../../Popup';
import './styles.css';

const About = () => {
  return <div id="about-container">
    <p><em>Last Updated: November 1, 2019</em></p>
    <p>Hi, my name is Johee. I grew up in Central Massachusetts (USA) and now I live in Portland, Oregon (USA).</p>
    <p>I have several hobbies and interests, and so I decided to carve out a little space on the internet to store my thoughts about them.</p>
    <h2>Lifestyle</h2>
    <p>I have one dog (chocolate lab/pitbull mix) and a cat. My dog was adopted from Austin Pets Alive, and for a short period of time, I worked for Houston Pets Alive.</p>
    <p>In this section, I plan to just talk about my day to day, including the new skincare regimen I'm testing out.</p>
    <h2>Roller Derby</h2>
    <p>I started my derby career playing banked track with Southside Roller Derby in Houston, Texas in December 2017.</p>
    <p>Later, I practiced with Worcester Roller Derby in Massachusetts while taking care of my mom for a couple of weeks. This kicked of my immersion into the world of flat track roller derby.</p>
    <p>Moving to Portland, Oregon, I started practicing with the Rose City Rollers in March 2019.</p>
    <p>With the number of skaters in the league and the highly competitive environment, I wasn't getting a lot of play time. Fortunately, I can get more track time with skaters I love by also playing on the Alter Egos.</p>
    <h2>Finance</h2>
    <p>I have no qualifications that make any of the things I say reliable. I just have an obsession with <em>Afford Anything</em> and a keen interest in pursuing FIRE (financial independence/retire early) in an effort to be financially stable.</p>
    <p>My own strong opinions on side hustling, index vs mutual funds, and frugality are pretty much stolen from Paula Pant. So I will be writing what ever seems to peak my interest at the time, but you may just want to go to the source and check out her podcast, <em>Afford Anything</em>.</p>
    <h2>Tech</h2>
    <p>I am currently working as a Senior Software Engineer. I started as a self-taught developer and landed a job as a consultant (Junior Developer after 3 months) after studying in the early morning and late into the night at a less than minimum wage job for a year. Since that time, I've worked at a radiology SaaS start-up, as a consultant for oil/gas companies, and as an in-house developer for a web commerce site.</p>
    <p>JavaScript and React are my bread and butter. I studied algorithms and data structures for a semester at Tufts University and love nerding about time/space complexity. Lately, I've been picking up tickets that deal with AWS tech (CloudFormation, S3 (CRR), etc).</p>
    <p>I created this website using React for the frontend and surge to deploy the static site.</p>
  </div>;
};

export default Popup(About)('/about');
