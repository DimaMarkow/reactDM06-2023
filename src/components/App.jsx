import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Feedback from 'components/Feedback/Feedback';
import Header from 'components/Header/Header';
import Contacts from './Contacts/Contacts';

class App extends Component {
  state = {
    showFeedback: false,
    showContacts: false,
  };

  showFeedback = () => {
    this.setState(state => ({ showFeedback: !state.showFeedback }));
  };

  showContacts = () => {
    this.setState(state => ({ showContacts: !state.showContacts }));
  };

  render() {
    return (
      <>
        <div className="container">
          <Header
            showFeedback={this.showFeedback}
            showContacts={this.showContacts}
          />
          {this.state.showFeedback && <Feedback />}
          {this.state.showContacts && <Contacts />}
        </div>
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    );
  }
}

export default App;
