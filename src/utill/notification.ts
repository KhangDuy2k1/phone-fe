
type NotificationType = 'success' | 'info' | 'warning' | 'error';
 export const openNotification = (type: NotificationType, message: string, api: any) => {
    api["success"]({
      message: 'Thông báo',
      description: message
    });
  };
