import React from 'react'

function Footer() {
    return (
        <div>
            <footer className='footer-wrapper'>
                <div class="container">
                    <div class="upper-text-container"></div>
                    <div class="footer-links-wrapper row">
                        <div class="links-wrapper-1 col-sm-12 col-md">
                            <h3> shop and learn</h3>
                            <ul>
                                <li><a href="#">Nac</a></li>
                                <li><a href="#">iPad</a></li>
                                <li><a href="#">iPhone</a></li>
                                <li><a href="#">Watch</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">Music</a></li>
                            </ul>
                        </div>
                        <div class="links-wrapper-2 col-sm-12 col-md">
                            <h3>services</h3>
                            <ul>
                                <li><a href="#">Apple Nusic</a></li>
                                <li><a href="#">Apple News+</a></li>
                                <li><a href="#">Apple TV+</a></li>
                                <li><a href="#">Apple Arcade</a></li>
                            </ul>
                        </div>
                        <div class="links-wrapper-3 col-sm-12 col-md">
                            <h3>Apple Store</h3>
                            <ul>
                                <li><a href="#">Find a store</a></li>
                                <li><a href="#">Genius Bar</a></li>
                                <li><a href="#">Today at Apple</a></li>
                                <li><a href="#">Apple Camp</a></li>

                                <li><a href="#">Shopping Help</a></li>
                            </ul>
                        </div>
                        <div className="links-wrapper-4 col-sm-12 col-md">
                            <h3>For Buisiness</h3>
                        </div>
                    </div>

                    <div className="copyright-wrapper row">
                        <div
                            className="
                      copyright
                      col-sm-12
                      order-2
                      col-nd-8
                      order-md-1
                      col-lg-4
                      order-lg-1
                      "
                        >
                            copyright &copy; 2020 Apple Inc. All rights reserved.
                        </div>
                        <div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
                            <ul>
                                <li><a href="#">Priacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Sales and Refunds</a></li>
                                <li><a href="#">Legal</a></li>
                                <li><a href="#">Site Nap</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer