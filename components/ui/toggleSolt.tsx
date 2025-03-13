import { ReactNode } from "react";

type ToggleSlotProps = {
  trigger: ReactNode;
  children: ReactNode;
};

const ToggleSlot = ({ trigger, children }: ToggleSlotProps) => {

  return (
    <div className="group relative cursor-pointer">
      {trigger}
      <div className="absolute right-0 mt-0 w-max bg-white shadow-lg rounded-md p-2 hidden group-hover:block">
          {children}
      </div>
    </div>
  );
};

export default ToggleSlot;