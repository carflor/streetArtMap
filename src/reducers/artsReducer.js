const initialArtsState = [
  {
    id: 100,
    latitude: +'39.744137',
    longitude: +'-104.95005',
    address: 'address1',
    city: 'city1',
    state: 'state1',
    zipcode: 'zip1',
    image_urls: [
      'https://images.unsplash.com/photo-1561059488-916d69792237?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
      'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80',
      'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    ],
    description: 'something about this art',
    artist_name: 'artist name',
    instagram_handle: null,
    favorite: true,
    visited: false,
  },
  {
    id: 200,
    latitude: +'39.660355',
    longitude: +'-106.598137',
    address: 'address2',
    city: 'city2',
    state: 'state2',
    zipcode: 'zip2',
    image_urls: [
      'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1561059488-916d69792237?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
      'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80',
    ],
    description: 'something about this art',
    artist_name: 'artist name',
    instagram_handle: 'edignot',
    favorite: false,
    visited: true,
  },
  {
    id: 300,
    latitude: +'39.72356',
    longitude: +'-103.894882',
    address: 'address3',
    city: 'city3',
    state: 'state3',
    zipcode: 'zip3',
    image_urls: [
      'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80',
      'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    ],
    description: 'something about this art',
    artist_name: 'artist name',
    instagram_handle: 'edignot',
    favorite: true,
    visited: false,
  },
  {
    id: 400,
    latitude: +'39.744137',
    longitude: +'-104.95005',
    address: 'address1',
    city: 'city1',
    state: 'state1',
    zipcode: 'zip1',
    image_urls: [
      'https://images.unsplash.com/photo-1561059488-916d69792237?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
      'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80',
      'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    ],
    description: 'something about this art',
    artist_name: 'artist name',
    instagram_handle: null,
    favorite: true,
    visited: false,
  },
  {
    id: 500,
    latitude: +'39.660355',
    longitude: +'-101.598137',
    address: 'address2',
    city: 'city2',
    state: 'state2',
    zipcode: 'zip2',
    image_urls: [
      'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1561059488-916d69792237?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
      'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80',
    ],
    description: 'something about this art',
    artist_name: 'artist name',
    instagram_handle: 'edignot',
    favorite: false,
    visited: true,
  },
  {
    id: 600,
    latitude: +'39.72356',
    longitude: +'-104.894882',
    address: 'address3',
    city: 'city3',
    state: 'state3',
    zipcode: 'zip3',
    image_urls: [
      'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80',
      'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    ],
    description: 'something about this art',
    artist_name: 'artist name',
    instagram_handle: 'edignot',
    favorite: true,
    visited: false,
  },
  {
    id: 700,
    latitude: +'39.744137',
    longitude: +'-100.95005',
    address: 'address1',
    city: 'city1',
    state: 'state1',
    zipcode: 'zip1',
    image_urls: [
      'https://images.unsplash.com/photo-1561059488-916d69792237?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
      'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80',
      'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    ],
    description: 'something about this art',
    artist_name: 'artist name',
    instagram_handle: null,
    favorite: true,
    visited: false,
  },
  {
    id: 800,
    latitude: +'39.660355',
    longitude: +'-105.598137',
    address: 'address2',
    city: 'city2',
    state: 'state2',
    zipcode: 'zip2',
    image_urls: [
      'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1561059488-916d69792237?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
      'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80',
    ],
    description: 'something about this art',
    artist_name: 'artist name',
    instagram_handle: 'edignot',
    favorite: false,
    visited: true,
  },
  {
    id: 900,
    latitude: +'39.72356',
    longitude: +'-104.894882',
    address: 'address3',
    city: 'city3',
    state: 'state3',
    zipcode: 'zip3',
    image_urls: [
      'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80',
      'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    ],
    description: 'something about this art',
    artist_name: 'artist name',
    instagram_handle: 'edignot',
    favorite: true,
    visited: false,
  },
]

export const arts = (state = initialArtsState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return [...state, ...action.data]
    default:
      return state
  }
}
