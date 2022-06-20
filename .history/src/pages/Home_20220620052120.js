
import { useState, useEffect } from 'react';
function Home() {
    
  return (
   <> 
   <div className="container-fluid bg-nav">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#"><img className="logo_s" src="assets/images/logo.png"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tokenmics">Tokenomics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#buyying">How To Buy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#team">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#docs">Docs</a>
                        </li>
                        
                    </ul>
                    
                    <span className="navbar-text" >
                            <a href="https://twitter.com/zerozeronft" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/icon/medium_icon.png"/>
                            </a>
                            <a href="https://opensea.io/collection/zero-project" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/icon/icon_twitter.svg"/>
                            </a>
                            <a href="https://twitter.com/zerozeronft" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/icon/icon_discord.svg"/>
                            </a>
                           
                    </span>

                    
                </div>
            </nav>
        </div>
        <section id="About_nebula " className="first_sec ">
	<div className="container  nebula_sec">
		<div className="row">
			<div className="col-sm-12 col-md-12 col-lg-12">
            <h1 className="h1_head_sml">Welcome to</h1>
            <h1 className="h1_heading">Nebula </h1>
            <p className="para_p  ">Nebula is not just another node protocol, we are striving to <br/>
             have utility not just with our nodes, but by creating an entire<br/> ecosystem you can write home about!
            </p>
                          
				</div>
				</div>
				</div>
                </section>
                <span class="circledot"></span>
                <section id="About_nebula " className="second_sec ">
	<div className="container  nebula_sec">
		<div className="row">
			<div className="col-sm-12 col-md-12 col-lg-12">
            <h1 className="h1_heading set_font">The Overseer </h1>
            <p className="para_p  ">
Our protocol is watched meticulously by our Overseer System day <br/>and night. Keeping your mind at ease as it buys on the
 lower peg  <br/> and sells on the upper peg,  ensuring the price doesn't skyrocket or <br/>collapse! Meanwhile filling the
  Liquidity pool and itself to ensure a <br/>smooth price bound token.

            </p>
    
            <button className="btn_ion">
            link to docs
                            </button>    
				</div>
				</div>
				</div>
                </section>
                <span class="dimonds"></span>
                <section id="About_nebula " className="third_sec ">
	<div className="container  nebula_sec">
		<div className="row">
			<div className="col-sm-12 col-md-12 col-lg-10">
            <h1 className="h1_heading set_font"> Tokenomics</h1>
            <p className="para_p  ">-Total Supply : 1,200,000 NeFi Tokens <br/>
            - Payout : 0.1 of a token per day <br/>
            -Price per node : 10 NeFi tokens150,000<br/>
            Node Cap : 150,000<br/>
            </p>
            <p className="para_p  ">-To purchase our token head over to our in house swap located at <br/> http://swap.nebfi.io/ and purchase 10 NeFi tokens then goto our <br/>DApp to get your ticket to be a Nebulan!v

<br/>


            </p>
            <button className="btn_ion">
            Buy on Trader Joe
                            </button>
				</div>
                <div className="col-sm-12 col-md-12 col-lg-2"> 
                <img class="image_ad" src="assets/images/sec3inner.png" />
                </div>
				</div>
				</div>
                </section>

                <section id="map_nebula " className="map_sec ">
	<div className="container-fluid ">
		<div className="row">
			<div className="col-sm-12 col-md-12 col-lg-12 text-center p-0">
            <h1 className="h1_heading set_font"> Roadmap</h1>                      
				</div>
				</div>
                <div className="row">
			<div className="col-sm-12 col-md-12 col-lg-12 p-0">
            <img class="" src="assets/images/svgnew.png" />    
   
				</div>
				</div>
				</div>
                </section>


                <footer>
                <section id="footer_nebula " className="footer_sec ">
	<div className="container-fluid ">
		<div className="row">
			<div className="col-sm-12 col-md-4 col-lg-3 text-center p-0">
            <a className="navbar-brand" href="#"><img className="logo_s" src="assets/images/logo.png"/></a>                 
				</div>
                <div className="col-sm-12 col-md-4 col-lg-3 text-center p-0">
        <div class="footer_links">
          <span> </span>         
          </div>        
				</div>
				</div>
				</div>
                </section>
                    </footer>
	</>
  );
}

export default Home;
