import { useContext } from "react";
import { ChildrenContext } from "../../store/children-context";
import ChildItem from "../ChildItem/ChildItem";

const ChildrenList: React.FC = () => {
  const childrenCtx = useContext(ChildrenContext);

  return (
    <div>
      <h1>Checkin and checkout management</h1>
      <span>{childrenCtx.totalItems} children</span>

      {childrenCtx.items.map((item) => (
        <ChildItem key={item.childId} item={item} />
      ))}
    </div>
  );
};

export default ChildrenList;
