import React, { useEffect, useState } from "react";

import { Child } from "../models/Child";
import ChildrenService from "../services/apiService";

type ChildrenContextObj = {
  items: Child[];
  totalItems: number;
  toggleCheckin: (child: Child, pickupTime?: string) => void;
};

export const ChildrenContext = React.createContext<ChildrenContextObj>({
  items: [],
  totalItems: 0,
  toggleCheckin: (child: Child, pickupTime?: string) => {},
});

const ChildrenContextProvider: React.FC = (props) => {
  const [children, setChildren] = useState<Child[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    new ChildrenService().getChildren().then((data) => {
      setChildren(data.data.children);
      setTotal(data.data.children.length);
    });
  }, []);

  const checkinHandler = (child: Child, pickupTime?: string) => {
    // Checkin
    if (pickupTime) {
      new ChildrenService()
        .checkInChildApi(child.childId, pickupTime)
        .then((response) => {
          const index = children.findIndex(
            (ch) => ch.childId === child.childId
          );
          let updatedChildren = [...children];
          updatedChildren[index].checkedIn = true;
          updatedChildren[index].checkinTime = response.data.checkinTime;
          updatedChildren[index].pickupTime = response.data.pickupTime;
          setChildren(updatedChildren);
        });
    }
    // Checkout
    else {
      new ChildrenService().checkOutChildApi(child.childId).then((response) => {
        const index = children.findIndex((ch) => ch.childId === child.childId);
        let updatedChildren = [...children];
        updatedChildren[index].checkedIn = false;
        setChildren(updatedChildren);
      });
    }
  };

  const contextValue: ChildrenContextObj = {
    items: children,
    totalItems: total,
    toggleCheckin: checkinHandler,
  };

  return (
    <ChildrenContext.Provider value={contextValue}>
      {props.children}
    </ChildrenContext.Provider>
  );
};

export default ChildrenContextProvider;
