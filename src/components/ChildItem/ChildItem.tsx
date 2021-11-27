import { Child } from "../../models/Child";

const ChildItem: React.FC<{ item: Child }> = (props) => {
  return (
    <div>
      <img src={props.item.image.small} alt="Child" />
      <span>{props.item.name.fullName}</span>
      <span>{props.item.checkedIn}</span>
      <span>
        <button>Checkin action</button>
      </span>
    </div>
  );
};

export default ChildItem;
