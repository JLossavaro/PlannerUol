import shortid from 'shortid';


export default class Events {
    _id: string;
    description: string;
    dateTime: Date;
    createdAt: Date;
  
    constructor(
      _id: string,
      description: string,
      dateTime: Date,
      createdAt: Date = new Date()
    ) {
      this._id = shortid.generate();
      this.description = description;
      this.dateTime = dateTime;
      this.createdAt = createdAt;
    }
  }