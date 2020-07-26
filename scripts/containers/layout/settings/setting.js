import React, { Component, Fragment } from 'react'
import ModuleHeader from '../../../common/module-header'
import { Input, Textarea, Select, AddOn } from '../../../components/input'

import Ripple from '../../../components/ripple';
import Switch from '../../../components/switch'
import { 
	Row, Col, ButtonToolbar, ToggleButtonGroup, ToggleButton, 
	OverlayTrigger, Carousel, Collapse, Well, Clearfix, MenuItem, 
	Pagination, Pager, Popover, ProgressBar, Tabs, Tab, Tooltip } from 'react-bootstrap';

const btn_stye = {
	margin: "0 5px 10px 0"
}

export default class FormValidation extends Component {
		constructor(props) {
		super(props)
		this.state = {
			toggle:false,
			table: [
				{
					id: 1,
					first_name: "Alexandra",
					last_name: "Christopher",
					username: "@makinton",
					nickname: "Ducky"
				},{
					id: 2,
					first_name: "Madeleine",
					last_name: "Hollaway",
					username: "@hollway",
					nickname: "Cheese"
				},{
					id: 3,
					first_name: "Sebastian",
					last_name: "Johnston",
					username: "@sebastian",
					nickname: "Jaycee"
				},{
					id: 4,
					first_name: "Mitchell",
					last_name: "Christin",
					username: "@mitchell4u",
					nickname: "AdskiDeAnus"
				},{
					id: 5,
					first_name: "Elizabeth",
					last_name: "Belkitt",
					username: "@belkitt",
					nickname: "Goat"
				},{
					id: 6,
					first_name: "Benjamin",
					last_name: "Parnell",
					username: "@wayne234",
					nickname: "Pokie"
				},{
					id: 7,
					first_name: "Katherine",
					last_name: "Buckland",
					username: "@anitabelle",
					nickname: "Wokie"
				},{
					id: 8,
					first_name: "Nicholas",
					last_name: "Walmart",
					username: "@mwalmart",
					nickname: "Spike"
				}
			]
		}
	}
     
    change(){
         this.setState({toggle:true});
     }
	render() {
		return (
			<Fragment>
				<ModuleHeader text="Settings" />
				<Row>
					<Col sm={12}>
					    <div className="card">
							<div className="card-body card-padding">
                                <Row>
                                <Col sm={6} md={3}>
										<h4>Event Type</h4>
								</Col>
								<Col sm={12} md={4}>
									<Select className="form-control" onChange={this.change.bind(this)} >
										<option value="">-- Select an Option--</option>
										<option>Parse requests</option>
										<option>Train</option>
									</Select>
							    </Col>
							    </Row>
							</div>
						</div>
						<Collapse in={this.state.toggle}>
					    <div className="card">
							<div className="card-header">
								<h2>Log data</h2>
							</div>

							<div className="card-body table-responsive">
								<table className="table">
									<thead>
										<tr>
											<th>#</th>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Username</th>
											<th>Nickname</th>
										</tr>
									</thead>
									<tbody>
										{this.state.table.map((item, i)=>(
											<tr key={i}>
												<td>{item.id}</td>
												<td>{item.first_name}</td>
												<td>{item.last_name}</td>
												<td>{item.username}</td>
												<td>{item.nickname}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
                        </Collapse>
					</Col>
				</Row>
			</Fragment>
		)
	}
}