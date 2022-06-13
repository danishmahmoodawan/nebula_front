
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
            <h1 className="h1_heading">Nebula Front </h1>
            <p className="para_p  ">Nebula is not just another node protocol, we are striving to <br/>
             have utility not just with our nodes, but by creating an entire<br/> ecosystem you can write home about!
            </p>
                          
				</div>
				</div>
				</div>
                </section>
                
	</>
  );
}

export default Home;
