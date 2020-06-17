import Head from 'next/head';
import Background from '../components/Background';
import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

export default function Home() {
  
  return (
    <div> 
      <Head>
        <title>Dominik Eisert </title>
      </Head>

      <div className="section">
      <main className="grid-container">
        <div className="pictureLeft">
          <img className="bPic" src="/pic.jpg" alt="Bewerbungsfoto in Schwarz Weiß" />
        </div>
        <div className="contentRight">
          <button className ="aboutMeButton">About Me </button>
          <button className="cvButton">CV</button>
          <button className="contactMeButton">Contact Me</button>  
        

        <div className="aboutMe">
          <h2>I am studying E-Commerce in Würzburg at the Fachhochschule Würzburg-Schweinfurt (FHWS) and currently I am in my 4th semester.</h2>
        </div>
        <div className="cv"></div>
        <div className="ContactMe"></div>
      
        </div>
        {/* <Background/> */}
      </main>
      </div>
      <div className ="section">
      <p>test</p>
      </div>
       <footer>
        <p>This website was made using React and <a href="https://nextjs.org">Next.js</a>.</p>
      </footer> */}

      <style jsx>{`

      .grid-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        overflow: auto; 
      }

        .pictureLeft { 
          grid-area: 1 / 1 / 6 / 3; 
          background: black; 
          height: 100vh; 
        }
        .contentRight { 
          grid-area: 1 / 3 / 6 / 6; 
          overflow: hidden; 
        }

          /* main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          */

        {/* .contentRight {
            width: calc(100% - 175px);
            left: 175px;
            height: calc(100% + 50px);
            float: left;
            position: relative;
        } */}

        .bPic {
          width: auto; 
          height: 50vh;
          border-radius: 60%;   
          margin-left: auto; 
          margin-right: auto; 
          display: flex; 
          overflow: scroll;
        } 

        img {
          overflow: hidden; 
        }

        footer {
          width: 100%;
          height: 5%;
          left: 0; 
          bottom: 0; 
          position: fixed; 
          text-align: center;
          background: #999999;
          font-size: big; 
        }

        a {
          color: blue;
          text-decoration: underline;
        }

        .title {
          text-align: center;
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .secondTitle {
            margin-top: 10%;
            text-align: center;  
        }
        
        footer:hover {
          background: #888888; 
        }

        /* .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        } */
        
        /* .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        } */
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
