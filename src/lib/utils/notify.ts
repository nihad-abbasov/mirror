import type { NotificationArgsProps } from "antd";
import { notification } from "antd";

type NotifyType = "success" | "info" | "warning" | "error";

interface NotifyOptions extends Partial<NotificationArgsProps> {
  type?: NotifyType;
}

export const notify = ({
  type = "info",
  message,
  description,
  placement = "topRight",
  duration = 3,
  ...rest
}: NotifyOptions) => {
  notification[type]({
    message,
    description,
    placement,
    duration,
    ...rest,
  });
};
