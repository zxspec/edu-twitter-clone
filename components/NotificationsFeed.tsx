import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useNotifications } from "@/hooks/useNotifications";
import { fetcher } from "@/libs/fetcher";
import { useEffect } from "react";
import { BsTwitter } from "react-icons/bs";

export const NotificationsFeed = () => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: notifications, mutate: mutateNotifications } = useNotifications(
    currentUser?.id
  );

  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (!notifications?.length) {
    return (
      <div className="text-neutral-600 text-center p-6 text-xl">
        No notifications yet
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {notifications.map((notification: Record<string, any>) => {
        return (
          <div
            key={notification.id}
            className="flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800"
          >
            <BsTwitter color="white" size={32} />
            <p className="text-white">{notification.body}</p>
          </div>
        );
      })}
    </div>
  );
};
