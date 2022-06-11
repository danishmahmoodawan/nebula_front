
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
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#pakaloloimg">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about_pakalolo">Tokenomics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pakalolo_faq">How To Buy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pakalolo_faq">Alphapaper</a>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>
        </div>
        <section id="About_nebula " className="first_sec ">
	<div className="container nebula_sec">
		<div className="row">
			<div className="col-sm-12 col-md-12 col-lg-12">
            <h1 className="h1_head_sml">Welcome to</h1>
            <h1 className="h1_heading">Nebula Front </h1>
            <p className="para_p p_ad pos_a">A Unique collection of 7,777 NFT trading cards on the <br />
            Ethereum blockchain. Every Card holds a different <br />
            rarity that grants you can access to the Runlife business <br />
            app & software among other exclusive perks, <br />
            giveaways, & events here at Runlife ranch.
            </p>
                            <a className="button_buy pos_a" href="https://twitter.com" target={{target:"_blank"}}>
                           BUY NOW 
                            </a>
				</div>
				</div>
				</div>
                </section>
	</>
  );
}

export default Home;
