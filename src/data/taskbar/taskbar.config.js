import { programsConfig } from '../programs';
import {
    clockPopupConfig,
    startPopupConfig,
    systemTrayConfig
} from './index';
import { notificationsPopupConfig } from './notifications.config';

export const taskbarConfig = {
    actions: [startPopupConfig],

    programs: programsConfig.filter((programs) => programs.isPinnedToTaskbar),

    'system-tray': [systemTrayConfig],

    clock: [clockPopupConfig],

    notifications: [notificationsPopupConfig],

    desktop: {
        'show-hidden': 'show',
        network: 'network',
    },
};
