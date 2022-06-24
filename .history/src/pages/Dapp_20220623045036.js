import React from 'react';
  
const Dapp = () => {
  return (
    <div>
    
    <section class="tabs-section text-white">
         <div class="container">
            <div class="row">
               <div class="col-sm-5 col-lg-3">
                  <ul class="nav nav-tabs flex-column mb-3">
                     <li class="nav-item">
                        <a class="nav-link active show" data-toggle="tab" href="#tab-1">Lorem Ipsum?</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tab-2">Do we use it?</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tab-3">come from?</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tab-4">Can I get some?</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tab-5">Lorem Ipsum text?</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tab-6">Can we use it?</a>
                     </li>
                  </ul>
               </div>
               <div class="col-sm-7 col-lg-9">
                  <div class="tab-content">
                     <div class="tab-pane active show" id="tab-1">
                        <div class="row">
                           <div class="col-lg-4">
                              <div class="feature-img">
                                 <img src="images/user-img-3.jpg" alt="" class="img-fluid" />
                              </div>
                           </div>
                           <div class="col-lg-8 details">
                              <h3 class="mt-3">What is Lorem Ipsum?</h3>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane" id="tab-2">
                        <div class="row">
                           <div class="col-lg-4">
                              <div class="feature-img">
                                 <img src="images/user-img-2.jpg" alt="" class="img-fluid" />
                              </div>
                           </div>
                           <div class="col-lg-8 details">
                              <h3 class="mt-3">Why do we use it?</h3>
                              <p class="font-italic">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane" id="tab-3">
                        <div class="row">
                           <div class="col-lg-4">
                              <div class="feature-img">
                                 <img src="images/user-img-1.jpg" alt="" class="img-fluid" />
                              </div>
                           </div>
                           <div class="col-lg-8 details">
                              <h3 class="mt-3">Why do we use it?</h3>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane" id="tab-4">
                        <div class="row">
                           <div class="col-lg-4">
                              <div class="feature-img">
                                 <img src="images/user-img-3.jpg" alt="" class="img-fluid" />
                              </div>
                           </div>
                           <div class="col-lg-8 details">
                              <h3 class="mt-3">Where does it come from?</h3>
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane" id="tab-5">
                        <div class="row">
                           <div class="col-lg-4">
                              <div class="feature-img">
                                 <img src="images/user-img-2.jpg" alt="" class="img-fluid" />
                              </div>
                           </div>
                           <div class="col-lg-8 details">
                              <h3 class="mt-3">Where can I get some?</h3>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane" id="tab-6">
                        <div class="row">
                           <div class="col-lg-4">
                              <div class="feature-img">
                                 <img src="images/user-img-1.jpg" alt="" class="img-fluid">
                              </div>
                           </div>
                           <div class="col-lg-8 details">
                              <h3 class="mt-3">Why do we use it?</h3>
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