/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Cards from 'components/cards';
import CardsData from 'data.json';

export class PastEvents extends React.Component {

  componentWillMount() {

  }

  render() {
    return (
        <div>
            <Helmet
              title="Past Events"
              meta={[
                { name: 'Dashboard', content: 'Event Management' },
              ]}
            />
            <Cards cards={CardsData} />
        </div>
    );
  }
}

export default PastEvents;
