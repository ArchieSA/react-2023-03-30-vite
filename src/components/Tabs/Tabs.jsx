import { Button } from "../../components/Button/Button";
import React, { useEffect } from "react";

export const Tabs = ({ tabs, onTabClick }) => {
  return (
    <div>
      {tabs.map(({ id, title }) => (
        <Button key={id} onClick={() => onTabClick(id)}>
          {title}
        </Button>
      ))}
    </div>
  );
};
