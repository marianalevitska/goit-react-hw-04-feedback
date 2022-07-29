import { Component } from 'react';

import Statistics from './components/Statistics';
import FeedbackOption from './components/FeedbackOption';
import Section from './shared/Section';
import Notification from './shared/Notification';

const options = ['good', 'neutral', 'bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (item) => {

    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    }));
  }



  totalFeedback() {
    const { good, neutral, bad } = this.state;
    const n = good + neutral + bad;
    return n;
  }

  positiveFeedback() {
    const { good } = this.state;
    const total = this.totalFeedback();
    const number = Math.ceil((good / total) * 100);
    return number;
  }

  render() {
    const percent = this.positiveFeedback();
    const total = this.totalFeedback();
    const positiveFb = percent ? percent : 0;
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please Live Feedback'}>
          <FeedbackOption
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {total ?
            <Statistics title='Statistics' good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positiveFb} /> :
            <Notification message={`There's no feedback`} />}
        </Section>

      </>
    );
  }
};

export default App;
