import React, { Component, Fragment } from 'react'
import ModuleHeader from '../../../common/module-header'
import { Input, Textarea, Select, AddOn } from '../../../components/input'
//const sqlite3 = require('sqlite3').verbose();
//import * as bot from '../../../server/db/bots';
//sqlite connection
//import db from '../../../server/db/db';
//mysql connection
//import db from '../../../server/db/db';

import Ripple from '../../../components/ripple';
import Switch from '../../../components/switch'
import { 
	Row, Col, ButtonToolbar, ToggleButtonGroup, ToggleButton, 
	OverlayTrigger, Carousel, Collapse, Well, Clearfix, MenuItem, 
	Pagination, Pager, Popover, ProgressBar, Tabs, Tab, Tooltip ,NavDropdown } from 'react-bootstrap';

import Paginate from '../../../components/paginate'
const config = require("../../../helper/config").config;

const btn_stye = {
	margin: "0 5px 10px 0"
}



export default class FormValidation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			listviewSearch: false,
			total: 10,
			currentPage: 1,			
		}

	}
	showSearch(){
        /*con.connect(function(err) {  
           if (err) throw err;  
              console.log("Connected!");  
        });*/
		this.setState({
			listviewSearch: !this.state.listviewSearch
		})
	}
	getData(page){
		this.setState({
			currentPage: page
		});
	}

	render() {
        //console.log(db2)
		const DropdownShort = () => {
			return (
				<div className="lv-actions actions">
					<ul className="actions">
						<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
							<MenuItem className="dropdown-arrow"></MenuItem>
							<MenuItem>Edit</MenuItem>
							<MenuItem>Delete</MenuItem>
						</NavDropdown>
					</ul>
				</div>
			)
		};
		return (
			<Fragment>
				<ModuleHeader text="Bot List" />
				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="listview lv-bordered lv-lg">
								<div className="lv-header-alt clearfix m-b-5">
									<h2 className="lvh-label hidden-xs">Add text here...</h2>
									{this.state.listviewSearch ?
										<div className="lvh-search" >
											<input type="text" placeholder="Start typing..." className="lvhs-input"/>
											<i className="lvh-search-close" onClick={this.showSearch.bind(this)}>&times;</i>
										</div>
										: ""
									}
									<ul className="lv-actions actions">
										<li>
											<a onClick={this.showSearch.bind(this)}>
												<i className="zmdi zmdi-search"></i>
											</a>
										</li>
									</ul>
								</div>

								<div className="lv-body">
									<div className="lv-item media">
										<div className="checkbox pull-left">
											<label>
												<input type="checkbox"/>
												<i className="input-helper"></i>
											</label>
										</div>
										<div className="pull-left">
											<img className="lv-img-sm" src={`${config.asset_url}/assets/img/profile-pics/1.jpg`} />
										</div>
										<div className="media-body">
											<div className="lv-title">chatbot1</div>
											<small className="lv-small">client23</small>
											<ul className="lv-attrs">
												<li>Date Created: 09/06/1988</li>
												<li>Members: 78954</li>
												<li>Published: No</li>
											</ul>
											<DropdownShort/>
										</div>
									</div>
								
									<div className="lv-item media">
										<div className="checkbox pull-left">
											<label>
												<input type="checkbox" />
												<i className="input-helper"></i>
											</label>
										</div>
										<div className="pull-left">
											<img className="lv-img-sm" src={`${config.asset_url}/assets/img/profile-pics/1.jpg`} />
										</div>
										<div className="media-body">
											<div className="lv-title">chatbot2</div>
											<small className="lv-small">client23</small>
											<ul className="lv-attrs">
												<li>Date Created: 09/06/1988</li>
												<li>Members: 78954</li>
												<li>Published: No</li>
											</ul>
											<DropdownShort/>
										</div>
									</div>
								
									<div className="lv-item media">
										<div className="checkbox pull-left">
											<label>
												<input type="checkbox" />
												<i className="input-helper"></i>
											</label>
										</div>
										<div className="pull-left">
											<img className="lv-img-sm" src={`${config.asset_url}/assets/img/profile-pics/1.jpg`} />
										</div>
										<div className="media-body">
											<div className="lv-title">chatbot3</div>
											<small className="lv-small">client23</small>
											<ul className="lv-attrs">
												<li>Date Created: 09/06/1988</li>
												<li>Members: 78954</li>
												<li>Published: No</li>
											</ul>

											<DropdownShort />
										</div>
									</div>
								
									<div className="lv-item media">
										<div className="checkbox pull-left">
											<label>
												<input type="checkbox" />
												<i className="input-helper"></i>
											</label>
										</div>
										<div className="pull-left">
											<img className="lv-img-sm" src={`${config.asset_url}/assets/img/profile-pics/1.jpg`} />
										</div>
										<div className="media-body">
											<div className="lv-title">chatbot4</div>
											<small className="lv-small">client25</small>
											<ul className="lv-attrs">
												<li>Date Created: 09/06/1988</li>
												<li>Members: 78954</li>
												<li>Published: No</li>
											</ul>

											<DropdownShort />
										</div>
									</div>
								
									<div className="lv-item media">
										<div className="checkbox pull-left">
											<label>
												<input type="checkbox" />
												<i className="input-helper"></i>
											</label>
										</div>
										<div className="pull-left">
											<img className="lv-img-sm" src={`${config.asset_url}/assets/img/profile-pics/1.jpg`} />
										</div>
										<div className="media-body">
											<div className="lv-title">chatbot5</div>
											<small className="lv-small">client24</small>
                                            <ul className="lv-attrs">
												<li>Date Created: 09/06/1988</li>
												<li>Members: 78954</li>
												<li>Published: No</li>
											</ul>
											<DropdownShort />
										</div>
									</div>

									<div className="lv-item media">
										<div className="checkbox pull-left">
											<label>
												<input type="checkbox" />
												<i className="input-helper"></i>
											</label>
										</div>
										<div className="pull-left">
											<img className="lv-img-sm" src={`${config.asset_url}/assets/img/profile-pics/2.jpg`} />
										</div>
										<div className="media-body">
											<div className="lv-title">chatbot6</div>
											<small className="lv-small">client45</small>
											<ul className="lv-attrs">
												<li>Date Created: 09/06/1988</li>
												<li>Members: 78954</li>
												<li>Published: No</li>
											</ul>
											<DropdownShort />
										</div>
									</div>

									<div className="lv-item media">
										<div className="checkbox pull-left">
											<label>
												<input type="checkbox" />
												<i className="input-helper"></i>
											</label>
										</div>
										<div className="pull-left">
											<img className="lv-img-sm" src={`${config.asset_url}/assets/img/profile-pics/2.jpg`} />
										</div>
										<div className="media-body">
											<div className="lv-title">chatbot7</div>
											<small className="lv-small">client45</small>
											<ul className="lv-attrs">
												<li>Date Created: 09/06/1988</li>
												<li>Members: 78954</li>
												<li>Published: No</li>
											</ul>

											<DropdownShort />
										</div>
									</div>
								</div>
							</div>
							<div className="lv-pagination">
								<Paginate total={this.state.total} currentPage={this.state.currentPage} method={this.getData.bind(this)} className="custom"/>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}