/* eslint-disable no-unused-vars */
exports.Message = class Message {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    return [];
  }

  async get(id, params) {
    return {
      id,
      text: `A new message with ID: ${id}!`,
    };
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map((current) => this.create(current, params)));
    }

    return data;
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return { id };
  }

  getTimestamp() {
    return this.timestamp;
  }

  setTimestamp(timestamp) {
    this.timestamp = timestamp;
  }

  getSender() {
    return this.sender;
  }

  setSender(sender) {
    this.sender = sender;
  }
};
