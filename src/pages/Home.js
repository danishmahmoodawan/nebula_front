
import { useState, useEffect } from 'react';
function Home() {
    
  return (
   <> 
   <div className="container-fluid bg-nav">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="/"><img className="logo_s" src="assets/images/logo.png"/></a>
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
                            <a className="nav-link" href="#roadmap">How To Buy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://docs.nebulanodes.finance">Docs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Dapp">Dapp</a>
                        </li>
                         
                    </ul>
                    
                    <span className="navbar-text" >
                            <a href="https://medium.com/@wearenebulan" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/icon/medium_icon.png"/>
                            </a>
                            <a href="https://twitter.com/NebulaNodes" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/icon/icon_twitter.svg"/>
                            </a>
                            <a href="https://discord.com/invite/dk8pCznAJP" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/icon/icon_discord.svg"/>
                            </a>
                           
                    </span>

                    
                </div>
            </nav>
        </div>
        <section id="About_nebula " className="first_sec ">
	<div id="home" className="container  nebula_sec">
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
                <span className="circledot"></span>
                <section id="overseer " className="second_sec ">
	<div className="container  nebula_sec">
		<div className="row">
			<div className="col-sm-12 col-md-12 col-lg-12">
            <h1 className="h1_heading set_font">The Overseer </h1>
            <p className="para_p  ">
Our protocol is watched meticulously by our Overseer System day <br/>and night. Keeping your mind at ease as it buys on the
 lower peg  <br/> and sells on the upper peg,  ensuring the price doesn't skyrocket or <br/>collapse! Meanwhile filling the
  Liquidity pool and itself to ensure a <br/>smooth price bound token.

            </p>
           <div className="btn_soc">
            <a  className="btn_ion" href="https://docs.nebulanodes.finance" target={{target:"_blank"}}>
            link to docs </a>
             </div>
				</div>
				</div>
				</div>
                </section>
                <span className="dimonds"></span>
                <section id="About_nebula " className="third_sec ">
	<div id="tokenmics" className="container  nebula_sec">
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
            <div className="btn_soc">
                              <a  className="btn_ion" href="https://traderjoexyz.com/trade?outputCurrency=0x5AA2Ff4Ab706307d8B3D90A462c1ddC055655734#/" target={{target:"_blank"}}>
                            Buy on Trader Joe </a>
                           </div>
				</div>
                <div className="col-sm-12 col-md-12 col-lg-2"> 
                <img className="image_ad" src="assets/images/sec3inner.png" />
                </div>
				</div>
				</div>
                </section>

                <section id="map_nebula " className="map_sec ">
	<div id="roadmap" className="container-fluid ">
		<div className="row">
			<div className="col-sm-12 col-md-12 col-lg-12 text-center p-0">
            <h1 className="h1_heading set_font"> Roadmap</h1>                      
				</div>
				</div>
                <div className="row">
			<div className="col-sm-12 col-md-12 col-lg-12 p-0">
            <img className="" src="assets/images/svgnewa.png" />    
   
				</div>
				</div>
				</div>
                </section>


                <footer>
                <section id="footer_nebula " className="footer_sec ">
	<div className="container-fluid ">
		<div className="row">
			<div className="col-sm-12 col-md-4 col-lg-2 text-center p-0">
            <a className="navbar-brand navbar-footer" href="/"><img className="logo_s" src="assets/images/logo.png"/></a>                 
				</div>
                <div className="col-sm-12 col-md-4 col-lg-5 text-center p-0">
                          
				</div>
                <div className="col-sm-12 col-md-4 col-lg-2 text-center p-0">
        <div className="footer_links">
        <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tokenmics">Tokenomics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#roadmap">How To Buy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://docs.nebulanodes.finance">Docs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Dapp">Dapp</a>
                        </li>
                        
                    </ul>
          </div>        
				</div>
               
</div>
<div className="row icons_footer"> 
<div className="col-sm-12 text-right ">
<span className="navbar-text " >
                            <a href="https://medium.com/@wearenebulan" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/icon/medium_icon.png"/>
                            </a>
                            <a href="https://twitter.com/NebulaNodes" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/icon/icon_twitter.svg"/>
                            </a>
                            <a href="https://discord.com/invite/dk8pCznAJP" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/icon/icon_discord.svg"/>
                            </a>
                           
                    </span>
</div>
</div>
				</div>
                </section>
                    </footer>
	</>
  );
}

export default Home;
