import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'one of the most famous sky scrapers in the world!',
    imageUrl: 'https://cdn.getyourguide.com/img/location/5ca3484e4fa26.jpeg/148.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat:40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Sydney Harbour Bridge',
    description: 'Awesome bridge in an awesome country',
    imageUrl: 'https://d12dkjq56sjcos.cloudfront.net/pub/media/magefan_blog/sightseeing/Sydney-Landmark-Sydney-Harbour-Bridge-Big-Bus-Tours.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat:-33.8548726,
      lng: 151.2070922
    },
    creator: 'u2'
  }

];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
