import React, { useState, useEffect } from 'react';
// import {} from "antd";
import ReactDOM from 'react-dom';
import CompactApp from './CompactApp';
import './search.css';

const appData = [
  {
    appid: 9,
    name: 'Org 1',
    address: '123 somewhere drive',
    phone: '923-567-8965',
    reason: 'i want to help my community',
    status: 'not reviewed',
    organization: {
      orgid: 4,
      name: 'Organization 1',
      address: '456 greenville drive, longtucky, ark 80067',
      phone: '567-890-2234',
    },
    user: {
      userid: 8,
      username: 'coolorg@lambdaschool.local',
      address: null,
      phone: null,
      imageUrl: null,
      description: null,
      useremails: [],
      roles: [
        {
          role: {
            roleid: 2,
            name: 'USER',
          },
        },
      ],
    },
  },
  {
    appid: 10,
    name: 'Org 2',
    address: '124 rainbow lane',
    phone: '444-111-3333',
    reason: 'i have a great idea i need help with',
    status: 'not reviewed',
    organization: {
      orgid: 5,
      name: 'Organization 2',
      address: '4 takona lane, nashville, tn 12546',
      phone: '333-222-1111',
    },
    user: {
      userid: 8,
      username: 'coolorg@lambdaschool.local',
      address: null,
      phone: null,
      imageUrl: null,
      description: null,
      useremails: [],
      roles: [
        {
          role: {
            roleid: 2,
            name: 'USER',
          },
        },
      ],
    },
  },
  {
    appid: 12,
    name: 'Org 3',
    address: '534 abbey road',
    phone: '000-345-9807',
    reason: 'i would love to be a part of this',
    status: 'not reviewed',
    organization: {
      orgid: 6,
      name: 'Organization 3',
      address: '678 snowyhille crossing, boulder, c0 80053',
      phone: '888-999-1111',
    },
    user: {
      userid: 11,
      username: 'evencoolerorg@lambdaschool.local',
      address: null,
      phone: null,
      imageUrl: null,
      description: null,
      useremails: [],
      roles: [
        {
          role: {
            roleid: 3,
            name: 'PARTNER',
          },
        },
      ],
    },
  },
];

function SearchPage() {
  return (
    <div className="search-page">
      <div className="all-short-apps">
        <div className="short-apps-header">
          <p>Name</p>
          <p>Organization Name</p>
          <p>Status</p>
        </div>
        {appData.map(application => (
          <CompactApp key={application.appid} app={application} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
