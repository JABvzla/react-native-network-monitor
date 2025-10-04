import { NetworkListItemClosed } from './network-list-item-closed';
import { NetworkListItemOpen } from './network-list-item-open';
import { ToggleButton } from './toggle-button';

export const NetworkListItem = (item) => {
  return (
    <ToggleButton
      closed={<NetworkListItemClosed {...item} />}
      open={<NetworkListItemOpen {...item} />}
    />
  );
};
