import { Component } from 'react';
import FeedbackButton from 'components/FeedbackButton/FeedbackButton';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification';

// import FeedbackOptions from 'components/Feedback/FeedbackOptions/FeedbackOptions';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class Feedback extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleClick = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state.good;
    const result = ((value / total) * 100).toFixed(0);
    return Number(result);
  };

  render() {
    const totalStat = this.countTotalFeedback();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackButton handleClick={this.handleClick} />
        </Section>

        <Section title="Statistics">
          {totalStat ? (
            <Statistics
              date={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
