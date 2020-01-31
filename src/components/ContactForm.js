import React from "react"
import {Input} from "rebass"
import '../css/input_styles.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      nameFilled: false,
      emailFilled: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    const target = event.target;
    const name = target.name;
    console.log(target.value)
    this.setState({[name]: target.value});
  }

  render() {
    return (
      <form style={{ fontFamily: 'Norwester', margin: 15 }} name="newsletter" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="newsletter" />
        <span class={"input input--nao "+ ((this.state.name == "") ? 'input--filled' : '')}>
          <input class="input__field input__field--nao" type="text" id="input-1" onChange={this.handleChange}/>
            <label class="input__label input__label--nao" for="input-1">
              <span class="input__label-content input__label-content--nao "  >Name</span>
            </label>
            <svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
              <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
            </svg>
      </span>
          <span class={"input input--nao "+ ((this.state.name == "") ? 'input--filled' : '')}>
            <input class="input__field input__field--nao" type="text" id="input-2" onChange={this.handleChange}/>
              <label class="input__label input__label--nao" for="input-2">
                <span class="input__label-content input__label-content--nao">Email</span>
              </label>
              <svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
              </svg>
      </span>
      <input className="pulse" variant='outline' m={2} sx={{
              '&:hover': {
                backgroundColor: '#FE3E00',
              },
              cursor: 'pointer'
            }} type="submit" value="Subscribe to Newsletter" className="special" />
      </form>
            );
          }
        }
        
export default ContactForm