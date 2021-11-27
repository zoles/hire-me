import React, { useEffect, useState } from "react";

import { Child } from "../models/Child";
import ChildrenService from "../services/apiService";

type ChildrenContextObj = {
  items: Child[];
  totalItems: number;
};

export const ChildrenContext = React.createContext<ChildrenContextObj>({
  items: [],
  totalItems: 0,
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

  const contextValue: ChildrenContextObj = {
    items: children,
    totalItems: total,
  };

  return (
    <ChildrenContext.Provider value={contextValue}>
      {props.children}
    </ChildrenContext.Provider>
  );
};

export default ChildrenContextProvider;
