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
		}
	}
	
	change(){
         this.setState({toggle:true});
     }

	render() {
		return (
			<Fragment>
				<ModuleHeader text="Bot Training" />
				<Row>
					<Col sm={12}>
					    <div className="card">
                            <div className="card-body card-padding">
                                <Row>
                                <Col sm={6} md={3}>
										<h4>Bots</h4>
								</Col>
								<Col sm={12} md={9}>
									<Select className="form-control" onChange={this.change.bind(this)} >
										<option value="">-- Select a bot--</option>
										<option>bot 1</option>
										<option>bot 2</option>
										<option>bot 3</option>
										<option>bot 4</option>
										<option>bot 5</option>
									</Select>
							    </Col>
							    </Row>
							</div>
						</div>
						<Collapse in={this.state.toggle}>
						<div className="card">
							<div className="card-header">
								<h2>Bot Training</h2>
							</div>
							<div className="card-body card-padding">
								<Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="custom-tab full-width" animation={false} >
									<Tab eventKey={1} title="Raw Training Data">
										<div className="form-group">
									      <Textarea className="form-control" rows="5" placeholder="Let us type some lorem ipsum...." />
								        </div>
  									</Tab>
									<Tab eventKey={2} title="Config">
										<div className="form-group">
									       <Textarea className="form-control" rows="5" placeholder="Let us type some lorem ipsum...." />
								        </div>
  									</Tab>
									<Tab eventKey={3} title=" NLU Data" >
										<div className="form-group">
									       <Textarea className="form-control" rows="5" placeholder="Let us type some lorem ipsum...." />
								        </div>
  									</Tab>
  									<Tab eventKey={4} title="Stories" >
										<div className="form-group">
									       <Textarea className="form-control" rows="5" placeholder="Let us type some lorem ipsum...." />
								        </div>
  									</Tab>
  									<Tab eventKey={5} title="Domain" >
										<div className="form-group">
									       <Textarea className="form-control" rows="5" placeholder="Let us type some lorem ipsum...." />
								        </div>
  									</Tab>
								</Tabs>
								<Row>
                                   <div className="input-group input-group-lg">
									   <AddOn className="input-group-addon" icon="zmdi zmdi-sun" />
									   <Input className="form-control input-lg" placeholder="comment" />
							       </div>
							       <br />
								   <br />
                                   <Col sm={4}>
								        <Switch className="toggle-switch">
									       <label className="ts-label" htmlFor="ts-default">Force Model Update</label>
									       <input type="checkbox" id="ts-default" hidden="hidden"/>
									       <label className="ts-helper" htmlFor="ts-default"></label>
								        </Switch>
								   </Col>
								   <Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										 <i className="zmdi zmdi-home" />Start Training
							       </Ripple>
							       <Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										<i className="zmdi zmdi-home" />Download File
							       </Ripple>
							    </Row>
							</div>
						</div>
						</Collapse>
					</Col>
				</Row>
			</Fragment>
		)
	}
}