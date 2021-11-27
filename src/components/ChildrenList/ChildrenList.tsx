import { Box, Pagination } from "@primer/components";
import { useContext } from "react";
import { ChildrenContext } from "../../store/children-context";
import ChildItem from "../ChildItem/ChildItem";

const ChildrenList: React.FC = () => {
  const childrenCtx = useContext(ChildrenContext);

  return (
    <div>
      <Box display="flex">
        <Box flexGrow={1}>
          <h1>👼 Checkin and checkout management</h1>
        </Box>
        <Box sx={{ verticalAlign: "middle" }}>
          <p>
            {childrenCtx.totalItems} children
            <br />
            {childrenCtx.currentPage} / {childrenCtx.pageCount} pages
          </p>
        </Box>
      </Box>

      <Box
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        borderRadius={2}
        bg="canvas.subtle"
        color="fg.muted"
      >
        {/* Header */}
        <Box
          display="grid"
          gridTemplateColumns="50px 1fr 1fr 1fr"
          gridGap={3}
          borderBottomColor="border.default"
          borderBottomStyle="solid"
          borderBottomWidth={1}
          fontWeight="600"
        >
          <Box p={2}></Box>
          <Box p={3}>Name</Box>
          <Box p={3}>Pickup time</Box>
          <Box p={3}>Action</Box>
        </Box>
        {/* Children */}
        {childrenCtx.loadedItems.map((item) => (
          <ChildItem key={item.childId} item={item} />
        ))}
      </Box>

      {childrenCtx.pageCount > 0 && (
        <Pagination
          pageCount={childrenCtx.pageCount}
          currentPage={childrenCtx.currentPage}
          onPageChange={childrenCtx.pageChange}
        />
      )}
    </div>
  );
};

export default ChildrenList;
