import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Message, Container, Segment, Form, Input, Select, Grid, Button, Header, Label } from 'semantic-ui-react'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MenuBar from './components/MenuBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copy_url: 'COPY URL',
      sheet_url: '1siAJsT8BwuRSwZ6wETVIFBqAqZWRRJwf8MpISqQv88c',
      folder_url: '1SatbFI2-szpk8y-93AGNxg9-CZJeKQuy',
      sheet_url_error: '',
      folder_url_error: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const value = event.target.value
    const googleDocsBaseUrl = "https://docs.google.com/spreadsheets/d/"
    const copyUrl = googleDocsBaseUrl
      + this.state.sheet_url
      + "/copy?id="
      + this.state.sheet_url
      + "&copyCollaborators=false"
      + "&copyComments=false"
      + "&copyDestination="
      + this.state.folder_url
    this.setState({
      [event.target.name]: value,
      copy_url: copyUrl
    })   
  }

  render(){
    return (
      <div className="App">
        <div>
          <Router>
            <MenuBar/>

            <Header as='h1'>
              Google Sheet Copy To Folder App
            </Header>

            <Container>
              <Segment>
                <Form>
                  <Form.Field required>
                    <Input
                      type="text" 
                      name="sheet_url"
                      value = {this.state.sheet_url}
                      placeholder="Sheet URL"
                      onChange={this.handleChange}
                    /> 
                    <div>{this.state.sheet_url_error}</div>
                  </Form.Field>
                  <Form.Field required>
                    <Input 
                      type="text" 
                      name="folder_url"
                      value={this.state.folder_url}
                      placeholder="Folder URL"
                      onChange={this.handleChange}
                    /> 
                    <h5>{this.state.folder_url_error}</h5>
                  </Form.Field>
                </Form>
                  <a href={this.state.copy_url} target="_blank">{this.state.copy_url}</a>
              </Segment>

              <Message color='red'>
                Provided as a free service because I can't believe it doesn't exist anywhere else
              </Message>
            </Container>
          </Router> 
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
