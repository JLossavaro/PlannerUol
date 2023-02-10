export class Events {
    _id: string;
    description: string;
    dateTime: Date;
    createdAt: Date;
  
    constructor(
      _id: string,
      description: string,
      dateTime: Date,
      createdAt: Date
    ) {
      this._id = _id;
      this.description = description;
      this.dateTime = dateTime;
      this.createdAt = createdAt;
    }
  }