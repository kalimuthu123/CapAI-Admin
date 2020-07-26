import React, { Component, Fragment } from 'react'

import { Collapse } from 'react-bootstrap'
import { connect } from 'react-redux';

import { NavLink, Router } from 'react-router-dom'

import profile from '../assets/images/profile.jpg'
import createBrowserHistory from 'history/createBrowserHistory'
import header from './header';
import Ripple from '../components/ripple'
import Scrollbar from '../components/scrollbar'
const sidebarHelper = require('../helper/sidebar').sidebarHelper
const helper = require('../helper/helper').helper


const history = createBrowserHistory()

class SideBar extends Component {
	constructor(props) {
		super(props);
		const extract_path = history.location.pathname.toString().split("/")
		this.state	=	{
			location: extract_path[1],
			profile: false,
			"sample-pages": extract_path[1] == "sample-pages" ? true : false,
			level_1: false,
			level_2: false,
			level_3: false,
			level_4: false
		}
	}
	componentWillReceiveProps(nextProps) {
		const extract_path = nextProps.state.toString().split("/")
		this.setState({
			location: extract_path[1]
		})
		
		this.resetState(extract_path[1])
	}

	dropheader(){
		this.setState({
			profile: !this.state.profile
		})
		setTimeout(() => {
			if (this.state.profile) {
				document.getElementById("for-scroll").scrollTop = "0px"
			}
		}, 10)
	}
	toggleSubmenu(event){
		let target = event.target.nodeName == "A" ? event.target : helper.parents("A", event.target);
		target.parentNode.classList.toggle("toggled")
		this.setState({
			[target.name]: !this.state[target.name]
		})
	}
	resetState(notInclude) {
		["tables", "widgets", "forms", "user-interface", "gallery", "pages", "level_1", "level_2", "level_3", "level_4"].forEach((e, i) => {
			if (e != notInclude) {
				this.setState({
					[e]: false
				})
			}
		})
		
	}
	setScrollerRef(ref) {}
	render() {
		return (
			<Fragment>
				<aside id="sidebarContainer">
					<Ripple type="div" className="aside-profile" onClick={this.dropheader.bind(this)}>
						<img src={profile}/>
						<div className="labeled">
							<div className="name ellipsis">CapAI</div>
							<div className="email ellipsis">admin@capai.com</div>
						</div>
						<div className="header-dropdown-icon">
							<i className={`${this.state.profile ? "rotate" : ""} zmdi zmdi-chevron-down zmdi-hc-fw`}></i>
						</div>
					</Ripple>
					<Scrollbar type="nav" id="for-scroll" recieveRef={this.setScrollerRef} >
						<ul className="list-unstyled">
							<Collapse in={this.state.profile}>
								<div className="aside-dropdown">
								    <ul className="list-unstyled">
										<li>
										    <a>
										    <i className="zmdi zmdi-account"></i>
											<span>Profile</span>
											</a>
										</li>
										<li>
										    <a>
										    <i className="zmdi zmdi-time-restore"></i>
											<span>Logout</span>
											</a>
										</li>
									</ul>
								</div>
							</Collapse>
							<li>
								<NavLink to={`/`} activeClassName="active" exact strict={true}>
									<div className="icon-circle">
										<i className="zmdi zmdi-home"></i>
									</div><span>Home</span>
								</NavLink>
							</li>
                            <li>
								<NavLink to={`/bot/bot-list`} strict>
									<div className="icon-circle">
										<i className="zmdi  zmdi-accounts-outline"></i>
									</div><span>Bots</span>
								</NavLink>
							</li>
							<li>
								<NavLink to={`/response/bot-response`} strict>
									<div className="icon-circle">
										<i className="zmdi  zmdi-comment-more"></i>
									</div><span>Responses</span>
								</NavLink>
							</li>
			                <li>
								<NavLink to={`/stories/bot-stories`} strict>
									<div className="icon-circle">
										<i className="zmdi zmdi-nature"></i>
									</div><span>Stories</span>
								</NavLink>
							</li>
							<li>
								<NavLink to={`/training/bot-training`} strict>
									<div className="icon-circle">
										<i className="zmdi zmdi-graduation-cap"></i>
									</div><span>Trainings</span>
								</NavLink>
							</li>
							<li>
								<NavLink to={`/models`} strict>
									<div className="icon-circle">
										<i className="zmdi zmdi-layers"></i>
									</div><span>Models</span>
								</NavLink>
							</li>
							<li>
								<NavLink to={`/chat/chatbot`} strict>
									<div className="icon-circle">
										<i className="zmdi zmdi-comments"></i>
									</div><span>Chat</span>
								</NavLink>
							</li>
							<li>
								<NavLink to={`/Settings`} strict>
									<div className="icon-circle">
										<i className="zmdi zmdi-settings"></i>
									</div><span>Settings</span>
								</NavLink>
							</li>
							<li>
								<NavLink to={`/log/log-list`} strict>
									<div className="icon-circle">
										<i className="zmdi zmdi-layers"></i>
									</div><span>Logs</span>
								</NavLink>
							</li>
							<li>
								<NavLink to={`/Configurations`} strict>
									<div className="icon-circle">
										<i className="zmdi zmdi-layers"></i>
									</div><span>Configurations</span>
								</NavLink>
							</li>
							<li className={`${this.state["sample-pages"] ? "toggled" : ""} sub-menu`}>
								<a className={`${this.state["sample-pages"] && this.state.location == "sample-pages" ? "active" : ""} `} onClick={(e) => { this.toggleSubmenu(e) }} name="sample-pages">
									<div className="icon-circle">
										<i className="zmdi zmdi-collection-bookmark"></i>
									</div><span>Pages</span>
								</a>
								<Collapse in={this.state["sample-pages"]}>
									<ul className="list-unstyled">
										<li>
											<NavLink className="sub" to={`/sample-pages/profile`} activeClassName="active">Profile</NavLink>
										</li>
										<li className="hidden">
											<a className="sub">Contacts</a>
										</li>
										<li className="hidden">
											<a className="sub">Invoice</a>
										</li>
										<li className="hidden">
											<a className="sub">Wall</a>
										</li>
										<li>
											<NavLink className="sub" to={`/login`}>Login</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/signup`}>Sign Up</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/forgot-password`}>Forgot Password</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/loginSecond`}>Login 2 and Sign Up 2</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/lock-screen`}>Lock Screen</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/page404`}>Error 404</NavLink>
										</li>
									</ul>
								</Collapse>
							</li>
						</ul>
						<div className="bottom-collapser">
							<div className="bottom-toggler" onClick={ sidebarHelper.expandNav } >
								<i className="zmdi zmdi-chevron-right"></i>
							</div>
						</div>
					</Scrollbar>
				</aside>
				<div className="overlay" onClick={sidebarHelper.expandNavHead} ></div>
			</Fragment>
		);
	}
}
function mapStateToProps(state) {
	return {
		users: state.users
	};
}
export default connect(mapStateToProps)(SideBar)