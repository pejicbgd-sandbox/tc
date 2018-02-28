import React from 'react';

class Network {

  get path() {
    return {
      users: 'users',
      uploads: 'uploads',
      cars: 'car_purchases'
    }
  } 

  fetchEntries(type) {
    return fetch('/data/' + this.path[type], { method: 'POST' })
      .then(response => response.json());
  }

  saveNewEntry(type, data) {
    return fetch('/save/' + this.path[type], {
      method: "POST",
      body: data
    })
      .then(response => response.json());
  }
}

export default Network;
