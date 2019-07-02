import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as mailActions from "../../redux/actions/mailActions";
import "./index.scss";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      mail: [
        { title: 'Hello', content: 'welcome to our neighbourhood' },
        { title: 'congrats', content: "you've just been promoted to vice chairman of the hunter association" },
        { title: 'holiday', content: 'merry christmas and a happy new year' }
      ]
    };
  }
  submitMail(event) {
    event.preventDefault();
    const mail = { ...this.state };
    mail.mail.push({ title: this.title.value, content: this.content.value });
    this.props.action.createMail(mail.mail);
  }
  render() {
    return (
      <form onSubmit={this.submitMail.bind(this)}>
        <div>
          {
            this.state.mail.map((mail, index) => {
              return <div key={index}>
                <h4>{mail.title}</h4>
                <p>{mail.content}</p>
              </div>
            })
          }
        </div>
        <div>
          <div>
            <label>Title</label>
            <input ref={el => this.title = el} type="text"></input>
            <label>Content</label>
            <input ref={el => this.content = el} type="text"></input>
          </div>
          <input type="submit" value="Save" />
        </div>
      </form>
    )
  }
}

Home.propTypes = {
  action: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    mail: state.mail
  }
}

function matchDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(mailActions, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);