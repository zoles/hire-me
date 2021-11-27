import {
  Avatar,
  Box,
  ButtonOutline,
  ButtonPrimary,
  TextInput,
} from "@primer/components";
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

  const formatPickupTime = (dateTime: string, isCheckedIn: boolean): string => {
    if (!dateTime || !isCheckedIn) return "";

    const convertedDate = new Date(props.item.pickupTime);
    return convertedDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    });
  };

  return (
    <Box display="grid" gridTemplateColumns="50px 1fr 1fr 1fr" gridGap={3}>
      <Box p={2}>
        <Avatar src={props.item.image.small} size={50} />
      </Box>
      <Box p={3}>{props.item.name.fullName}</Box>
      <Box p={3}>
        {formatPickupTime(props.item.pickupTime, props.item.checkedIn)}
      </Box>
      <Box p={3}>
        {props.item.checkedIn ? (
          <ButtonOutline onClick={onCheckoutHandler}>Checkout</ButtonOutline>
        ) : (
          <div>
            <TextInput
              aria-label="PickupTime"
              name="pickupTime"
              variant="small"
              placeholder="Pickup time"
              ref={pickupTimeInputRef}
              sx={{ mr: 2 }}
            />
            <ButtonPrimary onClick={onCheckinHandler}>Checkin</ButtonPrimary>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default ChildItem;
