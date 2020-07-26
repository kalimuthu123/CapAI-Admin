import React, { Component, Fragment } from 'react'
import ModuleHeader from '../../../common/module-header'
import { Input, Textarea, Select, AddOn } from '../../../components/input'
import Ripple from '../../../components/ripple';
import Switch from '../../../components/switch';
////chatbot imports//
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

import { 
	Row, Col, ButtonToolbar, ToggleButtonGroup, ToggleButton, 
	OverlayTrigger, Carousel, Collapse, Well, Clearfix, MenuItem, 
	Pagination, Pager, Popover, ProgressBar, Tabs, Tab, Tooltip ,NavDropdown } from 'react-bootstrap';
const btn_stye = {
	margin: "0 5px 10px 0"
}
  const config = {
  width: "100%",
  height: "50vh"
 };
// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

 const steps = [
    {
      id: '1',
      message: 'Greeting ! How can I help you !',
      trigger: '2',
    },
    {
      id: '2',
      message: 'What is your name?',
      trigger: '3',
    },
    {
      id: '3',
      user: true,
      trigger: '4',
    },
    {
      id: '4',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger: '5',
    },
    {
      id: '5',
      message: 'Choose your hospital',
      trigger: '6',
    },
    {
      id: '6',
      options: [
        { value: 'BLK', label: 'BLK', trigger: '7' },
        { value: 'QRG', label: 'QRG', trigger: '7' },
        { value: 'Neuberg', label: 'Neuberg', trigger: '7' },
      ],
      
    },
    {
      id: '7',
      message: 'you have choosed {previousValue} hospital!!!',
      trigger: '9',
    },
    {
      id: '9',
      message: 'Choose the following metrics that you have needed',
      trigger: '10',
    },
    {
      id: '10',
      options: [
        { value: '82Cr', label: 'Overall revenue', trigger: '11' },
        { value: '36Cr', label: 'OPD revenue', trigger: '11' },
        { value: '12Cr', label: 'IPD revenue', trigger: '11' },
        { value: '34k', label: 'ARPP', trigger: '11' },
        { value: '52%', label: 'BOR', trigger: '11' },
      ],
      
    },
    {
      id: '11',
      message: 'It is around {previousValue} for this month..',
      trigger: '12',
    },
    {
      id: '12',
      message: 'Do you want to check some other metrics?',
      trigger: '13',
    },
    {
      id: '13',
      options: [
        { value: 1, label: 'yes', trigger: '9' },
        { value: 0, label: 'no', trigger: '14' },
      ],
      
    },
    {
      id: '14',
      message: 'Do you want to check some other Hospital',
      trigger: 15,
    },
    {
      id: '15',
      options: [
        { value: 1, label: 'yes', trigger: '5' },
        { value: 0, label: 'no', trigger: '16' },
      ],
      
    },
    {
      id: '16',
      message: 'Thank you!! Have a good day ',
      end: true,
    },
  ];

export default class FormValidation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			toggle: false,			
		}
	}
      change(){
         this.setState({toggle:true});
     }
	render() {
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
				<ModuleHeader text="ChatBots" />
				<Row>
					<Col sm={12}>
					     <div className="card">
                            <div className="card-body card-padding">
                                <Row>
                                <Col sm={6} md={3}>
										<h4>Bot</h4>
								</Col>
								<Col sm={12} md={9}>
									<Select className="form-control" onChange={this.change.bind(this)}>
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
						<Row>
					       <Col sm={4}>
						     <div className="card">
							    <div className="card-body table-responsive">
								  <div className="listview lv-bordered lv-lg">
								     <div className="lv-header-alt clearfix m-b-5">
									      <h2 className="lvh-label hidden-xs">Add text here...</h2>
								     </div>

								      <div className="lv-body">
								        	<div className="lv-item media">
										       <div className="checkbox pull-left">
											       <label>
												      <input type="checkbox"/>
												      <i className="input-helper"></i>
											       </label>
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
									  </div>
							      </div>
							   </div>
						  </div>
					      </Col>
					      <Col sm={4}>
						     <div className="card">
						         <React.StrictMode>
                                    <ChatBot steps={steps} recognitionEnable={true} headerTitle="CapAI" speechSynthesis={{ enable: true, lang: 'en' }} {...config} />
                                 </React.StrictMode>
						     </div>
					      </Col>
					      <Col sm={4}>
						     <div className="card">
							   <div className="card-body card-padding ">
								  <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="custom-tab full-width" animation={false} >
								    <h5>Conversations</h5>
									<Tab eventKey={1} title="Story">
										<div className="form-group">
									      <Textarea className="form-control" rows="5" placeholder="Let us type some lorem ipsum...." />
								        </div>
  									</Tab>
									<Tab eventKey={2} title="Message">
										<div className="form-group">
									       <Textarea className="form-control" rows="5" placeholder="Let us type some lorem ipsum...." />
								        </div>
  									</Tab>
  								  </Tabs>
						     	</div>
						     </div>
					      </Col>
				       </Row>
				       </Collapse>
					</Col>
				</Row>
			</Fragment>
		)
	}
}