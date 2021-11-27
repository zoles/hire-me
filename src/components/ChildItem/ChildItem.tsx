import { useContext, useRef } from "react";
import { Child } from "../../models/Child";
import { ChildrenContext } from "../../store/children-context";

const ChildItem: React.FC<{ item: Child }> = (props) => {
  const childrenCtx = useContext(ChildrenContext);

  const pickupTimeInputRef = useRef<HTMLInputElement>(null);

  const onCheckinHandler = () => {
    const pickupTime = pickupTimeInputRef.current!.value;

    if (pickupTime.trim().length === 0) {
      // error handling
      return;
    }

    childrenCtx.toggleCheckin(props.item, pickupTime);
  };

  const onCheckoutHandler = () => {
    childrenCtx.toggleCheckin(props.item);
  };

  return (
    <div>
      <img src={props.item.image.small} alt="Child" />
      <span>{props.item.name.fullName}</span>
      <span>{props.item.checkedIn}</span>
      <span>
        {props.item.checkedIn ? (
          <button onClick={onCheckoutHandler}>Checkout</button>
        ) : (
          <div>
            <input
              type="text"
              name="pickupTime"
              placeholder="Pickup time"
              ref={pickupTimeInputRef}
            />
            <button onClick={onCheckinHandler}>Checkin</button>
          </div>
        )}
      </span>
    </div>
  );
};

export default ChildItem;
