
import React from 'react'
import facebook_logo from '../assets/img/logo-facebook.png'
import linkedin_logo from '../assets/img/logo-linkedin.png'
import '../assets/styles/components/Footer.scss'

const Footer = () => (
    <footer className="page-footer font-small blue pt-4 pb-4 footer-app-color ">
        <div className="container-fluid text-center text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase"><strong>Kronosoft México</strong></h5>
                    <p className="p-0 m-0">Copyright © 2020 Kronosoft México</p>
                    <p>Hixo Scholar - Version 0.0 - July 2020</p>
                </div>
                <hr className="clearfix w-100 d-md-none pb-3 " />
                <div className="col-md-6 mb-md-0 mb-3 ml-auto">
                    <ul className="list-group list-group-horizontal">
                        <li className="m-2 list-group-item list-group-item-dark">
                            <img alt="logo de facebook" src={facebook_logo} /> 
                        </li>
                        <li className="m-2 list-group-item list-group-item-dark">
                            <img alt="logo de linkedin" src={linkedin_logo}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer