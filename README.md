# LINE API Bulk
# Bulk processor for LINE API to support large number of userIds.

For LINE Messaging API, there're some limitation on API call.
Such as [Link rich menu to multiple users API](https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-users) has limited 500 user IDs per request.
If you want to link richmenu to 1,000,000 users, you have to make 2,000 requests.

LINE API Bulk help make these things.

# Features!

  - Link Rich Menu To Multiple Users
  - Unlink Rich Menu From Multiple Users
  - Multicast Messages to Users

### Installation

Requires [Node.js](https://nodejs.org/) to run.
Install the dependencies.

```sh
$ cd line-api-bulk
$ npm install
```

### Save All UserIDs in file [userIds.json]
```json
[
    "U2fcb0a6f123456788901234567890123",
    "U2fcb0a6f123456788901234567890124"
]
```

### Change channelAccessToken in file [index.js] on line #3
```js
const channelAccessToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
```

# How To Use
CASE 1 : Link Rich Menu To Multiple Users
```js
const richMenuId = 'richmenu-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
processor.linkRichMenuToMultipleUsers(channelAccessToken, userIds, richMenuId);
```

CASE 2 : Unlink Rich Menu From Multiple Users
```js
processor.unlinkRichMenuFromMultipleUsers(channelAccessToken, userIds);
```

CASE 3 : Multicast Messages to Users
```js
const messages = [{ type: 'text', text: 'test' }];
processor.multicast(channelAccessToken, userIds, messages);
```

Then run
```sh
$ node index.js
```

See the results
```sh
   1 -  500 : SUCCESS :  { 'x-line-request-id': '17a23ebf-3f49-xxxx-xxxx-xxxxxxxxxxxx' }
 501 - 1000 : SUCCESS :  { 'x-line-request-id': '478cb4f5-8ffc-xxxx-xxxx-xxxxxxxxxxxx' }
1001 - 1500 : SUCCESS :  { 'x-line-request-id': 'eaf9afbb-7bf7-xxxx-xxxx-xxxxxxxxxxxx' }
1501 - 2000 : SUCCESS :  { 'x-line-request-id': '08677dff-26ed-xxxx-xxxx-xxxxxxxxxxxx' }
2001 - 2500 : SUCCESS :  { 'x-line-request-id': '49f00003-8f57-xxxx-xxxx-xxxxxxxxxxxx' }
2501 - 3000 : SUCCESS :  { 'x-line-request-id': 'bb197116-4f88-xxxx-xxxx-xxxxxxxxxxxx' }
3001 - 3500 : SUCCESS :  { 'x-line-request-id': '25c000b1-709c-xxxx-xxxx-xxxxxxxxxxxx' }
3501 - 4000 : SUCCESS :  { 'x-line-request-id': '2040fe30-b307-xxxx-xxxx-xxxxxxxxxxxx' }
4001 - 4500 : SUCCESS :  { 'x-line-request-id': 'b90134e6-e415-xxxx-xxxx-xxxxxxxxxxxx' }
4501 - 5000 : SUCCESS :  { 'x-line-request-id': 'b0b4e706-26ff-xxxx-xxxx-xxxxxxxxxxxx' }
5001 - 5500 : SUCCESS :  { 'x-line-request-id': '6a40610f-ca0e-xxxx-xxxx-xxxxxxxxxxxx' }
5501 - 6000 : SUCCESS :  { 'x-line-request-id': 'e35d106a-f70e-xxxx-xxxx-xxxxxxxxxxxx' }
6001 - 6500 : SUCCESS :  { 'x-line-request-id': '2f7d1d55-89c0-xxxx-xxxx-xxxxxxxxxxxx' }
6501 - 7000 : SUCCESS :  { 'x-line-request-id': '74e7d542-78fb-xxxx-xxxx-xxxxxxxxxxxx' }
7001 - 7500 : SUCCESS :  { 'x-line-request-id': 'd6ebffa8-9ba7-xxxx-xxxx-xxxxxxxxxxxx' }
7501 - 8000 : SUCCESS :  { 'x-line-request-id': '1a9c34f8-1252-xxxx-xxxx-xxxxxxxxxxxx' }
8001 - 8500 : SUCCESS :  { 'x-line-request-id': '7dedf4cd-7f4e-xxxx-xxxx-xxxxxxxxxxxx' }
8501 - 8731 : SUCCESS :  { 'x-line-request-id': '6263a4f9-df68-xxxx-xxxx-xxxxxxxxxxxx' }
```
Done.

### Todos

 - Write Tests
 - Upload Audience

License
----

ISC


**Happy Coding! LINE Develoeprs**