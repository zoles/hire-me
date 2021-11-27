import React, { useEffect, useState } from "react";

import { Child } from "../models/Child";
import ChildrenService from "../services/apiService";

type ChildrenContextObj = {
  items: Child[];
  loadedItems: Child[];
  totalItems: number;
  currentPage: number;
  pageCount: number;
  toggleCheckin: (child: Child, pickupTime?: string) => void;
  pageChange: (evt: React.MouseEvent, page: number) => void;
};

export const ChildrenContext = React.createContext<ChildrenContextObj>({
  items: [],
  loadedItems: [],
  totalItems: 0,
  currentPage: 1,
  pageCount: 1,
  toggleCheckin: (child: Child, pickupTime?: string) => {},
  pageChange: (evt: React.MouseEvent, page: number) => {},
});

const ChildrenContextProvider: React.FC = (props) => {
  const [children, setChildren] = useState<Child[]>([]);
  const [loadedChildren, setLoadedChildren] = useState<Child[]>([]);
  const [total, setTotal] = useState<number>(0);

  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    new ChildrenService().getChildren().then((data) => {
      setChildren(data.data.children);
      setTotal(data.data.children.length);
      setPageCount(Math.ceil(data.data.children.length / itemsPerPage));
    });
  }, [itemsPerPage]);

  useEffect(() => {
    const items = children.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    setLoadedChildren(items);
  }, [children, currentPage, itemsPerPage]);

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

  const pageChangedHandler = (evt: React.MouseEvent, page: number) => {
    evt.preventDefault();
    setCurrentPage(page);
  };

  const contextValue: ChildrenContextObj = {
    items: children,
    loadedItems: loadedChildren,
    totalItems: total,
    currentPage: currentPage,
    pageCount: pageCount,
    toggleCheckin: checkinHandler,
    pageChange: pageChangedHandler,
  };

  return (
    <ChildrenContext.Provider value={contextValue}>
      {props.children}
    </ChildrenContext.Provider>
  );
};

export default ChildrenContextProvider;
