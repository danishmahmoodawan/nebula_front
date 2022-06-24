import React from 'react';
  
const Dapp = () => {
  return (
    <div>
    
    <section className="tabs-section text-white">
         <div className="container">
            <div className="row">
               <div className="col-sm-5 col-lg-3 col_side">
                  <ul className="nav nav-tabs flex-column mb-3">
                     <li className="nav-item">
                        <a className="nav-link active show" data-toggle="tab" href="#tab-1">Dashboard</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab-2">Nodes</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab-3">NFTs</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab-4">Swap</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab-5">Bridge</a>
                     </li>
                  </ul>
               </div>
               <div className="col-sm-7 col-lg-9">
                  <div className="tab-content">
                     <div className="tab-pane active show" id="tab-1">
<div className="container cont_dash">
<div className="row">
<div className="col-sm-4">
<div className="content_div">
<span className="elem_span">$Nebula Price</span>
<span className="elem_span elem_bold">$0.0000</span>
<span className="elem_span elem_sub">+0.00٪ last 24 hours</span>
</div>
</div>
<div className="col-sm-4">
<div className="content_div">
<span className="elem_span">Market Cap</span>
<span className="elem_span elem_bold">$0.0000</span>
<span className="elem_span elem_sub">+0.00٪ last 24 hours</span>
</div>
</div>

<div className="col-sm-4">
<div className="content_div">
<span className="elem_span">Overseas Fund</span>
<span className="elem_span elem_bold">$0.0000</span>
<span className="elem_span elem_sub">+0.00٪ last 24 hours</span>
</div>
</div>
</div>
</div>
<div className="container cont_dash">
<div className="row">
<div className="col-sm-4">
<div className="content_div">
<span className="elem_span">All Nodes</span>
<span className="elem_span elem_bold">0</span>
</div>
</div>
<div className="col-sm-4">
<div className="content_div">
<span className="elem_span">My Nodes</span>
<span className="elem_span elem_bold">-/-</span>
</div>
</div>

<div className="col-sm-4">
<div className="content_div">
<span className="elem_span">My Rewards</span>
<span className="elem_span elem_bold">-$nebula</span>

</div>
</div>
</div>
</div>
<div className="container cont_dash">
<div className="row ">
<div className="col-sm-6">
<div className="">
<img class="" src="assets/images/bar_image.png" />
</div>
</div>
<div className="col-sm-6">
<div className="col-sm-12 p-0">
<div className="content_div marsets">
<span className="elem_span">Node ROI in $nebula (Days)</span>
<span className="elem_span elem_bold mb-3">infinity</span>
</div>
</div>

<div className="col-sm-12 p-0">
<div className="content_div marset">
<span className="elem_span">Daily reward per node </span>
<span className="elem_span elem_bold mb-3">0.00 $nebula</span>
</div>
</div>
</div>
</div>
</div>


                                            </div>
                     <div className="tab-pane" id="tab-2">
                        <div className="row">
                           <div className="col-sm-12">
<div class="main_node">
<h3>Nodes</h3>
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>

</form> 
</div>

                               </div>
                        </div>
                     </div>
                     <div className="tab-pane" id="tab-3">
                        <div className="row">
                           <div className="col-lg-4">
                              <div className="feature-img">
                                 <img src="images/user-img-1.jpg" alt="" className="img-fluid" />
                              </div>
                           </div>
                           <div className="col-lg-8 details">
                              <h3 className="mt-3">Why do we use it?</h3>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane" id="tab-4">
                        <div className="row">
                           <div className="col-lg-4">
                              <div className="feature-img">
                                 <img src="images/user-img-3.jpg" alt="" className="img-fluid" />
                              </div>
                           </div>
                           <div className="col-lg-8 details">
                              <h3 className="mt-3">Where does it come from?</h3>
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old</p>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane" id="tab-5">
                        <div className="row">
                           <div className="col-lg-4">
                              <div className="feature-img">
                                 <img src="images/user-img-2.jpg" alt="" className="img-fluid" />
                              </div>
                           </div>
                           <div className="col-lg-8 details">
                              <h3 className="mt-3">Where can I get some?</h3>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane" id="tab-6">
                        <div className="row">
                           <div className="col-lg-4">
                              <div className="feature-img">
                                 <img src="images/user-img-1.jpg" alt="" className="img-fluid" />
                              </div>
                           </div>
                           <div className="col-lg-8 details">
                              <h3 className="mt-3">Why do we use it?</h3>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>



    </div>
  );
};
  
export default Dapp;