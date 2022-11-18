import React from 'react'
import PlaceList from '../components/PlaceList'

const DUMMY_PLACES =[
  {
    id: 'p1', 
    title: 'Epire State Building', 
    description: 'One most famouse', 
    imageUrl:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F73%2F114973-050-2DC46083%2FMidtown-Manhattan-Empire-State-Building-New-York.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Ftopic%2FEmpire-State-Building&tbnid=cbzASdTtG6F_uM&vet=12ahUKEwjymuex57b7AhUNTN8KHTvTCSIQMygBegUIARDiAQ..i&docid=e1UciM06XdD2NM&w=1347&h=1600&q=empire%20state%20building&ved=2ahUKEwjymuex57b7AhUNTN8KHTvTCSIQMygBegUIARDiAQ', 
    address: '20 W 34th St., New York, NY 10001 ', 
    location: {
      lat: 40.7484405, 
      lng: -73.9878531
    },
    creator: 'u1'
  }, 
  {
    id: 'p2', 
    title: 'Epire State Building', 
    description: 'One most famouse', 
    imageUrl:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F73%2F114973-050-2DC46083%2FMidtown-Manhattan-Empire-State-Building-New-York.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Ftopic%2FEmpire-State-Building&tbnid=cbzASdTtG6F_uM&vet=12ahUKEwjymuex57b7AhUNTN8KHTvTCSIQMygBegUIARDiAQ..i&docid=e1UciM06XdD2NM&w=1347&h=1600&q=empire%20state%20building&ved=2ahUKEwjymuex57b7AhUNTN8KHTvTCSIQMygBegUIARDiAQ', 
    address: '20 W 34th St., New York, NY 10001 ', 
    location: {
      lat: 40.7484405, 
      lng: -73.9878531
    },
    creator: 'u2'
  }
]




export default function UserPlaces() {
  return <PlaceList items={DUMMY_PLACES} />
}
