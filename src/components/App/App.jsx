import {useState} from 'react'
import React, { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 const countTotalFeedback = () => {
    return good + neutral + bad;
  };

 const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = (good * 100) / total;
    return Math.round(percentage);
  };

  const onLeaveFeedback = e => {
    const name = e.target.name;
    if (name === 'good') {
      setGood(prevState => prevState + 1);
    } else if (name === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else if (name === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

     const total = countTotalFeedback();
     const positivePercentage = countPositiveFeedbackPercentage();
     const options = Object.keys({ good, neutral, bad });
     const statistics = Object.entries({ good, neutral, bad });
  
  return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        {total === 0 && <Notification message="No feedback given" />}
        {total > 0 && (
          <Section title="Statistics">
            <Statistics
              statistics={statistics}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </>
    );
}

export default App

