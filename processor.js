const line = require('@line/bot-sdk');
const limit = 500;

Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) { s = " " + s; }
  return s;
}

function displayError(err) {
  if (
    err &&
    err.originalError &&
    err.originalError.response &&
    err.originalError.response.data
  ) {
    const errorData = err.originalError.response.data;
    if (errorData.details) {
      return `${errorData.details[0].property} : ${errorData.details[0].message}`;
    } else {
      return errorData.message;
    }
  } else {
    return err.message;
  }
}

function displayRecordName(first, last, padding) {
  return `${(first).pad(padding)} - ${(last).pad(padding)}`
}

async function processMultipleUsers(userIds, options, fn) {
  const padding = Math.log10(userIds.length);
  for (let index = 0; index < userIds.length; index += limit) {
    const set = userIds.slice(index, index + limit);
    const recordName = displayRecordName(index + 1, index + set.length, padding);
    try {
      const result = await fn(set, options);
      console.log(`${recordName} : SUCCESS : `, result);
    } catch (err) {
      console.log(`${recordName} : ERROR : `, displayError(err));
    }
  }
}

async function linkRichMenuToMultipleUsers(channelAccessToken, userIds, richMenuId) {
  const lineClient = new line.Client({ channelAccessToken });
  processMultipleUsers(userIds, richMenuId, (set, richMenuId) => {
    return lineClient.linkRichMenuToMultipleUsers(richMenuId, set);
  })
}

async function unlinkRichMenuFromMultipleUsers(channelAccessToken, userIds) {
  const lineClient = new line.Client({ channelAccessToken });
  processMultipleUsers(userIds, null, (set) => {
    return lineClient.unlinkRichMenusFromMultipleUsers(set);
  })
}

async function multicast(channelAccessToken, userIds, messages) {
  const lineClient = new line.Client({ channelAccessToken });
  processMultipleUsers(userIds, messages, (set, messages) => {
    return lineClient.multicast(set, messages);
  })
}

module.exports = {
  linkRichMenuToMultipleUsers,
  unlinkRichMenuFromMultipleUsers,
  multicast,
}