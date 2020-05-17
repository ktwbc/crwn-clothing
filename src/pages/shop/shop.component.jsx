import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overiew.component';
import CollectionPage from '../collection/collection.component';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    const { updateCollections } = this.props;

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);
      updateCollections(collectionsMap);
    });

  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }
  render() {
    let { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={ `${ match.path }` } component={ CollectionsOverview }/>
        <Route path={ `${ match.path }/:collectionId` } component={ CollectionPage }/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
 updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);


