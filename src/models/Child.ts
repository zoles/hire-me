export interface Child {
  childId: string;
  name: {
    fullName: string;
  };
  image: {
    small: string;
    empty: boolean;
  };
  checkedIn: boolean;
  checkinTime: string;
  pickupTime: string;
}
