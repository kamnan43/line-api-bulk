const processor = require('./processor');

const channelAccessToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const userIds = require('./userIds.json');

// # CASE 1 : Link Rich Menu To Multiple Users
// const richMenuId = 'richmenu-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
// processor.linkRichMenuToMultipleUsers(channelAccessToken, userIds, richMenuId);

// // # CASE 2 : Unlink Rich Menu From Multiple Users
// processor.unlinkRichMenuFromMultipleUsers(channelAccessToken, userIds);

// // # CASE 3 : Multicast Messages to Users
// const messages = [{ type: 'text', text: 'test' }];
// processor.multicast(channelAccessToken, userIds, messages);