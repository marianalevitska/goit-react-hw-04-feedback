import { useState, useCallback } from 'react';

import Statistics from './components/Statistics';
import FeedbackOption from './components/FeedbackOption';
import Section from './shared/Section';
import Notification from './shared/Notification';

const options = ['good', 'neutral', 'bad'];

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = useCallback(
    item => {
      setState(prevState => ({
        ...prevState,
        [item]: prevState[item] + 1,
      }));
    },
    [setState]
  );

  const totalFeedback = useCallback(() => {
    const { good, neutral, bad } = state;
    const n = good + neutral + bad;
    return n;
  }, [state]);

  const positiveFeedback = useCallback(() => {
    const { good } = state;
    const total = totalFeedback();
    const number = Math.ceil((good / total) * 100);
    return number;
  }, [state, totalFeedback]);

  const percent = positiveFeedback();
  const total = totalFeedback();
  const positiveFb = percent ? percent : 0;
  const { good, neutral, bad } = state;

  return (
    <>
      <Section title={'Please Live Feedback'}>
        <FeedbackOption options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFb}
          />
        ) : (
          <Notification message={`There's no feedback`} />
        )}
      </Section>
    </>
  );
}

export default App;
